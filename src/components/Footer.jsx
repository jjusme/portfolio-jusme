import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import logo from "../assets/JJ.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            title={link.title}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 * index }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <div className="flex gap-2 mt-4 justify-center align-center">
        <img src={logo} alt="logo" className="w-5 h-5" />
        <p className="text-sm tracking-wide text-gray-400">
          {t("footer.rights")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
