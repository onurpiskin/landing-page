import { Card, CardContent } from "@/components/ui/card";
import { Lightning, Users, Shield, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightning,
    title: "Lightning Fast",
    description: "Built for speed from the ground up. Experience instant responses and seamless interactions that keep you in flow."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Work together effortlessly with real-time collaboration tools that bring your team closer, no matter where they are."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security and privacy protection ensure your data stays safe without compromising on usability."
  },
  {
    icon: Sparkle,
    title: "Delightfully Simple",
    description: "Powerful features wrapped in an intuitive interface. Complexity hidden, possibilities unlimited."
  }
];

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for What Matters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, nothing you don't. Focused features that deliver real value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={28} weight="duotone" className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
