"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  highlight: string;
  index: number;
}

const companyLogos: Record<string, string> = {
  "meez": "/meez.png",
  "Postman": "/postman.jpg",
  "Braintree/PayPal": "/braintree.svg",
};

export function ExperienceCard({ company, role, highlight, index }: ExperienceCardProps) {
  const logo = companyLogos[company];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Stage number badge */}
      <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
        {index + 1}
      </div>

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-background to-muted/30 rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl group-hover:scale-[1.02]">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative flex flex-col sm:flex-row items-start gap-6">
          {/* Large Company Logo */}
          {logo && (
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white flex items-center justify-center shrink-0 border-2 border-border/20 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
              <Image 
                src={logo} 
                alt={`${company} logo`} 
                width={96} 
                height={96} 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {company}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {highlight}
            </p>
          </div>

          {/* Arrow icon */}
          <ArrowRight className="hidden sm:block w-6 h-6 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-2" />
        </div>
      </div>
    </motion.div>
  );
}

