"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Honeypot from "../HoneyPot";
import ContactFormFields from "../ContactFormFields";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef(null); // Form reference

  // Initialize form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission with Email.js
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error message before each submission

    // Check honeypot field to prevent bots
    const honeypotField = e.target.honeypot?.value;
    if (honeypotField) {
      console.warn("Bot detected, form submission blocked.");
      setLoading(false);
      return;
    }

    // Define the template parameters for Email.js
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_subject: formData.subject,
      from_message: formData.message,
    };

    emailjs
      .send(
        "service_nwekexp",
        "template_hqbll4c",
        templateParams,
        "cIfC1jSm24S3wb0tA"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        formRef.current.reset();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormSubmitted(true);
        setLoading(false);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setErrorMessage("Une erreur s’est produite. Veuillez réessayer.");
        setLoading(false);
      });
  };

  return (
    <>
      <form
        ref={formRef} // Using the form reference
        className="flex flex-col gap-[48px] w-full mt-[48px]"
        onSubmit={handleSubmit}
      >
        <Honeypot /> {/* Honeypot for bots */}
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        {/* Use the extracted form fields */}
        <ContactFormFields
          formData={formData}
          handleInputChange={handleInputChange}
        />
        {formSubmitted && (
          <div className="text-[24px] text-center self-center">
            Votre message a bien été envoyé. Merci !
          </div>
        )}
        <button
          className="text-[24px] mt-[48px] px-[48px] py-[12px] border-solid border-[2px] border-black w-fit self-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 ease-in-out active:scale-90"
          type="submit"
          disabled={loading}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </>
  );
}
