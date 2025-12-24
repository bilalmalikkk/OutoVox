'use client';

import { useState } from 'react';
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@outovox.com',
      link: 'mailto:hello@outovox.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Silicon Valley, CA',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon-Fri: 9AM-6PM',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 grid-background opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-white">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                        <div className="text-white group-hover:text-primary-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-black border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', icon: Linkedin, link: '#' },
                  { name: 'Twitter', icon: Twitter, link: '#' },
                  { name: 'GitHub', icon: Github, link: '#' },
                  { name: 'Instagram', icon: Instagram, link: '#' },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className="group w-14 h-14 flex items-center justify-center bg-black border border-white/20 rounded-lg hover:bg-white transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      <IconComponent className="w-6 h-6 text-white group-hover:text-black transition-colors" strokeWidth={2} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

