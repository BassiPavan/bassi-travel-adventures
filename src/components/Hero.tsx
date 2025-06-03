
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="absolute top-8 left-8 z-20">
          <h1 className="text-3xl font-bold text-white">Bassi Travel</h1>
        </div>
        
        {/* Main Hero Content */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Explore the
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              World
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover amazing destinations, book incredible experiences, and create memories that last a lifetime
          </p>
        </div>
        
        {/* Search Card */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="text-blue-600" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-600">Destination</label>
                <Input 
                  placeholder="Where to?" 
                  className="border-0 p-0 text-lg font-medium bg-transparent focus-visible:ring-0"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Calendar className="text-blue-600" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-600">Check-in</label>
                <Input 
                  type="date" 
                  className="border-0 p-0 text-lg font-medium bg-transparent focus-visible:ring-0"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Calendar className="text-blue-600" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-600">Check-out</label>
                <Input 
                  type="date" 
                  className="border-0 p-0 text-lg font-medium bg-transparent focus-visible:ring-0"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Users className="text-blue-600" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-600">Guests</label>
                <Input 
                  placeholder="2 guests" 
                  className="border-0 p-0 text-lg font-medium bg-transparent focus-visible:ring-0"
                />
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg py-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            <Search className="mr-2" size={20} />
            Search Destinations
          </Button>
        </Card>
      </div>
    </div>
  );
};
