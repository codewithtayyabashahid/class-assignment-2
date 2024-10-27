const Hero: React.FC = () => {
    return (
      <section className="bg-slate-800 text-center py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Headline */}
          <h1 className="text-4xl font-bold text-white md:text-6xl mb-6">
            Welcome to My Portfolio Website
          </h1>
  
          {/* Description */}
          <p className="text-lg text-white italic mb-8 md:text-xl">
            We offer the best services to help you grow your business. Let's work together to achieve your goals.
          </p>
  
      
          <div className="flex justify-center">
            <a
              href="/services"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  