import React from 'react';
import dog from '../assets/dog.png';

const NutritionStats: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Invest in your dog's future with our scientifically formulated superfood-powered 
              supplements. Give them the nutrition they deserve and watch them thrive with 
              vitality, energy, and the joy of a longer, healthier life.
            </p>
            
            {/* Key Points */}
            <div className="mb-10">
              <h3 className="text-l font-semibold text-gray-900 mb-8">Key Points:</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-bold text-orange-500 leading-none">97%</span>
                  <p className="text-gray-600 leading-relaxed flex-1 pt-2">
                    Dogs choose our dog food over leading brands because of its real 
                    functional ingredients and delicious flavor.
                  </p>
                </div>
                
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-bold text-orange-500 leading-none">84%</span>
                  <p className="text-gray-600 leading-relaxed flex-1 pt-2">
                    Our dog food provides superior nutrition and a patented probiotic 
                    for optimal nutrient absorption.
                  </p>
                </div>
                
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-bold text-orange-500 leading-none">92%</span>
                  <p className="text-gray-600 leading-relaxed flex-1 pt-2">
                    Our dog food's high protein and fat digestibility contribute to 
                    ideal stool quality.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Give your furry friend the gift of wholesome nutrition
            </button>
          </div>
          
          {/* Image */}
          <div className="h-full">
            <div className="h-full min-h-[600px]">
                <img 
                    src={dog} 
                    alt="Dog enjoying nutritious food" 
                    className="w-full h-full rounded-lg shadow-lg object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionStats;