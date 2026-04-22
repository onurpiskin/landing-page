import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function CTAFooter() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-radial-gradient(
          circle at 0 0,
          transparent 0,
          oklch(0.98 0 0 / 0.1) 40px
        )`
      }} />
      
      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of innovators who are already transforming their work. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group bg-primary-foreground text-primary hover:scale-105 transition-transform duration-150 shadow-xl hover:shadow-2xl px-8"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-transform duration-150 px-8"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
