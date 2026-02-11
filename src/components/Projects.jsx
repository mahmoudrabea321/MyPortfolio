import zelia from '../assets/project1.png';
import todo from '../assets/to-do-list.png';
import weather from '../assets/weather.png';
import note from '../assets/note.png'
import woo from '../assets/woo.png';
import hotel from '../assets/hotel.png';
import estore from '../assets/estore.png';


export default function Projects() {
  return (
    <section className="bg-gray-900 py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">My Projects</h2>

        {/* Project 1 - estore */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
            <img src={estore} alt="E-Store App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">E-Store</h3>
            <p className="text-gray-300 mb-3">
            E-Store is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse products, manage a shopping cart, and place orders through a responsive and user-friendly interface, with a scalable backend for product and order management.         
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> MongoDB, Express, React, Node.js
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmoudrabea321/clothesStore" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://clothesstore-gpmk.onrender.com" target="_blank" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
           
          </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 2 - woocommerce */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={woo} alt="WooCommerce App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">LYNX</h3>
            <p className="text-gray-300 mb-3">
            A fully functional WooCommerce eCommerce website built with WordPress, featuring product listings, shopping cart, checkout system, and payment integration. Designed for a seamless shopping experience with a responsive and modern layout.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> WordPress, WooCommerce, and custom plugins,
            </p>
           
          </div>
           {/* Project 3 - booking */}
           <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={hotel} alt="WooCommerce App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">Hoteluxe</h3>
            <p className="text-gray-300 mb-3">
            A responsive hotel booking website built with WordPress, allowing users to browse rooms, check availability, and make online reservations easily. Designed for a smooth user experience with an elegant and modern layout.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> WordPress, plugin customization, and UI/UX optimization.
            </p>
            
          </div>
          {/* Project 4 - Zelia */}
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
          {/* Project 5 - JotNote */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <img src={note} alt="NoteBook App" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-50">JotNote</h3>
            <p className="text-gray-300 mb-3">
              📝 NoteBook App

             A full-stack web application that allows users to create, edit, and manage personal notes in a simple and modern interface.
            </p>
            <p className="text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> React, Node.js, Express, MongoDB, Tailwind
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmoudrabea321/Note-Book-frontend" target="_blank" className="text-indigo-400 hover:underline">GitHub</a>
              <a href="https://jotnote.pages.dev/" target="_blank" className="text-indigo-400 hover:underline">Live Demo</a>
            </div>
          </div>

          {/* Project 6 - Weather App */}
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

          {/* Project 7 - To-Do List */}
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
        </div>
      </div>
    </section>
  );
}
