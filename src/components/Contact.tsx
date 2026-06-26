import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { FAQS } from '../data';

interface ContactFormFields {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  // Accordion state for FAQs
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  // Form states
  const [formFields, setFormFields] = useState<ContactFormFields>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormFields>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const toggleFAQ = (faqId: string) => {
    setOpenFAQId((prev) => (prev === faqId ? null : faqId));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormFields]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormFields> = {};
    if (!formFields.name.trim()) newErrors.name = 'Full name is required';
    if (!formFields.email.trim() || !formFields.email.includes('@')) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formFields.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formFields.message.trim()) newErrors.message = 'Inquiry message details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate sending message
    setSubmittedName(formFields.name);
    setSubmitSuccess(true);
    setFormFields({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen" id="contact-view-container">
      <Helmet>
        <title>Contact Fitzee</title>
        <meta name="description" content="Reach out for support and inquiries" />
        <link rel="canonical" href="https://fitzzee.netlify.app/contact" />
      </Helmet>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 text-center text-white" id="contact-header-banner">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm font-light text-slate-400">
          We'd love to hear from you. Reach out with any equipment inquiries, order updates, or wholesale requests.
        </p>
      </section>

      {/* Info & Form side-by-side section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Coordinates & Hours (lg:span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Connect With Us</span>
              <h2 className="text-2xl font-black tracking-tight text-slate-100 bg-slate-900 px-5 py-3 rounded-2xl w-fit">
                Contact Information
              </h2>
            </div>

            {/* Address, Phone, Email stack */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Fulfillment Address</h4>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed font-light">
                    Fitzee Fitness Solutions<br />
                    125 Wellness Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Phone Assistance</h4>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed font-light">
                    <a href="tel:+15551234567" className="hover:text-orange-600 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Email Support</h4>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed font-light">
                    <a href="mailto:support@fitzee.com" className="hover:text-orange-600 transition-colors">
                      support@fitzee.com
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Business Hours element */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Business Hours</h4>
              </div>

              <div className="space-y-2 text-sm text-slate-600 pt-1 font-light">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span>Monday – Friday:</span>
                  <span className="font-bold text-slate-900">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span>Saturday:</span>
                  <span className="font-bold text-slate-900">10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold text-red-500">Closed</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form (lg:span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-md">
              <h3 className="text-lg font-black tracking-tight text-slate-950">Inquire Instantly</h3>
              <p className="text-xs text-slate-400 font-light mt-1">Our customer experience agents reply within 1 working day.</p>

              {submitSuccess ? (
                /* Success Billboard overlay template */
                <div className="mt-6 rounded-2xl bg-orange-50/70 border border-orange-200 p-6 text-center animate-in zoom-in-95" id="form-success-banner">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-slate-900">Inquiry Received, {submittedName}!</h4>
                  <p className="mt-2 text-xs font-light leading-relaxed text-slate-600 max-w-sm mx-auto">
                    Thank you for connecting with Fitzee Support. We have logged your request securely under pending priority queues and will contact you directly via your specified email address.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-5 rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-orange-600"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                /* Contact input fields */
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" id="contact-feedback-form">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formFields.name}
                      onChange={handleInputChange}
                      placeholder="Sarah Johnson"
                      className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-500/20'
                          : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                      }`}
                      id="input-contact-name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email & Phone fields row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Email field */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formFields.email}
                        onChange={handleInputChange}
                        placeholder="sarah@example.com"
                        className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-500/20'
                            : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                        }`}
                        id="input-contact-email"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Phone field */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formFields.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        id="input-contact-phone"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formFields.subject}
                      onChange={handleInputChange}
                      placeholder="Requesting Adjustable Dumbbells sizing query"
                      className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-red-300 focus:ring-red-500/20'
                          : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                      }`}
                      id="input-contact-subject"
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formFields.message}
                      onChange={handleInputChange}
                      placeholder="Write your detailed inquiry..."
                      className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-300 focus:ring-red-500/20'
                          : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                      }`}
                      id="input-contact-message"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {/* Form Trigger button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-700 active:scale-[0.99] shadow-md shadow-orange-500/10"
                    id="submit-contact-form-btn"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="bg-white border-t border-slate-100 py-20" id="contact-faq-section">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Got Questions?</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-xs text-slate-400 font-light">Explore answers regarding shipping limits, dynamic client support warranties, and return cycles.</p>
          </div>

          {/* Accordion Loop */}
          <div className="space-y-4" id="faq-accordions-group">
            {FAQS.map((faq) => {
              const isFAQOpen = openFAQId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300 hover:border-orange-200"
                  id={`faq-item-accordion-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-slate-800 focus:outline-none"
                    id={`faq-trigger-${faq.id}`}
                  >
                    <span className="text-sm md:text-base pr-4">{faq.question}</span>
                    {isFAQOpen ? (
                      <ChevronUp className="h-5 w-5 text-orange-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {/* Expand panel holding answers */}
                  {isFAQOpen && (
                    <div className="bg-white px-6 py-5 border-t border-slate-100 animate-in slide-in-from-top-4 duration-200" id={`faq-answer-${faq.id}`}>
                      <p className="text-sm font-light leading-relaxed text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
