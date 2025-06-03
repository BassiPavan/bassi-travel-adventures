import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Route, Ticket } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find and book the best flights worldwide with competitive prices and flexible options.",
    features: ["Best Price Guarantee", "24/7 Support", "Flexible Cancellation"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MapPin,
    title: "Hotel Reservations",
    description: "Discover and book amazing hotels, resorts, and unique accommodations globally.",
    features: ["Instant Confirmation", "Free Cancellation", "Member Discounts"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Route,
    title: "Tour Packages",
    description: "Explore curated tour packages designed by local experts for unforgettable experiences.",
    features: ["Expert Guides", "Small Groups", "Cultural Immersion"],
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Ticket,
    title: "Activity Tickets",
    description: "Skip the lines and book tickets for attractions, shows, and experiences in advance.",
    features: ["Skip the Line", "Mobile Tickets", "Instant Delivery"],
    color: "from-orange-500 to-red-500"
  }
];

export const TravelServices = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Travel Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for your perfect trip, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0 shadow-lg transition-all duration-300`}>
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
