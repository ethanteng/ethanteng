"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PriceCardProps {
  title: string;
  price: string;
  duration?: string;
  format?: string;
  bullets: string[];
  ideal: string;
  featured?: boolean;
}

export function PriceCard({
  title,
  price,
  duration,
  format,
  bullets,
  ideal,
  featured = false,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className={`h-full flex flex-col ${featured ? "border-primary shadow-lg" : ""}`}>
        <CardHeader>
          {featured && (
            <Badge className="w-fit mb-2" variant="default">
              Most Popular
            </Badge>
          )}
          <CardTitle className="text-2xl">{title}</CardTitle>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-primary">{price}</span>
            {duration && (
              <span className="text-sm text-muted-foreground">• {duration}</span>
            )}
          </div>
          {format && (
            <CardDescription className="text-sm">{format}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ul className="space-y-3 mb-6 flex-1">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <span className="font-medium">Ideal for:</span> {ideal}
              </p>
            </div>
            <Button asChild className="w-full" variant={featured ? "default" : "outline"}>
              <Link href="/contact">Get started</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

