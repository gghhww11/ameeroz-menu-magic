
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { translate, language } = useLanguage();
  
  const contactInfo = {
    address: {
      en: "123 Main Street, City Center, Riyadh",
      ar: "١٢٣ الشارع الرئيسي، وسط المدينة، الرياض"
    },
    landline: "+966 11 234 5678",
    mobile: "+966 50 123 4567",
    whatsapp: "+966501234567"
  };
  
  return (
    <section className="w-full mt-16 mb-8">
      <Separator className="mb-8" />
      
      <Card className="max-w-3xl mx-auto shadow-lg border-none">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-ameeroz-red mb-6 text-center">
            {translate('contactUs')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-ameeroz-red shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    {translate('address')}
                  </h3>
                  <p className="font-medium text-ameeroz-dark">
                    {contactInfo.address[language]}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <PhoneCall className="text-ameeroz-red shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    {translate('landline')}
                  </h3>
                  <p className="font-medium text-ameeroz-dark">
                    {contactInfo.landline}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-ameeroz-red shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    {translate('mobile')}
                  </h3>
                  <p className="font-medium text-ameeroz-dark">
                    {contactInfo.mobile}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-end">
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-lg flex items-center gap-3 transition-colors duration-300 shadow-md"
              >
                <MessageSquare className="shrink-0" size={22} />
                <span className="font-medium">{translate('contactViaWhatsApp')}</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
