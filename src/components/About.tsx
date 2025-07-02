
import { motion } from "framer-motion";
import { Leaf, Heart, Globe, TreePine } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            ¿Qué es la Red Circular?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">
                Nuestra Misión: Transformar Futaleufú
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La <strong>Red Circular Futaleufú</strong> nace como respuesta a la necesidad de crear una 
                <strong> economía circular</strong> verdaderamente comunitaria en nuestro territorio. Somos 
                más que una <strong>feria de trueque Futaleufú</strong>; somos un movimiento que busca 
                transformar la manera en que nos relacionamos con los recursos, con la naturaleza y entre nosotros.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En un mundo donde el consumismo desenfrenado agota nuestros recursos naturales, la Red Circular 
                propone un camino diferente: el <strong>intercambio comunitario</strong> consciente que fortalece 
                los vínculos vecinales mientras reducimos nuestra huella ecológica. Cada objeto que intercambiamos, 
                cada servicio que compartimos, cada conocimiento que transmitimos, contribuye a construir la 
                <strong> autonomía local</strong> que tanto necesitamos.
              </p>
            </div>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <TreePine className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <blockquote className="text-lg italic text-green-800 text-center">
                  "En la naturaleza no existe la basura. Todo se recicla, todo tiene un propósito. 
                  Así queremos que sea nuestra comunidad."
                </blockquote>
                <p className="text-center text-green-600 mt-4 font-semibold">- Filosofía Red Circular</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-8 text-center">
              Los Pilares de Nuestra Economía Circular
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-green-800 mb-3">Sustentabilidad Ambiental</h4>
                <p className="text-gray-700">
                  Reducimos significativamente los residuos sólidos urbanos dando segunda vida a objetos 
                  que otros consideran "desecho". Cada intercambio evita que un producto termine en el 
                  vertedero, contribuyendo a la economía circular local.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="h-12 w-12 text-amber-600 mb-4" />
                <h4 className="text-xl font-semibold text-amber-800 mb-3">Cohesión Social</h4>
                <p className="text-gray-700">
                  El intercambio comunitario fortalece los lazos vecinales y genera redes de apoyo mutuo. 
                  Conocemos a nuestros vecinos, compartimos historias y construimos una comunidad más unida 
                  y resiliente.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="h-12 w-12 text-orange-600 mb-4" />
                <h4 className="text-xl font-semibold text-orange-800 mb-3">Autonomía Económica</h4>
                <p className="text-gray-700">
                  Desarrollamos la autonomía local reduciendo la dependencia del dinero y de los mercados 
                  externos. Creamos un sistema económico alternativo basado en el valor de uso real de 
                  bienes y servicios.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              El Impacto de Nuestro Intercambio Comunitario
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-100">En Nuestra Comunidad</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Más de 150 familias participando activamente</li>
                  <li>• 2,500+ objetos intercambiados en nuestras ferias</li>
                  <li>• 80% reducción de residuos entre participantes</li>
                  <li>• 40+ talleres de sustentabilidad realizados</li>
                  <li>• Red de apoyo vecinal fortalecida</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-100">En el Territorio</h4>
                <p className="text-green-100 leading-relaxed">
                  La <strong>feria de trueque Futaleufú</strong> se ha convertido en un referente regional 
                  de economía circular. Inspiramos a otras comunidades rurales a desarrollar sus propios 
                  sistemas de intercambio, creando una red territorial de autonomía local que fortalece 
                  la resiliencia de toda la Región de Los Lagos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
