import {useState} from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (input) => {
        setFormData({...formData, [input.target.name]: input.target.value});
    };

    const handleSubmit = async (input) => {
        input.preventDefault(); // prevents page reload by default
        const form = input.target;
        await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        });
        setFormData({name: "", email: "", message: ""});
        alert("Your message is sent successfully!");
    };

    return (
        <div
            className="w-full md:w-[70%] lg:w-[40%] px-10 py-14 lg:p-8 rounded-2xl shadow-xl bg-peach-gradient shadow-gray-500">
            <h2 className="text-3xl mb-8 text-charcoal text-center font-semibold tracking-wide">
                Contact Me
            </h2>
            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6"
            >
                <input
                    type="hidden"
                    name="access_key"
                    value="44f58bec-73fd-44b7-bb8a-32204cf88288"
                />
                <div>
                    <label
                        htmlFor="name"
                        className="block text-lg text-charcoal font-semibold tracking-wide"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="mt-2 p-3 w-full border rounded-xl focus:ring-2 focus:ring-rose-400"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-lg text-charcoal font-semibold tracking-wide"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="mt-2 p-3 w-full border rounded-xl focus:ring-2 focus:ring-rose-400"
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-lg text-charcoal font-semibold tracking-wide"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message..."
                        rows="4"
                        className="mt-2 p-3 w-full border rounded-xl focus:ring-2 focus:ring-rose-400"
                    />
                </div>
                <div className="w-full justify-center flex">
                    <button
                        type="submit"
                        className="bg-rose/50 hover:bg-olive/50 text-charcoal py-3 px-10 rounded-xl hover:bg-rose-600 transition-all text-lg font-semibold"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
