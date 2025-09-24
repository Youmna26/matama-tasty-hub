import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, Leaf } from "lucide-react";
import foodPlatter from "@/assets/food-platter.jpg";
import mainDishes from "@/assets/main-dishes.jpg";

const MenuSection = () => {
  const menuCategories = [
    {
      title: "المقبلات والسلطات",
      titleEn: "Appetizers & Salads",
      items: [
        {
          name: "حمص بالطحينة",
          nameEn: "Hummus with Tahini",
          description: "حمص كريمي مع الطحينة وزيت الزيتون البكر",
          descriptionEn: "Creamy hummus with tahini and extra virgin olive oil",
          price: "25",
          isVegetarian: true,
          image: foodPlatter
        },
        {
          name: "متبل الباذنجان",
          nameEn: "Baba Ghanouj",
          description: "باذنجان مشوي مع الطحينة والثوم والليمون",
          descriptionEn: "Grilled eggplant with tahini, garlic and lemon",
          price: "30",
          isVegetarian: true
        },
        {
          name: "فتوش",
          nameEn: "Fattoush",
          description: "سلطة خضار مشكلة مع الخبز المحمص وصلصة السماق",
          descriptionEn: "Mixed vegetable salad with toasted bread and sumac dressing",
          price: "35",
          isVegetarian: true
        }
      ]
    },
    {
      title: "الأطباق الرئيسية",
      titleEn: "Main Dishes", 
      items: [
        {
          name: "كباب لحم مشوي",
          nameEn: "Grilled Meat Kebab",
          description: "كباب لحم طازج مشوي على الفحم مع الأرز والسلطة",
          descriptionEn: "Fresh meat kebab grilled on charcoal with rice and salad",
          price: "75",
          isPopular: true,
          image: mainDishes
        },
        {
          name: "شاورما الدجاج",
          nameEn: "Chicken Shawarma",
          description: "دجاج متبل ومشوي مع الخضار والصلصة في خبز عربي",
          descriptionEn: "Seasoned grilled chicken with vegetables and sauce in Arabic bread",
          price: "45",
          isPopular: true
        },
        {
          name: "مندي الخروف",
          nameEn: "Lamb Mandi",
          description: "لحم خروف طري مطبوخ بالطريقة التقليدية مع الأرز البسمتي",
          descriptionEn: "Tender lamb cooked traditionally with basmati rice",
          price: "95",
          isSpicy: true
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-elegant-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title arabic-text">قائمة الطعام</h2>
          <p className="text-lg text-muted-foreground mb-4 arabic-text">
            اكتشفوا تشكيلة متنوعة من الأطباق التقليدية المحضرة بعناية
          </p>
          <p className="text-base text-muted-foreground english-text">
            Discover our carefully crafted selection of traditional dishes
          </p>
        </div>

        {/* Menu Categories */}
        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary arabic-text">
              {category.title}
            </h3>
            <p className="text-center mb-12 text-muted-foreground english-text font-medium">
              {category.titleEn}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="restaurant-card group">
                  {/* Image */}
                  {item.image && (
                    <div className="relative overflow-hidden rounded-t-lg mb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex space-x-2">
                        {item.isPopular && (
                          <Badge className="bg-accent text-accent-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            الأكثر طلباً
                          </Badge>
                        )}
                        {item.isVegetarian && (
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                            <Leaf className="w-3 h-3 mr-1" />
                            نباتي
                          </Badge>
                        )}
                        {item.isSpicy && (
                          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                            <Flame className="w-3 h-3 mr-1" />
                            حار
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground arabic-text mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground english-text font-medium">
                          {item.nameEn}
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-primary menu-price">
                        <span className="english-text">{item.price}</span>
                        <span className="text-base arabic-text mr-1">ريال</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-muted-foreground text-sm arabic-text leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-muted-foreground text-xs english-text italic">
                        {item.descriptionEn}
                      </p>
                    </div>

                    {/* Badges for items without images */}
                    {!item.image && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.isPopular && (
                          <Badge className="bg-accent text-accent-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            الأكثر طلباً
                          </Badge>
                        )}
                        {item.isVegetarian && (
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                            <Leaf className="w-3 h-3 mr-1" />
                            نباتي
                          </Badge>
                        )}
                        {item.isSpicy && (
                          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                            <Flame className="w-3 h-3 mr-1" />
                            حار
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;