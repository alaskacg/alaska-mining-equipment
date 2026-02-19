import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";

const MiningCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 industrial-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="equipment-card p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              READY TO SELL YOUR
              <br />
              <span className="text-gradient-industrial">EQUIPMENT?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              List your heavy machinery and processing equipment. Connect with serious buyers across Alaska.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/post-listing">
                <Button size="lg" className="btn-industrial text-lg px-8 py-6 gap-2">
                  <Plus className="w-5 h-5" />
                  Post Your Listing — Free
                </Button>
              </Link>
              <Link to="/browse">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 gap-2"
                >
                  Browse Equipment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free listings • 60 days active • Up to 20 images
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MiningCTASection;
