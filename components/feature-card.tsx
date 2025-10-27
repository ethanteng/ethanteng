"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

const iconColors = [
  "from-blue-500 to-indigo-600",
  "from-green-500 to-emerald-600",
  "from-purple-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-blue-600",
  "from-rose-500 to-red-600",
];

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  const colorIndex = Math.abs(title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % iconColors.length;
  const gradientClass = iconColors[colorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 group">
        <CardHeader>
          {Icon && (
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 shadow-sm`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

