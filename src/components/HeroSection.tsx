import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="مطعما - أجواء المطعم الراقية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="elegant-title mb-6 arabic-text">
            مرحباً بكم في مطعما
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 arabic-text font-medium">
            تذوقوا أصالة النكهات العربية في أجواء راقية ومميزة
          </p>
          
          <p className="text-lg text-white/80 mb-8 english-text">
            Experience authentic Arabic flavors in an elegant atmosphere
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center mb-8 space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-warm-gold fill-current" />
              ))}
            </div>
            <span className="text-white/90 english-text">4.8/5 من أكثر من 500 تقييم</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button size="lg" className="btn-elegant bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3">
              <span className="arabic-text font-semibold">اطلع على القائمة</span>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              <span className="arabic-text">احجز طاولة</span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <ArrowDown className="w-6 h-6 text-white/70 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-warm-gold/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default HeroSection;