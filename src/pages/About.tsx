import React from 'react';
import { Users, Heart, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bakery-cream to-bakery-rose">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-bakery-brown mb-6">Our Story</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four decades of tradition, passion, and the pursuit of baking perfection.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-bakery-brown mb-6">A Legacy of Love & Flour</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sweet Dreams Bakery began in 1985 when Margaret Thompson decided to share her grandmother's recipes with the world. What started as a small storefront with just two ovens has grown into the heart of our community.
                </p>
                <p>
                  Our family-owned bakery has been passed down through generations, with each adding their own touch while preserving the traditional methods that make our baked goods so special. We still use Margaret's original sourdough starter, now over 40 years old!
                </p>
                <p>
                  Every morning at 4 AM, our bakers arrive to begin the daily ritual of creating fresh bread, pastries, and treats. We believe in using only the finest ingredients – locally sourced when possible – and never taking shortcuts.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7937468/pexels-photo-7937468.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Baker working with dough"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-bakery-gold p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bakery-brown">40+</div>
                  <div className="text-sm text-bakery-brown font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-bakery-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting ingredients to serving our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-rose/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-bakery-rose" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">Every recipe is made with love and dedication to perfection.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-sage/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-bakery-sage" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Community</h3>
              <p className="text-gray-600 text-sm">We're proud to be a gathering place for our neighborhood.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-bakery-gold" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Premium ingredients and traditional methods, no compromises.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-brown/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-bakery-brown" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Tradition</h3>
              <p className="text-gray-600 text-sm">Time-honored recipes and techniques passed down through generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented people who make the magic happen every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Head Baker"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-bakery-brown mb-2">Sarah Thompson</h3>
              <p className="text-bakery-gold font-medium mb-2">Head Baker & Owner</p>
              <p className="text-gray-600 text-sm">
                Margaret's granddaughter, carrying on the family tradition with innovation and respect for classic techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pastry Chef"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-bakery-brown mb-2">Maria Rodriguez</h3>
              <p className="text-bakery-gold font-medium mb-2">Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Specializes in wedding cakes and custom desserts, bringing artistry to every creation with 15 years of experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Bread Specialist"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-bakery-brown mb-2">David Chen</h3>
              <p className="text-bakery-gold font-medium mb-2">Bread Specialist</p>
              <p className="text-gray-600 text-sm">
                Our sourdough expert who maintains our 40-year-old starter and creates our artisan bread selection daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-bakery-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Award className="h-12 w-12 text-bakery-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Bakery 2023</h3>
              <p className="opacity-90">City Magazine Readers' Choice</p>
            </div>
            <div>
              <Award className="h-12 w-12 text-bakery-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wedding Cake Excellence</h3>
              <p className="opacity-90">Bridal Association Award</p>
            </div>
            <div>
              <Award className="h-12 w-12 text-bakery-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Champion</h3>
              <p className="opacity-90">Local Business Recognition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}