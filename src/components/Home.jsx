import pic from '../assets/pic3.png';

export default function AboutMe() {
  return (
    <section className="bg-gray-900 py-24" id="about">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* About Me Text (force left on desktop) */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-lg text-amber-50 mb-6">
            Hi, I’m <span className="font-semibold">Mahmoud Rabea</span>, a passionate 
            <span className="text-indigo-500"> Full-Stack Web Developer</span> with a 
            background in biotechnology and years of experience in customer service, 
            teaching, and coding. I enjoy building clean, scalable applications that solve 
            real-world problems.
          </p>
          <p className="text-lg text-amber-50">
            My focus is on modern web technologies like 
            <span className="font-semibold"> React, Node.js, Express, and MongoDB</span>. 
            I love learning new tools, collaborating with teams, and turning ideas into 
            working solutions.
          </p>
        </div>

        {/* Profile Image (force right on desktop) */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={pic}
            alt="Mahmoud Rabea"
            className="w-72 h-82 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
