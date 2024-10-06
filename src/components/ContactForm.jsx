import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_k40zd0i",
          "template_4gpxqbs",
          formData,
          "QaGiDq2qyK4Il-cr5"
        )
        .then((respone) => {
          console.log("SUCCESS!", respone.status, respone.text);
          toast.success(t("contact.toast_success"));
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error(t("contact.toast_fail"));
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        {t("contact.heading")}
      </h2>
      <p className="mb-8  text-lg lg:text-xl leading-relaxed">
        {t("contact.paragraph")}
      </p>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mb-4">
          {errors.name && (
            <motion.p
              className="text-sm mt-0 text-pink-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.name}
            </motion.p>
          )}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder={t("contact.name_placeholder")}
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          {errors.email && (
            <motion.p
              className="text-sm text-pink-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.email}
            </motion.p>
          )}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder={t("contact.email_placeholder")}
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          {errors.message && (
            <motion.p
              className="text-sm text-pink-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.message}
            </motion.p>
          )}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder={t("contact.message_placeholder")}
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent resize-none px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? t("contact.sending") : t("contact.send")}
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
