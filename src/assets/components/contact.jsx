import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export const Contact =()=> {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_skw834x",
        "template_thgbihg",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "0WgtqgEdjehu7efhl"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong ❌");
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white  items-center px-6 py-20">
         <h2 className="text-5xl font-extrabold mb-6 text-center pb-20">Contact Me</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 w-full">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
         

          <p className="text-gray-500 mb-8">
            I’m always open to new  <span className="text-orange-400">oppotunity</span> , collaborations, or just a chat.
            Feel free to reach out.
           
          </p>

          <div className="space-y-4 text-md text-gray-600">
            <p><strong>Location:</strong> Kigali, Rwanda</p>
            <p><strong>Email:</strong> dadydieumerci@email.com</p>
            <p><strong>Phone:</strong> +250 791760483</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg outline-none focus:border-black text-black"
            />
          </div>

          <div>
            <input
              {...register("email", { required: true })}
              placeholder="Your Email"
              type="email"
              className="w-full border p-3 rounded-lg outline-none focus:border-black text-black"
            />
          </div>

          <div>
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              rows="5"
              className="w-full border p-3 rounded-lg outline-none focus:border-black text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}