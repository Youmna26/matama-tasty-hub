import { Card } from "@/components/ui/card";
import { Clock, Users, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "طعام محضر بحب",
      titleEn: "Made with Love",
      description: "نحضر كل طبق بعناية واهتمام خاص لضمان أفضل تجربة طعام لعملائنا الكرام",
      descriptionEn: "Every dish is prepared with special care and attention to ensure the best dining experience"
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      titleEn: "Fast Service", 
      description: "نضمن تقديم وجباتكم في أسرع وقت ممكن مع الحفاظ على أعلى معايير الجودة",
      descriptionEn: "We ensure your meals are served quickly while maintaining the highest quality standards"
    },
    {
      icon: Users,
      title: "أجواء عائلية",
      titleEn: "Family Atmosphere",
      description: "نوفر بيئة مريحة ومناسبة للعائلات مع ديكور تقليدي أصيل",
      descriptionEn: "We provide a comfortable family-friendly environment with authentic traditional decor"
    },
    {
      icon: Award,
      title: "جودة ممتازة",
      titleEn: "Excellent Quality",
      description: "نستخدم أجود المكونات الطازجة ونتبع أعلى معايير النظافة والصحة",
      descriptionEn: "We use the finest fresh ingredients and follow the highest standards of cleanliness and health"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title arabic-text">عن مطعما</h2>
          <p className="text-lg text-muted-foreground mb-4 arabic-text max-w-3xl mx-auto leading-relaxed">
            منذ تأسيسنا، نسعى لتقديم أفضل الأطباق العربية التقليدية بطريقة عصرية ومميزة. 
            نؤمن بأن الطعام الجيد يجمع الناس ويخلق ذكريات جميلة
          </p>
          <p className="text-base text-muted-foreground english-text max-w-2xl mx-auto">
            Since our establishment, we strive to serve the finest traditional Arabic dishes 
            in a modern and distinctive way. We believe good food brings people together and creates beautiful memories.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-bold text-primary arabic-text">
                قصتنا
              </h3>
              <p className="text-muted-foreground arabic-text leading-relaxed text-lg">
                بدأت رحلتنا من حلم بسيط: تقديم الطعام العربي الأصيل في مكان يشعر فيه كل زائر بالراحة والدفء. 
                اليوم، نفخر بخدمة آلاف العملاء الذين يثقون بنا لتقديم أفضل تجربة طعام عربية في المدينة.
              </p>
              <p className="text-muted-foreground english-text leading-relaxed">
                Our journey began with a simple dream: serving authentic Arabic food in a place where 
                every visitor feels comfort and warmth. Today, we proudly serve thousands of customers 
                who trust us to provide the best Arabic dining experience in the city.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary english-text">500+</div>
                  <div className="text-sm text-muted-foreground arabic-text">عميل راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary english-text">5</div>
                  <div className="text-sm text-muted-foreground arabic-text">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary english-text">4.8</div>
                  <div className="text-sm text-muted-foreground arabic-text">نجوم التقييم</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-warm rounded-2xl p-8 text-center text-white shadow-elegant">
                <h4 className="text-2xl font-bold mb-4 arabic-text">رؤيتنا</h4>
                <p className="text-white/90 arabic-text leading-relaxed mb-4">
                  أن نكون الوجهة الأولى لمحبي الطعام العربي الأصيل، ونشر ثقافتنا الغذائية العريقة للعالم
                </p>
                <p className="text-white/80 english-text text-sm">
                  To be the first destination for lovers of authentic Arabic cuisine, 
                  spreading our rich food culture to the world
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="restaurant-card text-center p-6" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-semibold text-foreground arabic-text mb-2">
                {feature.title}
              </h4>
              
              <p className="text-sm text-muted-foreground english-text font-medium mb-3">
                {feature.titleEn}
              </p>
              
              <p className="text-muted-foreground text-sm arabic-text leading-relaxed mb-2">
                {feature.description}
              </p>
              
              <p className="text-muted-foreground text-xs english-text italic">
                {feature.descriptionEn}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;