import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";

const RestaurantHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">م</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold arabic-text">مطعما</h1>
              <p className="text-sm text-muted-foreground english-text">Authentic Flavors</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors arabic-text">الرئيسية</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors arabic-text">القائمة</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors arabic-text">عن المطعم</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors arabic-text">اتصل بنا</a>
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="english-text">+966 50 123 4567</span>
            </div>
            <Button variant="default" size="sm" className="btn-elegant hidden md:flex">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="arabic-text">الموقع</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;