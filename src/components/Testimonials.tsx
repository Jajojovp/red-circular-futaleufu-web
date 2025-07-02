
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María José Silva",
      role: "Vecina del sector Los Arrayanes",
      content: "La Red Circular cambió completamente mi forma de consumir. He intercambiado desde herramientas de jardín hasta clases de yoga. Mi hogar genera 70% menos residuos y he conocido a vecinos increíbles. La economía circular realmente funciona cuando se vive en comunidad.",
      rating: 5
    },
    {
      name: "Carlos Montoya",
      role: "Carpintero y tallerista",
      content: "Como carpintero, siempre tenía maderas y herramientas acumulándose. En la feria de trueque Futaleufú encontré el espacio perfecto para intercambiar materiales y enseñar mi oficio. He dado talleres de reparación de muebles a cambio de productos de huerta. ¡El intercambio comunitario es oro puro!",
      rating: 5
    },
    {
      name: "Ana Luz Córdoba",
      role: "Madre y educadora",
      content: "Mis hijos han crecido entendiendo que cada objeto tiene valor y puede tener muchas vidas. Participamos en familia en cada feria, intercambiamos juguetes, libros, ropa. Están aprendiendo sobre autonomía local de manera natural y divertida. Es educación ambiental vivencial.",
      rating: 5
    },
    {
      name: "Roberto Keim",
      role: "Jubilado y huertero",
      content: "A mis 68 años descubrí una nueva forma de relacionarme con mi comunidad. Intercambio semillas, plantines y conocimiento de huerta por productos caseros y servicios. La Red Circular me dio un propósito renovado y una red de apoyo increíble. Nunca es tarde para la economía circular.",
      rating: 5
    },
    {
      name: "Javiera Espinoza",
      role: "Emprendedora textil",
      content: "Como diseñadora, siempre busqué maneras de hacer moda más sustentable. En la Red Circular intercambio ropa reparada y personalizada por materiales y servicios. He encontrado mi nicho en la economía circular y construido una clientela consciente. ¡Es revolución creativa!",
      rating: 5
    },
    {
      name: "Francisco Herrero",
      role: "Técnico en electrónica",
      content: "Reparo equipos electrónicos que otros desechan y los intercambio por servicios y productos locales. La cantidad de tecnología rescatable es impresionante. He evitado que cientos de aparatos terminen en la basura, contribuyendo realmente a la economía circular del territorio.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Voces de Nuestra Comunidad
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conoce las experiencias reales de quienes han transformado sus vidas a través de 
            la <strong>economía circular</strong> y el <strong>intercambio comunitario</strong> 
            en nuestra <strong>Red Circular Futaleufú</strong>.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <Quote className="h-10 w-10 text-green-600 flex-shrink-0" />
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 rounded-full p-3">
                        <User className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-green-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Impacto Real en Nuestra Comunidad
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-200 mb-2">150+</div>
                <p className="text-green-100">Familias participando activamente</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-200 mb-2">2,500+</div>
                <p className="text-green-100">Objetos intercambiados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-200 mb-2">80%</div>
                <p className="text-green-100">Reducción de residuos promedio</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-200 mb-2">40+</div>
                <p className="text-green-100">Talleres realizados</p>
              </div>
            </div>
            <p className="text-green-100 text-lg mt-8 max-w-3xl mx-auto">
              Estos números representan familias reales, historias de transformación y 
              un territorio que avanza hacia mayor <strong>autonomía local</strong> y 
              <strong>sustentabilidad ambiental</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
