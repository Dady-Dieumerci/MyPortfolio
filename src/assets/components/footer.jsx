export const Footer=()=> {
  return (
    <footer className="bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* LEFT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold">Dieumerci.</h2>
          <p className="text-gray-400 max-w-sm text-sm">
            Frontend developer crafting modern, fast and user-focused digital experiences.
          </p>
        </div>

        {/* CENTER (NAV LINKS) */}
        <div className=" w-full flex justify-evenly">
                 <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-bold mb-2">Navigation</h3>
          <a href="#Home" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#About" className="text-gray-400 hover:text-white transition">About</a>
          <a href="#Projects" className="text-gray-400 hover:text-white transition">Projects</a>
          <a href="#Contact" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        {/* RIGHT (SOCIALS) */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-bold mb-2">Connect</h3>
          <a href="http://github.com/Dady-Dieumerci" className="text-gray-400 hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/dady-dieu-merci-005678385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          <a href="http://instagram.com/dady_06_" className="text-gray-400 hover:text-white transition">Instagram</a>
        </div>

        </div>
      
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dieumerci. All rights reserved.
      </div>
    </footer>
  );
}