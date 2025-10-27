"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  highlight: string;
}

export function ExperienceCard({ company, role, highlight }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
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

