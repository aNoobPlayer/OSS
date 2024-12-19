import { ContactForm } from "../components/ContactForm";
import { ContactInfoItem } from "../components/ContactInfoItem";
import { contactInfo } from "../data/ContactData";

export default function Contact() {
  return (
    <main className="flex flex-col rounded-none">
      <section className="flex relative flex-col items-start px-20 pt-28 pb-44 w-full min-h-[536px] max-md:px-5 max-md:py-24 max-md:max-w-full" aria-label="Hero section">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8c4c8f7365fb0c3389f13eba5c86efa84bb620e4e671e271af98783e6be882?placeholderIfAbsent=true&apiKey=69b090b19e3a45eaa7b94492d5c1e0b6"
          alt="Kijiji Beach background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-10 py-20 mb-0 max-w-full rounded-2xl bg-white bg-opacity-80 w-[457px] max-md:px-5 max-md:mb-2.5">
          <div className="flex gap-3 self-start text-2xl font-bold text-neutral-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56e21d26c205be54733cc1b14bd72ff0a6d68687fdfda4160edbb64f862e8d05?placeholderIfAbsent=true&apiKey=69b090b19e3a45eaa7b94492d5c1e0b6"
              alt="Kijiji Beach logo"
              className="object-contain shrink-0 w-12 aspect-[0.98]"
            />
            <div className="my-auto basis-auto">Kijiji Beach</div>
          </div>
          <div className="self-end mt-2 text-base text-neutral-400">
            <span className="font-semibold text-stone-500">
              Kigamboni , Dar es salaam, Tanzania
            </span>
            <br />
            <br />
          </div>
        </div>
      </section>
      
      <section className="self-center mt-24 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full" aria-label="Contact section">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-base font-bold text-neutral-700 max-md:mt-10">
              <h1 className="self-stretch text-5xl max-md:text-4xl max-sm:px-5">
                Feel free to contact with us any time
              </h1>
              {contactInfo.map((item, index) => (
                <ContactInfoItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}