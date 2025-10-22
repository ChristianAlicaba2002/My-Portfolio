import { Link, NavLink } from "react-router-dom";
import { FaCode, FaRocket, FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center py-4 px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="welcome-contianer text-center space-y-8 relative z-10">
        {/* Hero Section */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-white to-gray-300 p-1 rounded-full">
                <div className="bg-black p-4 rounded-full">
                  <FaCode className="text-4xl text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 leading-tight">
            Christian
          </h1>
          
          <div className="text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text mb-4">
            Full Stack Developer
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision. 
            <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold"> 
              Building the future, one line of code at a time.
            </span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <FaCode className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
            <p className="text-gray-300 text-sm">Writing maintainable, scalable solutions</p>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <FaRocket className="text-3xl text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300 text-sm">Embracing cutting-edge technologies</p>
          </div>
          
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <FaHeart className="text-3xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Passion</h3>
            <p className="text-gray-300 text-sm">Creating with love and dedication</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Link
            to={"/layouts/dashboard"}
            className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to={"/layouts/contactme"}
            className="px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
