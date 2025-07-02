
import { motion } from "framer-motion";
import { UserPlus, Package, Handshake, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowToParticipate = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Únete a la Comunidad",
      description: "Regístrate en nuestra Red Circular completando el formulario con tus datos e intereses. Es gratis y te conecta con una comunidad comprometida con la sustentabilidad.",
      details: "Al registrarte, recibirás notificaciones sobre próximas ferias de trueque, talleres de economía circular y actividades comunitarias. También podrás acceder a nuestra red de WhatsApp donde compartimos intercambios diarios."
    },
    {
      icon: Package,
      title: "Prepara tus Intercambios",
      description: "Selecciona objetos, servicios o conocimientos que quieras intercambiar. Todo debe estar en buen estado y ser útil para otros miembros de la comunidad.",
      details: "Puedes intercambiar: ropa, libros, herramientas, plantas, alimentos caseros, servicios profesionales, talleres, clases particulares, y mucho más. La creatividad es bienvenida en nuestro intercambio comunitario."
    },
    {
      icon: Handshake,
      title: "Participa en las Ferias",
      description: "Asiste a nuestras ferias mensuales donde el intercambio comunitario cobra vida. Cada feria es una celebración de la economía circular y la autonomía local.",
      details: "Las ferias se realizan el primer sábado de cada mes en diferentes espacios comunitarios de Futaleufú. Incluyen música local, talleres gratuitos, área infantil y espacios de conversación sobre sustentabilidad."
    },
    {
      icon: Sparkles,
      title: "Forma Parte del Cambio",
      description: "Contribuye activamente a transformar nuestra comunidad hacia un modelo más sustentable y solidario. Tu participación multiplica el impacto positivo.",
      details: "Además de intercambiar, puedes proponer talleres, organizar intercambios temáticos, participar en nuestras campañas de educación ambiental y ayudar a expandir nuestra red hacia otras comunidades."
    }
  ];

  return (
    <section id="participate" className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            ¿Cómo Participar en la Red Circular?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Formar parte de nuestra <strong>economía circular</strong> es sencillo y transformador. 
            Sigue estos pasos para comenzar tu viaje hacia la <strong>autonomía local</strong> 
            y el <strong>intercambio comunitario</strong> consciente.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`overflow-hidden border-0 shadow-lg ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}>
                  <div className="lg:w-1/3 bg-gradient-to-br from-green-600 to-green-700 p-8 flex flex-col justify-center items-center text-white">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/20 rounded-full p-6 mb-4"
                    >
                      <step.icon className="h-12 w-12" />
                    </motion.div>
                    <div className="bg-white/20 rounded-full px-4 py-2 mb-4">
                      <span className="font-bold text-lg">Paso {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-center">{step.title}</h3>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-green-100"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Modalidades de Intercambio en Nuestra Feria de Trueque
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Trueque Directo</h4>
                <p className="text-gray-600 text-sm">
                  Intercambio uno a uno de objetos, servicios o conocimientos entre participantes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Sistema de Puntos</h4>
                <p className="text-gray-600 text-sm">
                  Opcional: usa puntos comunitarios para intercambios más complejos y flexibles.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-orange-800 mb-2">Intercambio Comunitario</h4>
                <p className="text-gray-600 text-sm">
                  Aportes para el bien común: biblioteca comunitaria, herramientas compartidas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
