import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-elegant-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title arabic-text">اتصل بنا</h2>
          <p className="text-lg text-muted-foreground mb-4 arabic-text">
            نحن هنا لخدمتكم، تواصلوا معنا لأي استفسار أو لحجز طاولة
          </p>
          <p className="text-base text-muted-foreground english-text">
            We're here to serve you. Contact us for any inquiry or to reserve a table
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="restaurant-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground arabic-text mb-2">العنوان</h4>
                  <p className="text-muted-foreground arabic-text text-sm mb-1">
                    شارع الملك فهد، حي الملز
                  </p>
                  <p className="text-muted-foreground arabic-text text-sm mb-2">
                    الرياض، المملكة العربية السعودية
                  </p>
                  <p className="text-muted-foreground english-text text-xs">
                    King Fahd Street, Al-Malaz District, Riyadh, KSA
                  </p>
                </div>
              </div>
            </Card>

            <Card className="restaurant-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground arabic-text mb-2">الهاتف</h4>
                  <p className="text-muted-foreground english-text text-sm mb-1">
                    +966 50 123 4567
                  </p>
                  <p className="text-muted-foreground english-text text-sm mb-2">
                    +966 11 234 5678
                  </p>
                  <p className="text-muted-foreground arabic-text text-xs">
                    للحجوزات والاستفسارات
                  </p>
                </div>
              </div>
            </Card>

            <Card className="restaurant-card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground arabic-text mb-2">ساعات العمل</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="arabic-text">السبت - الخميس: 12:00 - 24:00</p>
                    <p className="arabic-text">الجمعة: 14:00 - 24:00</p>
                    <p className="english-text text-xs mt-2">
                      Sat-Thu: 12PM-12AM | Fri: 2PM-12AM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="restaurant-card p-6">
              <h4 className="font-semibold text-foreground arabic-text mb-4 text-center">
                تابعونا على وسائل التواصل
              </h4>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="restaurant-card p-8">
              <h3 className="text-2xl font-bold text-center mb-6 arabic-text text-foreground">
                أرسل لنا رسالة
              </h3>
              <p className="text-center text-muted-foreground english-text mb-8">
                Send us a message
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground arabic-text mb-2">
                      الاسم
                    </label>
                    <Input 
                      placeholder="اكتب اسمك هنا" 
                      className="text-right arabic-text"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground arabic-text mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input 
                      type="email" 
                      placeholder="example@email.com" 
                      className="english-text"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground arabic-text mb-2">
                    رقم الهاتف
                  </label>
                  <Input 
                    placeholder="+966 50 123 4567" 
                    className="english-text"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground arabic-text mb-2">
                    موضوع الرسالة
                  </label>
                  <Input 
                    placeholder="اكتب موضوع رسالتك" 
                    className="text-right arabic-text"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground arabic-text mb-2">
                    نص الرسالة
                  </label>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..." 
                    rows={5}
                    className="text-right arabic-text resize-none"
                    dir="rtl"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-elegant bg-primary hover:bg-primary-glow text-primary-foreground py-3"
                >
                  <span className="arabic-text font-semibold">إرسال الرسالة</span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;