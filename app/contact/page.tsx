"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      // Sucesso
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-4 font-[var(--font-orbitron)]">
              Contact Us
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto font-[var(--font-inter)]">
              Do you have an idea, question or want to work with us? We would love to hear it!
            </p>
          </motion.div>

          {/* Card do Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 font-[var(--font-inter)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 transition-colors outline-none text-slate-300 placeholder-slate-500 font-[var(--font-inter)]"
                  placeholder="Full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 font-[var(--font-inter)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 transition-colors outline-none text-slate-300 placeholder-slate-500 font-[var(--font-inter)]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Assunto */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2 font-[var(--font-inter)]">
                  Topic
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 transition-colors outline-none text-slate-300 font-[var(--font-inter)]"
                >
                  <option value="" disabled className="bg-slate-950">
                    Select a topic
                  </option>
                  <option value="Suporte" className="bg-slate-950">
                    Suport
                  </option>
                  <option value="Feedback" className="bg-slate-950">
                    Feedback
                  </option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 font-[var(--font-inter)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg p-3 focus:border-purple-500 transition-colors outline-none text-slate-300 placeholder-slate-500 resize-none font-[var(--font-inter)]"
                  placeholder="Tell us more about your idea, question, or proposal..."
                />
              </div>

              {/* Status de Envio */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm font-[var(--font-inter)]"
                >
                  Message sent succesfully! We will contact you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm font-[var(--font-inter)]"
                >
                  There was a problem sending the message. Try again.
                </motion.div>
              )}

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-[var(--font-inter)]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
