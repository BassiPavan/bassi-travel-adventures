
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users } from "lucide-react";

const deals = [
  {
    id: 1,
    title: "Mediterranean Cruise",
    location: "Greek Islands",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    originalPrice: "$1,299",
    discountPrice: "$899",
    discount: "31% OFF",
    rating: 4.8,
    duration: "7 days",
    capacity: "2-4 people",
    description: "Sail through crystal-clear waters and discover ancient civilizations",
    timeLeft: "3 days left"
  },
  {
    id: 2,
    title: "Safari Adventure",
    location: "Kenya & Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    originalPrice: "$2,199",
    discountPrice: "$1,599",
    discount: "27% OFF",
    rating: 4.9,
    duration: "10 days",
    capacity: "2-6 people",
    description: "Witness the Great Migration and Big Five in their natural habitat",
    timeLeft: "5 days left"
  },
  {
    id: 3,
    title: "Northern Lights",
    location: "Iceland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    originalPrice: "$1,799",
    discountPrice: "$1,299",
    discount: "28% OFF",
    rating: 4.7,
    duration: "6 days",
    capacity: "2-8 people",
    description: "Chase the Aurora Borealis in the land of fire and ice",
    timeLeft: "1 week left"
  }
];

export const FeaturedDeals = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Featured Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited-time offers on extraordinary travel experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <Card key={deal.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white border-0 text-sm font-bold px-3 py-1">
                    {deal.discount}
                  </Badge>
                </div>
                
                {/* Time Left Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white border-0 text-sm font-medium px-3 py-1">
                    <Clock size={14} className="mr-1" />
                    {deal.timeLeft}
                  </Badge>
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 bg-black/70 rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{deal.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{deal.title}</h3>
                  <p className="text-gray-500 text-sm">{deal.location}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{deal.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{deal.capacity}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">{deal.discountPrice}</span>
                    <span className="text-lg text-gray-400 line-through">{deal.originalPrice}</span>
                  </div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg transition-all duration-300 transform hover:scale-105">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
