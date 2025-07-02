
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Gift, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NextEvent = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Próxima Feria de Trueque Futaleufú
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ¡No te pierdas nuestra próxima celebración de <strong>economía circular</strong> 
            e <strong>intercambio comunitario</strong>!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-green-50 to-amber-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold mb-2">
                      Feria Circular de Primavera
                    </CardTitle>
                    <p className="text-green-100 text-lg">
                      "Intercambiamos, creamos, transformamos juntos"
                    </p>
                  </div>
                  <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                    ¡Inscripciones Abiertas!
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 rounded-full p-3">
                        <Calendar className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">Fecha</h4>
                        <p className="text-gray-700">Sábado 7 de Diciembre, 2024</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-100 rounded-full p-3">
                        <Clock className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-800">Horario</h4>
                        <p className="text-gray-700">10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-100 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800">Lugar</h4>
                        <p className="text-gray-700">Plaza de Armas de Futaleufú</p>
                        <p className="text-sm text-gray-600">Frente a la Municipalidad</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      <Gift className="h-5 w-5 mr-2" />
                      Actividades Especiales
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Taller de reparación de ropa y textiles</li>
                      <li>• Espacio de intercambio de plantas y semillas</li>
                      <li>• Biblioteca ambulante de libros</li>
                      <li>• Zona gastronómica con platos locales</li>
                      <li>• Música en vivo con artistas locales</li>
                      <li>• Área de juegos para niños</li>
                    </ul>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mb-8"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <Music className="h-6 w-6 mr-2" />
                    Programa del Día
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-100">Mañana (10:00 - 14:00)</h5>
                      <ul className="space-y-1 text-green-100 text-sm">
                        <li>10:00 - Apertura e intercambio libre</li>
                        <li>11:00 - Taller de compostaje doméstico</li>
                        <li>12:00 - Círculo de intercambio de saberes</li>
                        <li>13:00 - Almuerzo comunitario</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-green-100">Tarde (14:00 - 18:00)</h5>
                      <ul className="space-y-1 text-green-100 text-sm">
                        <li>14:00 - Música y intercambio</li>
                        <li>15:00 - Taller de huerta urbana</li>
                        <li>16:00 - Mesa redonda: Economía circular</li>
                        <li>17:00 - Cierre y próximos encuentros</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Confirmar Asistencia
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agregar al Calendario
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NextEvent;
