import zelia from '../assets/project1.png';
import car from '../assets/car.png';
import todo from '../assets/to-do-list.png';
import weather from '../assets/weather.png';


export default function Projects() {
  return (
    <section className="bg-gray-900 py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 - Zelia */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={zelia} alt="E-Commerce App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">Zelia</h3>
            <p className="text-gray-300 mb-3">
              A full-stack e-commerce web application with user authentication,
              product management, shopping cart, and PayPal payments.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> React, Node.js, Express, MongoDB, Tailwind
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmoudrabea321/e-commerce-app-frontend" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://zelia.pages.dev/" target="_blank" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div>

          {/* Project 2 - Weather App */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={weather} alt="Weather App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">Weather App</h3>
            <p className="text-gray-300 mb-3">
              A simple Weather Application built with JavaScript.  
              It displays the current temperature of cities around the world using a weather API.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> HTML, CSS, JavaScript
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmoudrabea321/Tempature-app" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://tempature-app.vercel.app/" target="_blank" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div>

          {/* Project 3 - To-Do List */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={todo} alt="To-Do List App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">To-Do List</h3>
            <p className="text-gray-300 mb-3">
              A simple and modern To-Do List application built with React.  
              This project allows users to manage daily tasks with a clean UI.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> React, Vite, Tailwind
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmoudrabea321/TO-DO-LIST" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://to-do-list1.pages.dev/" target="_blank" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div>

          {/* Project 4 - Car Inventory */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={car} alt="Car Inventory App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">Car Inventory App</h3>
            <p className="text-gray-300 mb-3">
              A professional Car Inventory Management application built with React.  
              Helps users manage and track cars in an inventory system.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> React, Vite, Tailwind
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmoudrabea321/Car-Inventory" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://car-inventory.pages.dev/" target="_blank" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
