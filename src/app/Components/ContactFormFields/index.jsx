import React from 'react';

export default function ContactFormFields({ formData, handleInputChange }) {
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <label htmlFor="name" className="text-[24px]">
          Nom :
        </label>
        <input
          placeholder="Jean Dupont"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="border-solid border-b-[1.5px] border-black w-[100%] xl:w-[30%] text-[16px] pb-[20px]"
        />
      </div>
      
      <div className="flex flex-col gap-[24px]">
        <label htmlFor="email" className="text-[24px]">
          Email :
        </label>
        <input
          placeholder="jean@dupont.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="border-solid border-b-[1.5px] border-black w-[100%] xl:w-[40%] text-[16px] pb-[20px]"
        />
      </div>
      
      <div className="flex flex-col gap-[24px]">
        <label htmlFor="subject" className="text-[24px]">
          Sujet :
        </label>
        <input
          placeholder="Shooting commercial"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="border-solid border-b-[1.5px] border-black w-[100%] xl:w-[50%] text-[16px] pb-[20px]"
        />
      </div>
      
      <div className="flex flex-col gap-[24px]">
        <label htmlFor="message" className="text-[24px]">
          Message :
        </label>
        <textarea
          required
          placeholder="Bonjour, pouvons-nous convenir d’un rendez-vous le ..."
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="border-solid border-b-[1.5px] border-black w-[100%] xl:w-[60%] text-[16px]"
        />
      </div>
    </>
  );
}