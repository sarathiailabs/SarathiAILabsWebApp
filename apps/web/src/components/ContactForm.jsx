import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'AI Agents & Workflows',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/vaibhav.arde@sarathiailabs.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _cc: 'vaibhav.arde@gmail.com',
          _subject: `New Consultation Inquiry from ${formData.name} (${formData.company})`,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'AI Agents & Workflows',
          message: '',
        });
      } else {
        setFormStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please verify your details and try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Network error. Please try again or email us directly.');
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-teal-300 mb-6 animate-bounce" />
        <h3 className="text-2xl font-bold text-white mb-4">Message Received!</h3>
        <p className="text-white/80 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. We have received your request and our team will get in touch with you shortly to schedule a conversation.
        </p>
        <Button
          onClick={() => setFormStatus('idle')}
          variant="secondary"
          className="mt-8 rounded-full px-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="space-y-5 text-left relative z-10">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 text-sm"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
            Area of Interest
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 text-sm"
            >
              <option value="AI Agents & Workflows" className="bg-cyan-950 text-white">AI Agents & Workflows</option>
              <option value="Software QA & Test Automation" className="bg-cyan-950 text-white">Software QA & Test Automation</option>
              <option value="Custom Software Engineering" className="bg-cyan-950 text-white">Custom Software Engineering</option>
              <option value="Training & Team Upskilling" className="bg-cyan-950 text-white">Training & Team Upskilling</option>
              <option value="Other" className="bg-cyan-950 text-white">Other Inquiry</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/60">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
            Project Details & Goals
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about what you want to build or automate..."
            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-200 text-sm resize-none"
          />
        </div>

        {formStatus === 'error' && (
          <div className="flex items-center gap-2 text-rose-300 text-sm bg-rose-950/30 border border-rose-900/50 rounded-xl p-3">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={formStatus === 'submitting'}
          variant="secondary"
          className="w-full h-12 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
        >
          {formStatus === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              Sending Request...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Details
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
