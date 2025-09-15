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
      name: "Fresh Bread",
      items: [
        { name: "Artisan Sourdough", price: "$6.50", description: "Our signature 40-year-old starter" },
        { name: "Whole Wheat Loaf", price: "$5.50", description: "Hearty and nutritious" },
        { name: "French Baguette", price: "$4.00", description: "Crispy crust, soft interior" },
        { name: "Cinnamon Raisin", price: "$6.00", description: "Sweet and aromatic" }
      ]
    },
    {
      name: "Pastries & Croissants",
      items: [
        { name: "Butter Croissant", price: "$3.50", description: "Flaky and buttery perfection" },
        { name: "Almond Croissant", price: "$4.50", description: "Filled with almond cream" },
        { name: "Danish Pastries", price: "$4.00", description: "Variety of fruit and cream fillings" },
        { name: "Cinnamon Rolls", price: "$4.25", description: "Warm, gooey, and irresistible" }
      ]
    },
    {
      name: "Cakes & Custom Orders",
      items: [
        { name: "Birthday Cake (8\")", price: "$35.00", description: "Custom decorations available" },
        { name: "Wedding Cake", price: "From $150", description: "Multi-tier, custom design" },
        { name: "Cupcakes (dozen)", price: "$28.00", description: "Various flavors and decorations" },
        { name: "Cheesecake Slice", price: "$6.50", description: "New York style, seasonal flavors" }
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
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Place Your Order</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Order online for pickup or delivery, or give us a call. We're here to make your day sweeter!
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
                      <option value="delivery">Delivery (local area)</option>
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
                    Items to Order *
                  </label>
                  <textarea
                    name="items"
                    value={formData.items}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Please list the items you'd like to order (e.g., 2 Butter Croissants, 1 Sourdough Loaf, 6 Cupcakes)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bakery-brown focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Allergies
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any special decorations, dietary requirements, or other requests"
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
              <h2 className="text-2xl font-serif font-bold text-bakery-brown mb-6">Contact & Hours</h2>
              
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
                    <p className="text-gray-600">hello@sweetdreamsbakery.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-bakery-brown" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Baker Street, Downtown, Your City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-bakery-brown mt-1" />
                  <div>
                    <p className="font-medium mb-2">Hours</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 7:00 PM</p>
                      <p>Saturday: 6:00 AM - 8:00 PM</p>
                      <p>Sunday: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Menu Items */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-bakery-brown mb-6">Popular Items</h2>
              
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
                  <strong>Note:</strong> Prices are subject to change. Custom orders and wedding cakes require advance notice. Please call for detailed pricing on custom items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}