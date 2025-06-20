"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, Book, Heart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="relative overflow-hidden">
            <AspectRatio
              ratio={16 / 6}
              className="bg-gradient-to-r from-blue-50 to-purple-50"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=400&fit=crop"
                  alt="Diverse team collaboration"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
            </AspectRatio>
            <CardHeader className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <CardTitle className="text-4xl md:text-5xl font-bold mb-4">
                Who We Are
              </CardTitle>
              <CardDescription className="text-xl max-w-2xl">
                At DREAM, we believe everyone deserves a personalized roadmap to
                their dreams.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At DREAM, our mission is simple: empower you to unlock your highest
            potential by providing AI-driven, custom life plans that adapt as
            you grow. We blend cutting-edge machine learning with proven
            behavior-science techniques so you never have to guess
            &quot;what&apos;s next&quot; on your journey to success.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Imagine a world where every person has a clear, data-backed
            blueprint for their goals—whether it&apos;s writing a book, running
            a marathon, or launching a startup. We&apos;re building that world,
            one dynamic plan at a time.
          </p>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="flex-col">
                <CardTitle className="text-2xl font-bold text-primary">
                  2023
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conceptualized the idea over coffee and whiteboards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <CardTitle className="text-2xl font-bold text-primary">
                  2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built the first prototype using GPT-3, validated with a small
                  beta group.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <CardTitle className="text-2xl font-bold text-primary">
                  Early 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Partnered with GroqAI for scalable LLM integration and
                  launched DREAM-Core.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <CardTitle className="text-2xl font-bold text-primary">
                  Q3 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Public beta release of DREAM-UI; onboarding first enterprise
                  clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>User First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Everything we build centers on your unique journey.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Book className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Science-Backed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We combine ML with proven behavior-change techniques.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Open APIs, clear pricing, and no hidden surprises.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade uptime, logging, and retry logic keeps you
                  moving forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Dream Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&face" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <CardTitle>Ankit Pakhale</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Former data-scientist turned AI-visionary, passionate about
                  human potential.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150&h=150&fit=crop&face" />
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <CardTitle>Dr. Sara Nguyen</CardTitle>
                <CardDescription>Head of Behavioral Science</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expert in habit formation and motivational psychology.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop&face" />
                  <AvatarFallback>LM</AvatarFallback>
                </Avatar>
                <CardTitle>Luis Martinez</CardTitle>
                <CardDescription>CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Architect of scalable backends, leads our dynamic routing and
                  reliability efforts.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="flex-col">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&face" />
                  <AvatarFallback>PD</AvatarFallback>
                </Avatar>
                <CardTitle>Priya Desai</CardTitle>
                <CardDescription>Product Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designs intuitive experiences that make complex AI simple to
                  use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Tech */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partners & Tech
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">GroqAI</h3>
              <p className="text-muted-foreground">
                LLM partner for lightning-fast content generation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Postman</h3>
              <p className="text-muted-foreground">
                &quot;One-click&quot; collections to help you test and
                integrate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AWS</h3>
              <p className="text-muted-foreground">
                Secure, scalable hosting for DREAM-Core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Careers & Collaboration</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Want to build the future of personal development? We&apos;re hiring
            engineers, data scientists, and designers who share our passion for
            people and AI.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={() =>
                alert("Careers & Collaboration Page will open soon!!!")
              }
            >
              View Open Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to see DREAM in action?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Try a sample plan free—no credit card required.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary">
              <Link href={"/pricing"}>Generate Your First Plan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
