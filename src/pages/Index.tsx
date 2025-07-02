
import { motion } from "framer-motion";
import { Calendar, Users, Recycle, Sprout, MapPin, Clock, ArrowDown, Menu, X } from "lucide-react";
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
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Inicio', icon: Recycle },
    { id: 'about', label: '¿Qué es?', icon: Sprout },
    { id: 'participate', label: 'Participar', icon: Users },
    { id: 'events', label: 'Próxima Feria', icon: Calendar },
    { id: 'workshops', label: 'Talleres', icon: Clock },
    { id: 'testimonials', label: 'Testimonios', icon: Users },
    { id: 'register', label: 'Registro', icon: Users },
    { id: 'faq', label: 'FAQ', icon: Users },
    { id: 'radio', label: 'Radio', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-amber-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-green-600 rounded-full p-2">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">Red Circular</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-green-700 hover:text-green-900 hover:bg-green-50 rounded-lg transition-all duration-200 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-green-700 hover:bg-green-50 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </motion.div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 border-t border-green-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2 mt-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-green-700 hover:text-green-900 hover:bg-green-50 rounded-lg transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

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

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-40"
        onClick={() => scrollToSection('hero')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowDown className="h-5 w-5 rotate-180" />
      </motion.button>

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
