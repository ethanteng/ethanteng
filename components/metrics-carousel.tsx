"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const metrics = [
  { value: "$1M+", label: "Self-serve ARR built", company: "at meez" },
  { value: "50%", label: "Activation rate", company: "at meez (within 7 days)" },
  { value: "$100M+", label: "Self-serve ARR milestone", company: "at Postman" },
  { value: "3X", label: "Revenue growth", company: "at Recurly" },
  { value: "<1 day", label: "Time-to-value", company: "at meez (down from 30 days)" },
  { value: "+50%", label: "PLG revenue growth", company: "at Postman (YoY)" },
  { value: "$43T", label: "Market access", company: "at Braintree/PayPal" },
  { value: "<5%", label: "Churn rate", company: "at meez (key cohorts)" },
];

export function MetricsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentMetric = metrics[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-xl py-8 sm:py-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              {currentMetric.value}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg sm:text-xl font-semibold text-foreground">
                {currentMetric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentMetric.company}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {metrics.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-1 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to metric ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

