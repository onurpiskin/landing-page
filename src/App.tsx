import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CTAFooter } from "@/components/CTAFooter";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Testimonials />
      <CTAFooter />
    </div>
  );
}

export default App;