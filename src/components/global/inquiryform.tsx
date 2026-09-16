"use client";

import { useState, ChangeEvent, FormEvent, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

/**
 * Reusable Inquiry / Contact form.
 * Form handling (state, change, submit, success screen) lives HERE.
 * All visual styling comes from the `classNames` prop, so the same
 * component can render the popup, sticky-sidebar, and contact-us forms.
 */

export interface InquiryFormClassNames {
  wrapper?: string;
  header?: string;
  title?: string;
  logo?: string;
  form?: string;
  grid?: string;
  label?: string;
  inputWrap?: string;
  icon?: string;
  /** icon className for the message textarea — usually needs top alignment, e.g. "... mt-1" instead of "... top-1/2 -translate-y-1/2" */
  textareaIcon?: string;
  input?: string;
  select?: string;
  textareaWrap?: string;
  textarea?: string;
  button?: string;
  errorText?: string;
  successWrapper?: string;
  successIcon?: string;
  successTitle?: string;
  successText?: string;
}

export interface InquiryFormIcons {
  name?: IconType;
  phone?: IconType;
  email?: IconType;
  country?: IconType;
  subject?: IconType;
  message?: IconType;
}

export interface InquiryFormHeader {
  title?: ReactNode;
  logo?: StaticImageData | string;
}

export interface CountryOption {
  value: string;
  label: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  country: string;
  subject: string;
  message: string;
}

export interface InquiryFormProps {
  classNames?: InquiryFormClassNames;
  icons?: InquiryFormIcons;
  header?: InquiryFormHeader;
  buttonContent?: ReactNode;
  countryOptions?: CountryOption[];
  onSuccess?: (data: InquiryFormData) => void;
  /** API route that receives the form data. Defaults to "/api/send-mail" */
  apiEndpoint?: string;
}

const DEFAULT_COUNTRY_OPTIONS: CountryOption[] = [
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "uk", label: "UK" },
  { value: "europe", label: "Europe" },
  { value: "uae", label: "UAE" },
  { value: "other", label: "Other" },
];

export default function InquiryForm({
  classNames = {},
  icons = {},
  header,
  buttonContent = "Send Enquiry",
  countryOptions = DEFAULT_COUNTRY_OPTIONS,
  onSuccess,
  apiEndpoint = "/api/send-mail",
}: InquiryFormProps) {
  const [form, setForm] = useState<InquiryFormData>({
    name: "",
    phone: "",
    email: "",
    country: countryOptions[0]?.value || "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: "Inquiry Form", data: form }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      onSuccess?.(form);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className={classNames.successWrapper}>
        <div className={classNames.successIcon}>✓</div>
        <h3 className={classNames.successTitle}>Request Sent!</h3>
        <p className={classNames.successText}>
          Our Immigration Expert will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div className={classNames.wrapper}>
      {header && (
        <div className={classNames.header}>
          {header.title && <h2 className={classNames.title}>{header.title}</h2>}
          {header.logo && (
            <Image src={header.logo} alt="logo" className={classNames.logo ?? ""} />
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className={classNames.form}>
        <div className={classNames.grid}>
          <Field
            classNames={classNames}
            Icon={icons.name}
            label="Name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Field
            classNames={classNames}
            Icon={icons.phone}
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Contact No."
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Field
            classNames={classNames}
            Icon={icons.email}
            label="Email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div>
            <label className={classNames.label}>Country to Migrate</label>
            <div className={classNames.inputWrap}>
              {icons.country && (
                <icons.country size={14} className={classNames.icon} />
              )}
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={classNames.select || classNames.input}
              >
                {countryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Field
          classNames={classNames}
          Icon={icons.subject}
          label="Subject"
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <div>
          <label className={classNames.label}>Message</label>
          <div className={classNames.textareaWrap || classNames.inputWrap}>
            {icons.message && (
              <icons.message
                size={14}
                className={classNames.textareaIcon || classNames.icon}
              />
            )}
            <textarea
              name="message"
              rows={2}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              className={classNames.textarea}
            />
          </div>
        </div>

        {error && <p className={classNames.errorText}>{error}</p>}

        <button type="submit" disabled={sending} className={classNames.button}>
          {sending ? "Sending..." : buttonContent}
        </button>
      </form>
    </div>
  );
}

interface FieldProps {
  classNames: InquiryFormClassNames;
  Icon?: IconType;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Field({
  classNames,
  Icon,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: FieldProps) {
  return (
    <div>
      <label className={classNames.label}>{label}</label>
      <div className={classNames.inputWrap}>
        {Icon && <Icon size={14} className={classNames.icon} />}
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames.input}
        />
      </div>
    </div>
  );
}