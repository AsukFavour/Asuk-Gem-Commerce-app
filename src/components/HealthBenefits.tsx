import React from 'react';
import dog from '../assets/dogs.gif';
import feed from '../assets/feed.jpg';

const HealthBenefits: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* First Section - Gastrointestinal Health */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={dog} 
                alt="Happy dogs eating healthy food"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Improve overall gastrointestinal health for better nutrient absorption
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Through rigorous scientific studies and consultations with veterinarians, 
              we have created a breakthrough formula exclusively tailored to combat 
              the health challenges prevalent in dogs. A staggering 91% of our 
              customers have reported significant improvements in their dogs' health 
              after incorporating our product into their diet.
            </p>
          </div>
        </div>
        
        {/* Second Section - Prebiotics */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Prebiotics nourish the beneficial gut bacteria, supporting digestive health
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our dog food formula contains carefully selected prebiotics that work in 
              harmony with the gut microbiota, providing the necessary nutrients for 
              the growth and maintenance of beneficial bacteria, ultimately supporting 
              digestive health.
            </p>
          </div>
          
          {/* Premium Dog Food Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={feed}
              alt="Premium dog food kibble"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;