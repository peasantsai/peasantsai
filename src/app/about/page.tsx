"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection";
import { useTranslation } from "../../context/LanguageContext";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-white">About Us</h1>
          <motion.div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10" whileHover={{ scale: 1.01 }}>
            <img src="/images/about.jpg" alt="About peasants AI" className="w-full object-cover aspect-[21/9]" />
          </motion.div>
          <p className="text-2xl text-gray-400 mb-8 leading-relaxed font-light">
            Open AI for the People
          </p>
          <div className="space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              peasants AI fine-tunes small models on commodity GPUs, quantizes them for Raspberry Pis, and releases everything under Apache 2.0. Our grassroots labs meet in community centers and online forums to share datasets and evaluate fairness.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
