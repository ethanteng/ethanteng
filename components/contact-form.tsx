"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

const interests = ["Audit", "Build-out", "Fractional", "Add-ons"];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      stage: formData.get("stage"),
      blocker: formData.get("blocker"),
      timeline: formData.get("timeline"),
      interests: selectedInterests,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
        setSelectedInterests([]);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
            <p className="text-muted-foreground">
              I'll get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="mt-6"
            >
              Send another message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Let's talk growth</CardTitle>
        <CardDescription>
          Share a bit about your business and what you're trying to solve.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company *
              </label>
              <Input id="company" name="company" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="stage" className="text-sm font-medium">
                Stage
              </label>
              <Input
                id="stage"
                name="stage"
                placeholder="e.g. Seed, Series A"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="blocker" className="text-sm font-medium">
              Biggest growth blocker *
            </label>
            <Textarea
              id="blocker"
              name="blocker"
              placeholder="What's preventing you from growing faster?"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="timeline" className="text-sm font-medium">
              Timeline
            </label>
            <Input
              id="timeline"
              name="timeline"
              placeholder="When are you looking to start?"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Interested in:</label>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant={selectedInterests.includes(interest) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send message"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Your information is only used to respond to your inquiry and is not
            shared with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

