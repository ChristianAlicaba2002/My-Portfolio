import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-4 px-8">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm a passionate developer creating amazing digital experiences.
          Explore my work and discover what I can bring to your next project.
        </p>
        <Link
          to={"/Layouts/dashboard"}
          className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg duration-200 hover:scale-150"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default App;
