
import { motion } from "framer-motion";
import { useState } from "react";
import { UserPlus, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    interests: [],
    experience: "",
    contribution: "",
    workshops: [],
    newsletter: false,
    events: false
  });

  const interests = [
    "Reparación y reutilización",
    "Huerta urbana y compostaje",
    "Textiles y costura",
    "Carpintería y construcción",
    "Gastronomía sustentable",
    "Educación ambiental",
    "Arte y creatividad",
    "Tecnología y electrónicos",
    "Plantas medicinales",
    "Intercambio de servicios"
  ];

  const workshops = [
    "Reparación y Reutilización",
    "Huerta Comunitaria",
    "Economía Circular Familiar",
    "Upcycling Creativo"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleWorkshopChange = (workshop: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      workshops: checked 
        ? [...prev.workshops, workshop]
        : prev.workshops.filter(w => w !== workshop)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro enviado:', formData);
    toast({
      title: "¡Registro exitoso!",
      description: "Te has unido a la Red Circular Futaleufú. Te contactaremos pronto con más información.",
    });
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Únete a la Red Circular
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Forma parte de nuestra comunidad de <strong>intercambio comunitario</strong> y 
            contribuye a construir la <strong>autonomía local</strong> en Futaleufú.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/20 rounded-full p-4"
                  >
                    <UserPlus className="h-12 w-12" />
                  </motion.div>
                </div>
                <CardTitle className="text-3xl font-bold text-center">
                  Formulario de Registro
                </CardTitle>
                <p className="text-green-100 text-center text-lg mt-2">
                  Completa este formulario para formar parte de nuestra economía circular
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Información Personal */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Información Personal
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-green-700">Nombre Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Tu nombre completo"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-green-700">Correo Electrónico *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="tu@email.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-green-700">Teléfono *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="+56 9 XXXX XXXX"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="address" className="text-green-700">Sector/Barrio</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="Tu sector en Futaleufú"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Intereses */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Áreas de Interés para Intercambiar
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Selecciona las áreas en las que te gustaría participar en nuestra economía circular:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-3">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          />
                          <Label htmlFor={interest} className="text-gray-700 cursor-pointer">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experiencia */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Tu Experiencia y Habilidades
                    </h3>
                    <Label htmlFor="experience" className="text-green-700">
                      Cuéntanos sobre tus habilidades, oficios o conocimientos que podrías compartir:
                    </Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="Ej: Soy carpintero, cultivo hortalizas orgánicas, reparo bicicletas, enseño música..."
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  {/* Contribución */}
                  <div>
                    <Label htmlFor="contribution" className="text-green-700">
                      ¿Qué te gustaría aportar a la Red Circular?
                    </Label>
                    <Textarea
                      id="contribution"
                      value={formData.contribution}
                      onChange={(e) => setFormData(prev => ({ ...prev, contribution: e.target.value }))}
                      placeholder="Ideas, proyectos, iniciativas que te gustaría desarrollar en comunidad..."
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  {/* Talleres */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Talleres de Interés
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Selecciona los talleres en los que te gustaría participar:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {workshops.map((workshop) => (
                        <div key={workshop} className="flex items-center space-x-3">
                          <Checkbox
                            id={workshop}
                            checked={formData.workshops.includes(workshop)}
                            onCheckedChange={(checked) => handleWorkshopChange(workshop, checked as boolean)}
                          />
                          <Label htmlFor={workshop} className="text-gray-700 cursor-pointer">
                            {workshop}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comunicaciones */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Preferencias de Comunicación
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                        />
                        <Label htmlFor="newsletter" className="text-gray-700 cursor-pointer">
                          Quiero recibir el boletín mensual con novedades de la Red Circular
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="events"
                          checked={formData.events}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, events: checked as boolean }))}
                        />
                        <Label htmlFor="events" className="text-gray-700 cursor-pointer">
                          Notificarme sobre próximas ferias de trueque y eventos especiales
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                  >
                    <UserPlus className="mr-2 h-6 w-6" />
                    Unirme a la Red Circular Futaleufú
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
