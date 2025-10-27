"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  highlight: string;
}

const companyColors: Record<string, string> = {
  "meez": "from-green-500 to-emerald-600",
  "Postman": "from-orange-500 to-red-600",
  "Braintree/PayPal": "from-blue-500 to-indigo-600",
};

export function ExperienceCard({ company, role, highlight }: ExperienceCardProps) {
  const gradientClass = companyColors[company] || "from-primary to-accent";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 group relative overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`} />
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl font-bold">{company}</CardTitle>
          </div>
          <Badge variant="secondary" className="w-fit">
            {role}
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{highlight}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

