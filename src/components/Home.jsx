import homePic from "../assets/developer.jpg";
import myPhoto from "../assets/JusmeJr.jpg";
import myCV from "../assets/React-Developer-CV-Jusme.pdf";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center"
        id="hero"
      >
        <motion.img
          src={homePic}
          alt="home webdev"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        />
        {/* adding some gradient */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        {/* home content */}
        <motion.div
          className="z-20 w-3/5 pb-20 flex flex-col-reverse gap-3 justify-between md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl  md:text-5xl font-semibold uppercase tracking-wide">
              Junior Jusmé
            </h1>
            <h2 className="pt-2 text-xl md:text-3xl font-semibold">
              React Frontend Developer
            </h2>

            <div className="flex items-center gap-8 mt-3 ">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <motion.a
                  className="hover:text-blue-500"
                  key={index}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 * index }}
                >
                  {link.icon}
                </motion.a>
              ))}
              <motion.a
                download
                href={myCV}
                target="_blank"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <button className="flex gap-2 items-center border border-transparent rounded-md py-1 px-3 hover:bg-black hover:text-blue-500 hover:font-semibold">
                  <FaDownload />
                  CV
                </button>
              </motion.a>
            </div>
          </div>
          <img src={myPhoto} alt="Jusme Junior" className="w-56 rounded-full" />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
