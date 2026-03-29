export default function Contact() {
  return (
    <section className="bg-gray-900 py-16" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>

        <form
          action="https://formspree.io/f/xqadnran" // 🔹 Replace with your Formspree link
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
