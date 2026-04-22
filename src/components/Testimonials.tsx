import { Card, CardContent } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content: "This platform completely transformed how our team collaborates. The intuitive design means everyone can jump in without training.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    content: "Finally, a solution that doesn't compromise on power or simplicity. It's become essential to our daily workflow.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    content: "The attention to detail is incredible. Every interaction feels thoughtful and purposeful. Absolutely love it.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Creators</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have already elevated their workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card border-border/50">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} weight="fill" className="text-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
