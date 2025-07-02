
import { motion } from "framer-motion";
import { Calendar, Users, Recycle, Sprout, MapPin, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToParticipate from "@/components/HowToParticipate";
import NextEvent from "@/components/NextEvent";
import Workshops from "@/components/Workshops";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import RadioSchedule from "@/components/RadioSchedule";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-amber-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Red Circular</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-green-700 hover:text-green-900 transition-colors">¿Qué es?</button>
              <button onClick={() => scrollToSection('participate')} className="text-green-700 hover:text-green-900 transition-colors">Participar</button>
              <button onClick={() => scrollToSection('events')} className="text-green-700 hover:text-green-900 transition-colors">Próxima Feria</button>
              <button onClick={() => scrollToSection('workshops')} className="text-green-700 hover:text-green-900 transition-colors">Talleres</button>
              <button onClick={() => scrollToSection('register')} className="text-green-700 hover:text-green-900 transition-colors">Registro</button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* How to Participate */}
      <HowToParticipate />

      {/* Next Event */}
      <NextEvent />

      {/* Workshops */}
      <Workshops />

      {/* Testimonials */}
      <Testimonials />

      {/* Registration */}
      <RegistrationForm />

      {/* FAQ */}
      <FAQ />

      {/* Radio Schedule */}
      <RadioSchedule />

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="h-6 w-6" />
                <span className="text-xl font-semibold">Red Circular Futaleufú</span>
              </div>
              <p className="text-green-100">
                Construyendo una economía circular y sustentable en nuestra comunidad a través del intercambio consciente y la autonomía local.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-green-100">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Futaleufú, Región de Los Lagos</span>
                </div>
                <p>redcircular.futaleufu@gmail.com</p>
                <p>WhatsApp: +56 9 XXXX XXXX</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="space-y-2 text-green-100">
                <p>Facebook: Red Circular Futaleufú</p>
                <p>Instagram: @redcircular_futaleufu</p>
                <p>Radio: 📻 Domingos 18:00 hrs</p>
              </div>
            </div>
          </motion.div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 Red Circular Futaleufú. Todos los derechos reservados. Construyendo comunidad sustentable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
