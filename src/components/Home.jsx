import pic from '../assets/pic3.png';

export default function AboutMe() {
  return (
    <section className="bg-gray-900 py-24" id="about">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* About Me Text (force left on desktop) */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-lg text-amber-50 mb-6">
           
             I’m <span className="font-semibold">Mahmoud Rabea</span>, a passionate <span className="text-indigo-500"> Full-Stack Web Developer</span> with a background in biotechnology and a strong drive for building modern, scalable, and user-friendly web applications.

             Over the past few years, I’ve combined my technical expertise with my experience in teaching, customer service, and problem-solving to deliver digital solutions that not only work but make an impact. I specialize in technologies like **React, Node.js, Express, MongoDB, and Tailwind CSS**, and I enjoy turning ideas into functional applications that help people in their everyday lives.

             I’m always eager to learn new tools, collaborate with teams, and explore creative approaches to web development. My goal is to create clean, efficient, and innovative solutions while constantly improving my skills and staying up to date with the latest industry trends.

             When I’m not coding, you’ll probably find me exploring new technologies, solving problems, or brainstorming ways to make digital experiences more seamless.

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
