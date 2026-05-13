"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Construction } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full mb-8"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-semibold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] text-white tracking-[-0.04em] max-w-6xl"
            >
              Case studies
              <br />
              <span className="font-bold text-gradient-emerald">
                coming soon.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Kita lagi finalisasi case study dari 50+ project sejak 2018.
                Mau liat hasil kerja kita duluan? Request portfolio detail
                via WhatsApp.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all"
                >
                  <span>Request portfolio detail</span>
                  <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
