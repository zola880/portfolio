import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS configuration – replace with your own keys if needed
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_vm86sxl',
  TEMPLATE_ID: 'template_deenkxb',
  PUBLIC_KEY: 'ZcYC71lOhUM3G9SEo'
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' | 'error'

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    try {
      // Basic validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Send via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_email: 'zelalemybabe77@gmail.com',   // your email address
          reply_to: formData.email.trim()
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitMessage('✅ Message sent! I\'ll reply within 24 hours.');
        setMessageType('success');
        setFormData({ name: '', email: '', message: '' }); // clear form
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('⚠️ Couldn\'t send. Please email me directly at zelalemybabe77@gmail.com');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      // Auto-dismiss message after 8 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 8000);
    }
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'zelalemybabe77@gmail.com',
      href: 'mailto:zelalemybabe77@gmail.com',
      color: '#A4161A'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+251 989 000 256',
      href: 'tel:+251989000256',
      color: '#660708'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Telegram',
      value: '@Z3lelaw',
      href: 'https://t.me/Z3lelaw?start=portfolio_inquiry',
      color: '#0088cc'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: null,
      color: '#D97706'
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: '#c7b690' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1.5 rounded-full text-sm font-medium mb-4 border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderColor: '#D1D1D6',
                  color: '#A4161A'
                }}>
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#1D1D1F' }}>
            Let's <span style={{ color: '#A4161A' }}>Connect</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#3a3a3c' }}>
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href || undefined}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ x: 4 }}
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  item.href ? 'cursor-pointer hover:shadow-sm' : 'cursor-default'
                }`}
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderColor: '#D1D1D6',
                }}
                onClick={(e) => !item.href && e.preventDefault()}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                     style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: '#8e8e93' }}>
                    {item.label}
                  </p>
                  <p className="font-medium truncate" style={{ color: '#1D1D1F' }}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: 'rgba(16,185,129,0.2)'
              }}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                        style={{ backgroundColor: '#10B981' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" 
                        style={{ backgroundColor: '#10B981' }} />
                </span>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#1D1D1F' }}>Available for work</p>
                  <p className="text-xs" style={{ color: '#8e8e93' }}>Freelance & full-time roles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="space-y-5 p-6 md:p-8 rounded-2xl border-2"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#D1D1D6',
              }}
            >
              {/* Form Header */}
              <div className="mb-2">
                <h3 className="text-xl font-bold mb-1" style={{ color: '#1D1D1F' }}>Send a Message</h3>
                <p className="text-sm" style={{ color: '#8e8e93' }}>I typically reply within 24 hours.</p>
              </div>

              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1D1D1F' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none disabled:opacity-50"
                    style={{ 
                      borderColor: '#D1D1D6',
                      backgroundColor: '#fff',
                      color: '#1D1D1F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#A4161A'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D1D6'}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1D1D1F' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none disabled:opacity-50"
                    style={{ 
                      borderColor: '#D1D1D6',
                      backgroundColor: '#fff',
                      color: '#1D1D1F'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#A4161A'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D1D6'}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1D1D1F' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none resize-none disabled:opacity-50"
                  style={{ 
                    borderColor: '#D1D1D6',
                    backgroundColor: '#fff',
                    color: '#1D1D1F'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#A4161A'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D1D6'}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ 
                  background: 'linear-gradient(135deg, #A4161A, #660708)',
                  boxShadow: '0 4px 14px rgba(164,22,26,0.25)'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-xl text-sm border ${
                      messageType === 'success' 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    {messageType === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#DC2626' }} />
                    )}
                    <span style={{ color: messageType === 'success' ? '#1D1D1F' : '#A4161A' }}>
                      {submitMessage}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}