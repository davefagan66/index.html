import React from 'react';
import { Star, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredItems = [
    {
      name: "Artisan Croissants",
      description: "Buttery, flaky pastries made with French technique",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Custom Wedding Cakes",
      description: "Beautiful, delicious cakes for your special day",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Fresh Daily Bread",
      description: "Traditional sourdough and artisan loaves",
      image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best bakery in town! Their croissants are absolutely divine.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "Made our wedding cake and it was perfect. Beautiful and delicious!",
      rating: 5
    },
    {
      name: "Emma Davis",
      text: "I come here every morning for fresh bread. The quality is unmatched.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-bakery-cream to-bakery-rose flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Fresh Baked 
              <span className="text-bakery-gold"> Dreams</span> 
              Daily
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Family-owned bakery serving the community with love, tradition, and the finest ingredients since 1985.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/order" 
                className="bg-bakery-gold text-bakery-brown px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center group"
              >
                Order Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-bakery-brown transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bakery-brown/80 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
          }}
        ></div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved creations, made fresh daily with premium ingredients and time-honored recipes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-bakery-brown mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-bakery-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Why Choose Sweet Dreams?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Heart className="h-10 w-10 text-bakery-rose" />
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">Made with Love</h3>
              <p className="text-gray-600">Every item is crafted with passion and attention to detail.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Award className="h-10 w-10 text-bakery-gold" />
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in baking and customer service.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Star className="h-10 w-10 text-bakery-sage" />
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest ingredients make it into our recipes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-bakery-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-bakery-brown">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bakery-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Taste the Magic?</h2>
          <p className="text-xl mb-8 opacity-90">Visit us today or place your order online for pickup or delivery.</p>
          <Link 
            to="/order" 
            className="bg-bakery-gold text-bakery-brown px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center group"
          >
            Place Your Order
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}