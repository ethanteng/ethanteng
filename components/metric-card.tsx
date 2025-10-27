"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface MetricCardProps {
  label: string;
  value: string;
  context?: string;
}

export function MetricCard({ label, value, context }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="relative overflow-hidden p-4 sm:p-6 text-center hover:shadow-lg transition-all hover:border-primary/50 group h-full flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 sm:mb-3 break-words">
            {value}
          </div>
          <div className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2 break-words">{label}</div>
          {context && (
            <div className="text-xs sm:text-sm text-muted-foreground break-words">{context}</div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

