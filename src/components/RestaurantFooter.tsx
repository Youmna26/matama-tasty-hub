import { Heart, MapPin, Phone, Mail } from "lucide-react";

const RestaurantFooter = () => {
  return (
    <footer className="bg-hero-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">م</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold arabic-text">مطعما</h3>
                <p className="text-sm text-white/80 english-text">Authentic Arabic Flavors</p>
              </div>
            </div>
            <p className="text-white/90 arabic-text leading-relaxed mb-4 max-w-md">
              نقدم لكم أفضل الأطباق العربية التقليدية في أجواء دافئة ومريحة. 
              تجربة طعام لا تُنسى تجمع بين الأصالة والجودة العالية.
            </p>
            <p className="text-white/70 english-text text-sm max-w-md">
              We serve the finest traditional Arabic dishes in a warm and comfortable atmosphere. 
              An unforgettable dining experience combining authenticity and high quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">روابط سريعة</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-warm-gold transition-colors arabic-text">الرئيسية</a></li>
              <li><a href="#menu" className="hover:text-warm-gold transition-colors arabic-text">القائمة</a></li>
              <li><a href="#about" className="hover:text-warm-gold transition-colors arabic-text">عن المطعم</a></li>
              <li><a href="#contact" className="hover:text-warm-gold transition-colors arabic-text">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">معلومات التواصل</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <span className="text-sm arabic-text">شارع الملك فهد، الرياض</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <span className="text-sm english-text">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <span className="text-sm english-text">info@matama.sa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm text-center md:text-left">
              <p className="arabic-text mb-1">© 2024 مطعما. جميع الحقوق محفوظة</p>
              <p className="english-text">© 2024 Matama Restaurant. All rights reserved</p>
            </div>
            <div className="flex items-center space-x-2 text-white/70 text-sm">
              <span className="arabic-text">صُنع بـ</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span className="arabic-text">في المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;