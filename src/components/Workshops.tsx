import { motion } from "framer-motion";
import { Wrench, Sprout, Book, Recycle, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Workshops = () => {
  const workshops = [
    {
      icon: Wrench,
      title: "Reparación y Reutilización",
      description: "Aprende técnicas básicas para reparar objetos cotidianos y darles nueva vida.",
      schedule: "Martes 19:00 hrs",
      level: "Principiante",
      color: "green",
      details: "Taller práctico donde aprenderás a reparar electrodomésticos menores, ropa, calzado y muebles. Incluye kit básico de herramientas y materiales."
    },
    {
      icon: Sprout,
      title: "Huerta Comunitaria",
      description: "Cultiva tus propios alimentos y participa en nuestra huerta colectiva sustentable.",
      schedule: "Jueves 18:00 hrs",
      level: "Todos los niveles",
      color: "amber",
      details: "Desde siembra hasta cosecha, incluyendo compostaje, control natural de plagas y técnicas de permacultura aplicadas al clima patagónico."
    },
    {
      icon: Book,
      title: "Economía Circular Familiar",
      description: "Implementa principios de economía circular en tu hogar y reduce significativamente tus residuos.",
      schedule: "Sábado 16:00 hrs",
      level: "Intermedio",
      color: "orange",
      details: "Estrategias prácticas para reducir, reutilizar y reciclar en casa. Incluye planificación de compras conscientes y organización familiar sustentable."
    },
    {
      icon: Recycle,
      title: "Upcycling Creativo",
      description: "Transforma objetos desechados en piezas únicas de decoración y utilidad.",
      schedule: "Viernes 19:30 hrs",
      level: "Creativo",
      color: "green",
      details: "Técnicas de transformación creativa usando materiales reciclados. Cada sesión incluye un proyecto completo que te llevas a casa."
    }
  ];

  const colorClasses = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-600",
      iconBg: "bg-green-100",
      badge: "bg-green-100 text-green-800",
      title: "text-green-800"
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: "text-amber-600",
      iconBg: "bg-amber-100",
      badge: "bg-amber-100 text-amber-800",
      title: "text-amber-800"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "text-orange-600",
      iconBg: "bg-orange-100",
      badge: "bg-orange-100 text-orange-800",
      title: "text-orange-800"
    }
  };

  return (
    <section id="workshops" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Talleres de Autonomía Local
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fortalece tus habilidades para la <strong>autonomía local</strong> y profundiza 
            tu comprensión de la <strong>economía circular</strong> a través de nuestros 
            talleres prácticos y comunitarios.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full overflow-hidden border-0 shadow-lg ${colorClasses[workshop.color].bg} ${colorClasses[workshop.color].border} border`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`${colorClasses[workshop.color].iconBg} rounded-full p-4`}
                      >
                        <workshop.icon className={`h-8 w-8 ${colorClasses[workshop.color].icon}`} />
                      </motion.div>
                      <Badge className={colorClasses[workshop.color].badge}>
                        {workshop.level}
                      </Badge>
                    </div>
                    <CardTitle className={`text-xl ${colorClasses[workshop.color].title}`}>
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {workshop.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{workshop.schedule}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {workshop.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-8">
              <Users className="h-16 w-16 mx-auto mb-4 text-green-200" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Metodología de Aprendizaje Comunitario
              </h3>
              <p className="text-green-100 text-lg max-w-3xl mx-auto">
                Nuestros talleres se basan en el intercambio de saberes y la construcción 
                colectiva del conocimiento para fortalecer la autonomía local.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2 text-green-100">Aprender Haciendo</h4>
                <p className="text-green-200 text-sm">
                  Cada taller incluye práctica real con materiales y herramientas proporcionados.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2 text-green-100">Intercambio de Saberes</h4>
                <p className="text-green-200 text-sm">
                  Valoramos el conocimiento tradicional y las experiencias de cada participante.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2 text-green-100">Aplicación Inmediata</h4>
                <p className="text-green-200 text-sm">
                  Implementas lo aprendido en tu hogar, fortaleciendo tu autonomía local.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
