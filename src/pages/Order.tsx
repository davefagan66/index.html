import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ShoppingCart, Star } from 'lucide-react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'pickup',
    items: '',
    specialRequests: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const menuCategories = [
    {
      name: "Gluten-Free Breads",
      items: [
        { name: "Artisan White Bread", price: "$7.50", description: "Soft, fluffy, tastes like traditional bread" },
        { name: "Multigrain Loaf", price: "$8.00", description: "Hearty and nutritious with seeds" },
        { name: "Sandwich Rolls", price: "$6.00", description: "Perfect for lunch, pack of 4" },
        { name: "Dinner Rolls", price: "$8.00", description: "Soft and warm, pack of 6" }
      ]
    },
    {
      name: "Sweet Treats & Pastries",
      items: [
        { name: "Muffins", price: "$4.50", description: "Blueberry, chocolate chip, or banana" },
        { name: "Cookies", price: "$3.00", description: "Chocolate chip, oatmeal, or sugar cookies" },
        { name: "Scones", price: "$4.00", description: "Cranberry orange or plain" },
        { name: "Brownies", price: "$4.50", description: "Rich, fudgy, and completely gluten-free" }
      ]
    },
    {
      name: "Cakes & Special Orders",
      items: [
        { name: "Birthday Cake (8\")", price: "$45.00", description: "Custom decorations, any dietary needs" },
        { name: "Wedding Cake", price: "From $200", description: "Multi-tier, gluten-free perfection" },
        { name: "Cupcakes (dozen)", price: "$36.00", description: "Various flavors, beautiful decorations" },
        { name: "Specialty Dietary Items", price: "Varies", description: "Sugar-free, nut-free, dairy-free options" }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-bakery-cream flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-bakery-brown mb-4">Order Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order, {formData.name}! We'll contact you within 24 hours to confirm the details and provide pickup/delivery information.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-bakery-brown text-white px-6 py-3 rounded-lg hover:bg-bakery-brown/90 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bakery-gold to-bakery-rose">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Order Gluten-Free Goodness</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Place your order for pickup in Hampstead, NH, or give us a call. We're here to accommodate all your dietary needs!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-bakery-brown mb-6 flex items-center">
                <ShoppingCart className="mr-3 h-6 w-6" />
                Order Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Type *
                    </label>
                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                    >
                      <option value="pickup">Pickup</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Items & Dietary Requirements *
                  </label>
                  <textarea
                    name="items"
                    value={formData.items}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Please list items and any dietary needs (e.g., 1 White Bread Loaf, 6 Sugar-free Cupcakes, 1 Nut-free Birthday Cake)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Dietary Restrictions or Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Please specify any allergies, diabetic needs, or special decorations"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bakery-brown text-white py-4 rounded-lg font-semibold hover:bg-bakery-brown/90 transition-colors"
                >
                  Submit Order
                </button>
              </form>
            </div>
          </div>

          {/* Menu & Contact Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-bakery-brown mb-6">Visit Us in Hampstead</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-bakery-brown" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-bakery-brown" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@blackbirdglutenfree.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-bakery-brown" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Hampstead, New Hampshire</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-bakery-brown mt-1" />
                  <div>
                    <p className="font-medium mb-2">Hours</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Menu Items */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-bakery-brown mb-6">Our Gluten-Free Menu</h2>
              
              {menuCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-semibold text-bakery-brown mb-3 border-b border-gray-200 pb-2">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <span className="font-semibold text-bakery-brown ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-bakery-cream rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> All items are made in our 100% gluten-free facility. Custom orders for special dietary needs welcome with advance notice. Please call to discuss specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}