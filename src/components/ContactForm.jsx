import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (input) => {
    setFormData({ ...formData, [input.target.name]: input.target.value });
  };

  const handleSubmit = async (input) => {
    input.preventDefault();
    const form = input.target;

    await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    setFormData({ name: "", email: "", message: "" });
    alert("Your message is sent successfully!");
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#1C1A20] p-8 shadow-lg">
      {/* TITLE */}
      <h2 className="text-2xl font-poppins font-semibold text-white text-center mb-8">
        Contact Me
      </h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <input
          type="hidden"
          name="access_key"
          value="44f58bec-73fd-44b7-bb8a-32204cf88288"
        />

        {/* NAME */}
        <div>
          <label className="text-sm text-white/70 font-poppins">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="mt-2 w-full rounded-xl bg-[#131217] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D57B63] focus:ring-1 focus:ring-[#D57B63]"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-white/70 font-poppins">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="mt-2 w-full rounded-xl bg-[#131217] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D57B63] focus:ring-1 focus:ring-[#D57B63]"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-sm text-white/70 font-poppins">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Write your message..."
            className="mt-2 w-full rounded-xl bg-[#131217] border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#D57B63] focus:ring-1 focus:ring-[#D57B63]"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[#D57B63] py-3 text-black font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
