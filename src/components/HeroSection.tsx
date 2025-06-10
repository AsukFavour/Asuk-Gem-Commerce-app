import React from 'react';
import img101 from '../assets/feed.jpg'
import img102 from '../assets/img102.png'
import RealFoodIcon from '../assets/food.svg'
import PremiumIcon from '../assets/premium.svg'
import FreshIcon from '../assets/fresh.svg'
import VetIcon from '../assets/vet.svg'
import PayPalIcon from '../assets/payments/paypal.png'
import VisaIcon from '../assets/payments/visa.png'
import MastercardIcon from '../assets/payments/mastercard.png'
import ApplePayIcon from '../assets/payments/applepay.png'
import GooglePayIcon from '../assets/payments/googlepay.png'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What makes us different<br />
            makes them stronger
          </h1>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-16">
          {/* Left Features */}
          <div className="lg:col-span-2 space-y-12">
            {/* Real Food */}
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <img src={RealFoodIcon} alt="Real Food" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Food</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wholesome recipes for dogs with real meat and veggies.
                </p>
              </div>
            </div>
            
            {/* Premium Ingredient */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                <img src={PremiumIcon} alt="Premium Ingredient" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Ingredient</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Elevating pet care with unmatched safety and quality.
                </p>
              </div>
            </div>
          </div>
          
          {/* Center Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg bg-white">
                <div className="w-full h-full flex">
                  {/* Left side - Raw food image */}
                  <div className="w-1/2 h-full overflow-hidden">
                    <img 
                      src={img101}
                      alt="Raw dog food with meat and vegetables"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Right side - Kibble image */}
                  <div className="w-1/2 h-full overflow-hidden">
                    <img 
                      src={img102}
                      alt="Traditional dog kibble"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Features */}
          <div className="lg:col-span-2 space-y-12">
            {/* Made Fresh */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <img src={FreshIcon} alt="Made Fresh" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Made Fresh</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We prioritize maintaining the integrity of whole foods and nutrition.
                </p>
              </div>
            </div>
            
            {/* Vet Developed */}
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
                <img src={VetIcon} alt="Vet Developed" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vet Developed</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We raise the bar for dog nutrition, surpassing industry expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-colors mb-4">
            Get your dog's healthy meal today!
          </button>
          
          {/* Payment info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-day money back guarantee</span>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              {/* PayPal */}
              <img src={PayPalIcon} alt="PayPal" className="w-6 h-6 object-contain" />
              
              {/* Visa */}
              <img src={VisaIcon} alt="Visa" className="w-8 h-5 object-contain" />
              
              {/* Mastercard */}
              <img src={MastercardIcon} alt="Mastercard" className="w-8 h-5 object-contain" />
              
              {/* Apple Pay */}
              <img src={ApplePayIcon} alt="Apple Pay" className="w-8 h-5 object-contain" />
              
              {/* Google Pay */}
              <img src={GooglePayIcon} alt="Google Pay" className="w-8 h-5 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;