
import { motion } from "framer-motion";
import { Radio, Clock, Calendar, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RadioSchedule = () => {
  const programs = [
    {
      time: "18:00 - 18:30",
      title: "Red Circular al Aire",
      description: "Noticias de nuestra comunidad, próximos intercambios y testimonios de miembros.",
      type: "Principal"
    },
    {
      time: "18:30 - 19:00",
      title: "Talleres en Casa",
      description: "Tips prácticos de economía circular, reparación y reutilización para implementar en tu hogar.",
      type: "Educativo"
    },
    {
      time: "19:00 - 19:15",
      title: "Intercambios de la Semana",
      description: "Miembros comparten sus intercambios exitosos y objetos disponibles para trueque.",
      type: "Comunitario"
    },
    {
      time: "19:15 - 19:30",
      title: "Música Local",
      description: "Artistas de Futaleufú y la región comparten su música con temática ambiental y comunitaria.",
      type: "Cultural"
    }
  ];

  const typeColors = {
    Principal: "bg-green-100 text-green-800",
    Educativo: "bg-amber-100 text-amber-800",
    Comunitario: "bg-orange-100 text-orange-800",
    Cultural: "bg-purple-100 text-purple-800"
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Dónde Escucharnos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Sintoniza nuestro programa radial semanal donde compartimos novedades de la 
            <strong> economía circular</strong>, coordinamos <strong>intercambios comunitarios</strong> 
            y fortalecemos nuestra <strong>autonomía local</strong>.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardHeader className="text-center p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/20 rounded-full p-6 w-fit mx-auto mb-4"
                >
                  <Radio className="h-16 w-16" />
                </motion.div>
                <CardTitle className="text-3xl font-bold mb-4">
                  Radio Red Circular
                </CardTitle>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-green-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg">Domingos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-lg">18:00 - 19:30 hrs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5" />
                    <span className="text-lg">FM 107.1 MHz</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={typeColors[program.type as keyof typeof typeColors]}>
                        {program.type}
                      </Badge>
                      <div className="flex items-center space-x-1 text-green-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{program.time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-green-800">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {program.description}
                    </p>
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
            className="bg-amber-50 rounded-2xl p-8 border border-amber-200"
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">
              Participa en Nuestro Programa
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Radio className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Comparte tu Historia</h4>
                <p className="text-amber-700 text-sm">
                  Cuenta tu experiencia con la economía circular y los intercambios que has realizado.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Propón Temas</h4>
                <p className="text-amber-700 text-sm">
                  Sugiere temas de sustentabilidad y autonomía local que te interesen.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-semibold text-amber-800 mb-2">Anuncia Intercambios</h4>
                <p className="text-amber-700 text-sm">
                  Promociona tus objetos o servicios disponibles para intercambio comunitario.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-amber-700 mb-4">
                <strong>¿Quieres participar en nuestro programa?</strong>
              </p>
              <p className="text-amber-600">
                Contáctanos: <strong>redcircular.radio@gmail.com</strong> o 
                <strong> WhatsApp +56 9 XXXX XXXX</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RadioSchedule;
