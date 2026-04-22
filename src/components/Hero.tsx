import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, oklch(0.45 0.18 290 / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, oklch(0.75 0.15 200 / 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, oklch(0.85 0.08 290 / 0.3) 0%, transparent 50%)
          `
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            oklch(0.45 0.18 290 / 0.05) 2px,
            oklch(0.45 0.18 290 / 0.05) 4px
          )`
        }} />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent">
            Where Innovation Begins
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Transform your ideas into reality with cutting-edge tools designed for creators, innovators, and dreamers who refuse to settle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-150 shadow-lg hover:shadow-xl px-8"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-secondary/50 hover:scale-105 transition-transform duration-150 px-8"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
