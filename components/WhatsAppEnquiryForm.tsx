'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, CheckCircle2, Copy, MessageCircle } from 'lucide-react';

interface FormErrors {
  name?: string;
  message?: string;
}

interface WhatsAppEnquiryFormProps {
  brandName: string;
  neighborhood: string;
  city: string;
  whatsappNumber: string;
}

export function WhatsAppEnquiryForm({
  brandName,
  neighborhood,
  city,
  whatsappNumber,
}: WhatsAppEnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [formattedText, setFormattedText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const buildFormattedMessage = (cleanName: string, cleanPhone: string, cleanMessage: string) => {
    const lines = [`*${brandName} — Gym Enquiry*`, `Name: ${cleanName}`];
    if (cleanPhone) {
      lines.push(`Phone: ${cleanPhone}`);
    }
    lines.push(`Message: ${cleanMessage}`);
    lines.push(`Location: ${neighborhood}, ${city}`);
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Name is mandatory (at least 2 characters).';
    }
    if (message.trim().length < 3) {
      nextErrors.message = 'Message is mandatory.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const formatted = buildFormattedMessage(name.trim(), phone.trim(), message.trim());
    setFormattedText(formatted);
    setCopied(false);
  };

  const handleCopyMessage = async () => {
    if (!formattedText) return;
    try {
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setMessage('');
    setErrors({});
    setFormattedText(null);
    setCopied(false);
  };

  const whatsappInquiryUrl = formattedText
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedText)}`
    : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hello ${brandName}, I would like to enquire about gym membership in ${neighborhood}.`
      )}`;

  if (formattedText) {
    return (
      <div
        role="status"
        className="py-6 border border-[#164E4A]/25 bg-[#EDF3F2] rounded-xl px-5 sm:px-6"
      >
        <div className="flex items-center gap-2.5 mb-3">
          <CheckCircle2 className="w-6 h-6 text-[#164E4A] shrink-0" aria-hidden="true" />
          <h3 className="font-display text-lg font-bold text-[#101C2C]">
            Formatted WhatsApp Message Ready
          </h3>
        </div>

        <pre className="bg-white border border-[#101C2C]/12 rounded-lg p-4 text-xs text-[#101C2C]/85 font-sans whitespace-pre-wrap leading-relaxed mb-5">
          {formattedText}
        </pre>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex-1"
          >
            <MessageCircle className="w-4 h-4 text-[#101C2C]" aria-hidden="true" />
            <span>Open WhatsApp &amp; Send</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="btn-secondary !min-h-[44px] !px-4 !text-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#164E4A]" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="text-xs font-semibold text-[#164E4A] hover:underline px-2 py-2 cursor-pointer"
          >
            Edit Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <h3 className="font-display text-base font-bold text-[#101C2C]">WhatsApp Enquiry</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-[#101C2C] mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aarav Sharma"
            aria-invalid={Boolean(errors.name)}
            className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAF8F4] border border-[#101C2C]/18 rounded-lg text-[#101C2C] placeholder:text-[#101C2C]/40 focus:outline-none focus:bg-white focus:border-[#164E4A] focus:ring-2 focus:ring-[#F28C28]/40"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-700 font-medium">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-semibold text-[#101C2C] mb-1.5"
          >
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98450 12345"
            className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAF8F4] border border-[#101C2C]/18 rounded-lg text-[#101C2C] placeholder:text-[#101C2C]/40 focus:outline-none focus:bg-white focus:border-[#164E4A] focus:ring-2 focus:ring-[#F28C28]/40"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-[#101C2C] mb-1.5"
        >
          Your Message *
        </label>
        <textarea
          id="contact-message"
          rows={3}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi, I would like to visit the Indiranagar gym tomorrow at 7 AM."
          aria-invalid={Boolean(errors.message)}
          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F4] border border-[#101C2C]/18 rounded-lg text-[#101C2C] placeholder:text-[#101C2C]/40 focus:outline-none focus:bg-white focus:border-[#164E4A] focus:ring-2 focus:ring-[#F28C28]/40"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-700 font-medium">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="btn-teal group !w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
        <span>Send Inquiry to WhatsApp</span>
        <ArrowUpRight
          className="w-4 h-4 text-[#F28C28] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
