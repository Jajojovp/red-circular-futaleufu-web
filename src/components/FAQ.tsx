
import { motion } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Qué es exactamente una feria de trueque y cómo funciona?",
      answer: "Una feria de trueque Futaleufú es un espacio comunitario donde intercambiamos bienes, servicios y conocimientos sin usar dinero. Funciona bajo principios de economía circular: traes objetos que ya no usas pero están en buen estado, y los intercambias por cosas que necesitas. También puedes ofrecer servicios (clases, reparaciones, cuidados) o conocimientos a cambio de otros servicios o productos."
    },
    {
      question: "¿Necesito experiencia previa en intercambio comunitario?",
      answer: "¡Para nada! La Red Circular está diseñada para acoger a personas de todos los niveles de experiencia. Muchos de nuestros miembros comenzaron sin conocimiento previo sobre economía circular. Ofrecemos orientación inicial, talleres introductorios y siempre hay miembros experimentados dispuestos a ayudar a los nuevos integrantes."
    },
    {
      question: "¿Qué tipos de objetos puedo intercambiar?",
      answer: "Puedes intercambiar casi cualquier cosa que esté en buen estado: ropa, libros, herramientas, utensilios de cocina, decoración, plantas, productos caseros (mermeladas, panes, conservas), juguetes, materiales de construcción, equipos electrónicos, instrumentos musicales, materiales de arte, y mucho más. Lo importante es que sea útil para alguien más."
    },
    {
      question: "¿Cómo se determina el 'valor' de los intercambios?",
      answer: "En nuestra economía circular, el valor se determina por la utilidad real del objeto o servicio, no por su precio comercial. Usamos tres modalidades: trueque directo (uno por uno), sistema opcional de puntos comunitarios para intercambios más complejos, y contribuciones al bien común. La idea es que ambas partes se sientan satisfechas con el intercambio."
    },
    {
      question: "¿Con qué frecuencia se realizan las ferias?",
      answer: "Las ferias grandes se realizan el primer sábado de cada mes en diferentes espacios de Futaleufú. Además, organizamos intercambios temáticos (plantas, libros, ropa) cada 15 días, y mantenemos un grupo de WhatsApp activo donde se coordinan intercambios diarios entre miembros de la comunidad."
    },
    {
      question: "¿Hay algún costo por participar en la Red Circular?",
      answer: "La participación en la Red Circular es completamente gratuita. No cobramos inscripciones, cuotas ni comisiones por los intercambios. Nuestro proyecto se sustenta através del trabajo voluntario de la comunidad y ocasionales aportes para gastos operativos (transporte, materiales para talleres, etc.) que son siempre voluntarios."
    },
    {
      question: "¿Puedo participar si vivo en sectores rurales alejados del centro?",
      answer: "¡Por supuesto! Tenemos miembros de todos los sectores de la comuna. Organizamos actividades rotativas en diferentes localidades, coordinamos transporte compartido para las ferias principales, y mantenemos una red digital activa para coordinar intercambios. La autonomía local incluye a toda nuestra comunidad territorial."
    },
    {
      question: "¿Qué pasa si no tengo objetos para intercambiar pero quiero participar?",
      answer: "Hay muchas formas de participar más allá de intercambiar objetos: puedes ofrecer servicios (clases, reparaciones, cuidado de plantas), compartir conocimientos en nuestros talleres, ayudar en la organización de eventos, contribuir con productos caseros, o simplemente participar en las actividades comunitarias. El intercambio comunitario es mucho más amplio que solo objetos."
    },
    {
      question: "¿Cómo contribuye esto realmente a la sustentabilidad ambiental?",
      answer: "Nuestra economía circular tiene impactos ambientales medibles: cada objeto intercambiado evita la producción de uno nuevo (ahorrando recursos naturales y energía), reduce significativamente los residuos sólidos urbanos, disminuye la necesidad de transporte de mercancías desde centros urbanos, y fortalece la autonomía local reduciendo nuestra dependencia de cadenas de consumo insustentables."
    },
    {
      question: "¿Pueden participar niños y familias completas?",
      answer: "¡Las familias son el corazón de nuestra comunidad! Nuestras ferias incluyen espacios especialmente diseñados para niños, talleres de educación ambiental adaptados por edades, intercambio de juguetes y libros infantiles, y actividades donde los niños aprenden sobre sustentabilidad de manera lúdica. Es una excelente forma de educar en valores de economía circular desde temprana edad."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Resolvemos tus dudas sobre la <strong>economía circular</strong>, el 
            <strong> intercambio comunitario</strong> y cómo participar en nuestra 
            <strong> feria de trueque Futaleufú</strong>.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border border-green-200 shadow-lg">
                  <CardHeader 
                    className="cursor-pointer hover:bg-green-50 transition-colors p-6"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-green-800 pr-4">
                        {faq.question}
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openItems.includes(index) ? (
                          <Minus className="h-6 w-6 text-green-600" />
                        ) : (
                          <Plus className="h-6 w-6 text-green-600" />
                        )}
                      </motion.div>
                    </div>
                  </CardHeader>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center"
          >
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Estamos aquí para ayudarte a formar parte de nuestra economía circular
            </p>
            <div className="space-y-2 text-green-100">
              <p>📧 redcircular.futaleufu@gmail.com</p>
              <p>📱 WhatsApp: +56 9 XXXX XXXX</p>
              <p>📻 Escúchanos domingos 18:00 hrs en Radio Comunitaria</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
