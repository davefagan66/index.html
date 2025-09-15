import React from 'react';
import { Star, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredItems = [
    {
      name: "Gluten-Free Artisan Breads",
      description: "Fresh daily breads that taste just like traditional wheat bread",
      image: "/jpic1.jpg"
    },
    {
      name: "Custom Celebration Cakes",
      description: "Beautiful gluten-free cakes for weddings, birthdays, and special occasions",
      image: "/jpic2.jpg"
    },
    {
      name: "Allergy-Friendly Treats",
      description: "Delicious options for diabetic, nut-free, and dairy-free diets",
      image: "/485084410_672328091916102_4062372249548441132_n.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      text: "Finally, a bakery where my celiac daughter can enjoy everything! The bread tastes amazing.",
      rating: 5
    },
    {
      name: "Robert K.",
      text: "As a diabetic, I thought I'd never enjoy baked goods again. Blackbird changed that!",
      rating: 5
    },
    {
      name: "Lisa T.",
      text: "The staff understands allergies and cross-contamination. I feel safe eating here.",
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Gluten-Free Baking
              <span className="text-bakery-gold"> For Everyone</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Hampstead, NH's premier gluten-free bakery specializing in delicious treats for all dietary needs - diabetic, nut-free, dairy-free, and more.
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
            backgroundImage: `url('/494604053_706513735164204_5122122652231385829_n(1).jpg')`
          }}
        ></div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Gluten-Free Specialties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved gluten-free creations, made fresh daily with premium ingredients and careful attention to dietary restrictions.
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
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Why Choose Blackbird?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Heart className="h-10 w-10 text-bakery-rose" />
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">Safe & Inclusive</h3>
              <p className="text-gray-600">Dedicated gluten-free facility with strict protocols to prevent cross-contamination.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Award className="h-10 w-10 text-bakery-gold" />
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">All Dietary Needs</h3>
              <p className="text-gray-600">Specializing in diabetic-friendly, nut-free, dairy-free, and other special dietary requirements.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <Star className="h-10 w-10 text-bakery-sage" />
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">Tastes Amazing</h3>
              <p className="text-gray-600">You won't believe it's gluten-free! Our recipes deliver on taste and texture.</p>
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
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Experience Gluten-Free Excellence?</h2>
          <p className="text-xl mb-8 opacity-90">Visit us in Hampstead, NH or place your order for pickup.</p>
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