import { motion } from "framer-motion";
import { ArrowDown, Sprout, Users, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-green-50 via-amber-50 to-orange-100 pt-20">
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <div className="bg-green-600 rounded-full p-4">
            <Recycle className="h-16 w-16 text-white" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-green-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Red Circular
          <span className="block text-3xl md:text-4xl text-amber-700 mt-2">Futaleufú</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          La primera <strong>feria de trueque Futaleufú</strong> que transforma nuestra comunidad a través de la 
          <strong> economía circular</strong> y el <strong>intercambio comunitario</strong>. 
          Construyendo juntos una <strong>autonomía local</strong> sustentable.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Users className="mr-2 h-5 w-5" />
            Únete a la Red
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sprout className="mr-2 h-5 w-5" />
            Próxima Feria
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-green-200">
            <Recycle className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800 mb-2">Economía Circular</h3>
            <p className="text-green-700">Reducimos residuos dando nueva vida a objetos y creando vínculos comunitarios.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-amber-200">
            <Users className="h-10 w-10 text-amber-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Intercambio Comunitario</h3>
            <p className="text-amber-700">Fortalecemos lazos vecinales a través del trueque de bienes, servicios y conocimientos.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-orange-200">
            <Sprout className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Autonomía Local</h3>
            <p className="text-orange-700">Construimos resiliencia comunitaria reduciendo dependencias externas.</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-8 text-green-600 hover:text-green-800 transition-colors"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;
