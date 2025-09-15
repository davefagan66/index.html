import React from 'react';
import { Users, Heart, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bakery-cream to-bakery-rose">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-bakery-brown mb-6">About Blackbird</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dedicated to creating delicious gluten-free baked goods that everyone can enjoy, regardless of dietary restrictions.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-bakery-brown mb-6">Baking for Everyone</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Blackbird Gluten Free Bakery was born from a passion to create delicious baked goods that everyone can enjoy, regardless of their dietary restrictions. Located in beautiful Hampstead, New Hampshire, we've become the go-to destination for those seeking truly exceptional gluten-free treats.
                </p>
                <p>
                  What sets us apart is our commitment to accommodating all dietary needs. Whether you're managing celiac disease, diabetes, nut allergies, dairy intolerance, or any other dietary restriction, we can create something delicious just for you. Our dedicated gluten-free facility ensures complete safety from cross-contamination.
                </p>
                <p>
                  Every day, we craft fresh breads, pastries, cakes, and treats using premium gluten-free ingredients and time-tested techniques. Our goal is simple: to prove that gluten-free doesn't mean flavor-free. When you taste our products, you'll be amazed at how delicious gluten-free can be!
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/485084410_672328091916102_4062372249548441132_n.jpg"
                alt="Blackbird Gluten Free Bakery owner with fresh baked goods"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-bakery-gold p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bakery-brown">100%</div>
                  <div className="text-sm text-bakery-brown font-medium">Gluten-Free Facility</div>
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
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">What We Specialize In</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're experts in creating delicious alternatives for every dietary need and restriction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-rose/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-bakery-rose" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Gluten-Free</h3>
              <p className="text-gray-600 text-sm">100% gluten-free facility safe for those with celiac disease and gluten sensitivity.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-sage/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-bakery-sage" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Diabetic-Friendly</h3>
              <p className="text-gray-600 text-sm">Sugar-free and low-carb options that don't compromise on taste.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-bakery-gold" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Allergy-Friendly</h3>
              <p className="text-gray-600 text-sm">Nut-free, dairy-free, and other allergen-free options available.</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-bakery-brown/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-bakery-brown" />
              </div>
              <h3 className="text-lg font-semibold text-bakery-brown mb-2">Custom Orders</h3>
              <p className="text-gray-600 text-sm">Special occasion cakes and treats made to your dietary specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-bakery-brown mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every item we create is made with care, understanding, and expertise in gluten-free baking.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-bakery-brown mb-4">Safe. Delicious. Inclusive.</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>• Dedicated gluten-free facility with no cross-contamination</p>
                    <p>• Expert knowledge of dietary restrictions and food allergies</p>
                    <p>• Fresh ingredients sourced with care and attention</p>
                    <p>• Custom orders welcome for special dietary needs</p>
                    <p>• Serving the Hampstead, NH community with pride</p>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="/jpic1.jpg"
                    alt="Beautiful gluten-free cake"
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-bakery-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Visit Us in Hampstead</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-6 opacity-90">
              Experience the difference that dedicated gluten-free baking makes. We're here to serve everyone in our community, regardless of dietary restrictions.
            </p>
            <p className="text-lg opacity-80">
              Located in Hampstead, New Hampshire - where everyone can enjoy fresh, delicious baked goods!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}