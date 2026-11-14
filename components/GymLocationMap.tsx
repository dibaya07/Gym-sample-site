'use client';

import { useCallback, useState } from 'react';
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { Crosshair, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { GYM_INFO } from '@/data/gym-data';

interface NearbySpot {
  id: string;
  name: string;
  location: google.maps.LatLngLiteral;
  address?: string;
}

interface LiveMarker {
  label: string;
  position: google.maps.LatLngLiteral;
  distanceInfo: string;
}

interface GymLocationMapProps {
  apiKey: string;
}

function haversineKm(a: google.maps.LatLngLiteral, b: google.maps.LatLngLiteral): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function GymMapContent() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);
  const [nearbySpots, setNearbySpots] = useState<NearbySpot[]>([]);
  const [loadingTransit, setLoadingTransit] = useState(false);
  const [transitStatus, setTransitStatus] = useState<string | null>(null);
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);
  const [liveOrigin, setLiveOrigin] = useState<LiveMarker | null>({
    label: GYM_INFO.sampleUserLocation.label,
    position: {
      lat: GYM_INFO.sampleUserLocation.lat,
      lng: GYM_INFO.sampleUserLocation.lng,
    },
    distanceInfo: GYM_INFO.sampleUserLocation.distanceText,
  });

  const placesLib = useMapsLibrary('places');

  const handleFindNearbyTransit = useCallback(async () => {
    if (!placesLib) {
      setTransitStatus('Map places library is still loading. Try again shortly.');
      return;
    }

    setLoadingTransit(true);
    setTransitStatus(null);

    try {
      const { Place } = placesLib;
      const request = {
        fields: ['id', 'displayName', 'location', 'formattedAddress'],
        locationRestriction: {
          center: GYM_INFO.coordinates,
          radius: 900,
        },
        includedPrimaryTypes: ['transit_station', 'parking'],
        maxResultCount: 4,
      };

      const { places } = await Place.searchNearby(request);
      if (!places || places.length === 0) {
        setNearbySpots([]);
        setTransitStatus('No nearby metro or parking pins found in 900m radius.');
      } else {
        const mapped: NearbySpot[] = places
          .filter((p) => p.location)
          .map((p) => ({
            id: p.id,
            name: p.displayName || 'Nearby Access',
            location: {
              lat: p.location!.lat(),
              lng: p.location!.lng(),
            },
            address: p.formattedAddress || undefined,
          }));
        setNearbySpots(mapped);
        setTransitStatus(`Showing ${mapped.length} nearby metro & parking points.`);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('RESOURCE_EXHAUSTED') || msg.includes('429') || msg.includes('OVER_QUERY_LIMIT')) {
        window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
      }
      setTransitStatus('Unable to fetch nearby transit options right now.');
    } finally {
      setLoadingTransit(false);
    }
  }, [placesLib]);

  const handleCheckMyLocation = () => {
    if (!navigator.geolocation) {
      setTransitStatus('Live GPS unavailable in this browser — showing Indiranagar Metro example.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const km = haversineKm(userPos, GYM_INFO.coordinates);
        setLiveOrigin({
          label: 'Your Live Location',
          position: userPos,
          distanceInfo: `${km.toFixed(1)} km from Vajra Athletic`,
        });
        setTransitStatus(`Live location locked: ${km.toFixed(1)} km from club.`);
      },
      () => {
        setLiveOrigin({
          label: GYM_INFO.sampleUserLocation.label,
          position: {
            lat: GYM_INFO.sampleUserLocation.lat,
            lng: GYM_INFO.sampleUserLocation.lng,
          },
          distanceInfo: GYM_INFO.sampleUserLocation.distanceText,
        });
        setTransitStatus('Showing sample live route from Indiranagar Metro.');
      },
      { timeout: 6000 }
    );
  };

  const activeSpot = nearbySpots.find((s) => s.id === selectedSpotId) || null;

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden border border-[#101C2C]/12 bg-white shadow-[0_10px_28px_rgba(16,28,44,0.04)]">
      {/* Live Location Example Banner */}
      <div className="bg-[#FAF8F4] px-4 py-3 border-b border-[#101C2C]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#164E4A] shrink-0" aria-hidden="true" />
          <span className="font-semibold text-[#101C2C] truncate">
            Live Location Example: {liveOrigin?.label} &rarr;{' '}
            <strong className="text-[#164E4A]">{liveOrigin?.distanceInfo}</strong>
          </span>
        </div>
        <button
          type="button"
          onClick={handleCheckMyLocation}
          className="inline-flex items-center gap-1 font-semibold text-[#164E4A] hover:text-[#F28C28] transition-colors cursor-pointer shrink-0"
        >
          <Crosshair className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Use My Live Location</span>
        </button>
      </div>

      <div className="relative w-full h-[340px] lg:flex-1 lg:min-h-[380px] bg-[#FAF8F4]">
        <GoogleMap
          mapId="DEMO_MAP_ID"
          defaultCenter={GYM_INFO.coordinates}
          defaultZoom={15}
          gestureHandling="cooperative"
          disableDefaultUI={false}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          className="w-full h-full"
        >
          <AdvancedMarker
            ref={markerRef}
            position={GYM_INFO.coordinates}
            title={GYM_INFO.brandName}
            onClick={() => setInfoOpen((prev) => !prev)}
          >
            <Pin background="#F28C28" borderColor="#101C2C" glyphColor="#101C2C" scale={1.15} />
          </AdvancedMarker>

          {liveOrigin && (
            <AdvancedMarker position={liveOrigin.position} title={liveOrigin.label}>
              <Pin background="#101C2C" borderColor="#FAF8F4" glyphColor="#F28C28" scale={0.9} />
            </AdvancedMarker>
          )}

          {infoOpen && marker && (
            <InfoWindow
              anchor={marker}
              maxWidth={250}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div className="p-1 text-[#101C2C]">
                <p className="font-bold text-sm mb-0.5">{GYM_INFO.brandName}</p>
                <p className="text-xs text-[#101C2C]/80 leading-snug mb-1.5">
                  {GYM_INFO.addressLine1}, {GYM_INFO.addressLine2}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${GYM_INFO.coordinates.lat},${GYM_INFO.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#164E4A] underline"
                >
                  Get Directions
                </a>
              </div>
            </InfoWindow>
          )}

          {nearbySpots.map((spot) => (
            <AdvancedMarker
              key={spot.id}
              position={spot.location}
              title={spot.name}
              onClick={() => setSelectedSpotId(spot.id)}
            >
              <Pin background="#164E4A" borderColor="#FAF8F4" glyphColor="#FAF8F4" scale={0.9} />
            </AdvancedMarker>
          ))}

          {activeSpot && (
            <InfoWindow
              position={activeSpot.location}
              maxWidth={220}
              onCloseClick={() => setSelectedSpotId(null)}
            >
              <div className="p-1 text-[#101C2C]">
                <p className="font-bold text-xs mb-0.5">{activeSpot.name}</p>
                {activeSpot.address && (
                  <p className="text-[11px] text-[#101C2C]/75">{activeSpot.address}</p>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      {/* Bottom Interactive Bar */}
      <div className="bg-white text-[#101C2C] p-4 border-t border-[#101C2C]/10 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-[#101C2C]/70 tabular-nums">
            {transitStatus ||
              `Live Pin: ${GYM_INFO.coordinates.lat.toFixed(4)}° N, ${GYM_INFO.coordinates.lng.toFixed(4)}° E · Indiranagar`}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            disabled={loadingTransit}
            onClick={handleFindNearbyTransit}
            className="btn-teal !min-h-[38px] !px-3.5 !py-2 !text-xs disabled:opacity-60"
          >
            <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{loadingTransit ? 'Searching...' : 'Nearby Metro & Parking'}</span>
          </button>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${GYM_INFO.coordinates.lat},${GYM_INFO.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !min-h-[38px] !px-3.5 !py-2 !text-xs"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function GymLocationMap({ apiKey }: GymLocationMapProps) {
  if (!apiKey) {
    return (
      <div className="h-full min-h-[420px] bg-white text-[#101C2C] rounded-xl border border-[#101C2C]/12 p-8 flex flex-col justify-between">
        <div>
          <MapPin className="w-7 h-7 text-[#F28C28] mb-4" aria-hidden="true" />
          <h3 className="font-display text-xl font-bold mb-2">
            {GYM_INFO.brandName} — {GYM_INFO.neighborhood}, {GYM_INFO.city}
          </h3>
          <p className="text-sm text-[#101C2C]/75 mb-4">{GYM_INFO.fullAddress}</p>
          <p className="text-xs font-semibold text-[#164E4A] mb-2">
            Live Location Example: {GYM_INFO.sampleUserLocation.label} &rarr;{' '}
            {GYM_INFO.sampleUserLocation.distanceText}
          </p>
          <p className="text-xs text-[#101C2C]/65 tabular-nums">
            Coordinates: {GYM_INFO.coordinates.lat}° N, {GYM_INFO.coordinates.lng}° E
          </p>
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${GYM_INFO.coordinates.lat},${GYM_INFO.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary self-start"
        >
          <span>View Location on Google Maps</span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey} libraries={['marker', 'places']} language="en" region="IN">
      <GymMapContent />
    </APIProvider>
  );
}
