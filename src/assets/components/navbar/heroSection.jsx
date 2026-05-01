import {useState} from "react"
import {AnimatePresence, motion} from "motion/react"

import github from "../../github.png";
import instagram from "../../instagram.jpg";
import linkedn from "../../linkedn.png";
import { animate } from "motion";


const NavbarList = [ "Home", "About", "Projects", "Contact"]
export const HeroSection = ()=>{


  const [openMenu , setOpenMenu] = useState(false)
    return(
       <div>   {/* Desktop------------------------------------- */}
        <header id="Home" className=" h-screen ">
      <video
  id="heroVideo"
  className="absolute inset-0 w-full h-full object-cover object-[25%_center] md:object-center"
  autoPlay
  muted
  loop
  playsInline
  disablePictureInPicture
  controlsList="nofullscreen"
  preload="auto"
>
  <source src="/peacevideo.mp4" type="video/mp4" />
</video>
          
           <motion.nav 
               initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
           className=" flex justify-evenly">
            <p className=" absolute top-5 left-5 text-xl text-black font-bold cursor-pointer " style={{ fontFamily:"'Syne',sans-serif" }}> DieuMerci</p>
                <ul className="flex max-md:hidden bg-white/10 border-2 border-black backdrop-blur-md border border-white/20 rounded-xl shadow-lg justify-center mt-4 p-2 gap-4 text-black z-50">
  {NavbarList.map((item, index) => {
    const id = item.toLowerCase().replace(/\s/g, "-");

    return (
      <li key={index}>
        <a href={`#${id}`}>{item}</a>
      </li>
    );
  })}
</ul>
                 {/* Mobile------------------------------------------------- */}
                
                  <button className={`md:hidden  text-5xl absolute top-5 right-5  cursor-pointer z-50  w-12 ${openMenu ? "text-white" : "text-black"}`} onClick={()=>setOpenMenu(!openMenu)} >{openMenu ? 'X' : '☰'}</button>
                 
                 <AnimatePresence>
                  {openMenu && 
                     <motion.ul 
                  initial={{opacity:0, x:400}}
                  animate={{opacity:1, x:0}}
                  exit={{opacity:0, x:400}} 
                  transition={{duration:0.5, ease: "easeInOut"}} className="bg-[#e9e2e5]  flex flex-col justify-center w-full h-screen z-40 ">
                        {NavbarList.map((items,index) =>(
                          <li className=" p-5 pl-15 text-4xl  " key={index}><a href={`#${items.toLocaleLowerCase()}`} onClick={()=>setOpenMenu(false)}>{items}</a></li>) 
                        )}

                    </motion.ul>} 
                  </AnimatePresence>
                 
           </motion.nav>

         <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="absolute inset-0 flex flex-col items-center justify-center text-center"
>
  <h1 className="text-black text-3xl md:md:text-6xl font-extrabold   uppercase font-bold" style={{ fontFamily:"'Syne',sans-serif" }}>
    Dady DieuMerci
  </h1>

  <p className="text-black mt-4 md:text-2xl">
    Front-end Developer
  </p>
</motion.div>
              
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute bottom-5 right-3  p-3 rounded-lg grid grid-rows-3 gap-3 bg-black flex flex-row justify-center text-black w-20">
         
           <a href="http://instagram.com/dady_06_"><img src={instagram}  className="w-8 h-8 object-cover rounded-lg" /></a>
           <a href="https://www.linkedin.com/in/dady-dieu-merci-005678385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkedn}  className="w-8 h-8 object-cover" /></a>
          <a href="http://github.com/Dady-Dieumerci"><img src={github}  className="w-8 h-8 object-cover rounded-lg" /></a>

        </motion.div>
        </header>
       </div>
        
    )
}