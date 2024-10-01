
import ContactForm from "../Components/ContactForm";
import ContactSocial from "../Components/ContactSocial";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col gap-[48px] items-center sm:items-start xl:ml-[360px] mt-[48px] ">
      <h1 className="text-[36px] text-center self-center">Contactez-moi</h1>
      <ContactForm />
      <ContactSocial />
    </main>
  );
}
