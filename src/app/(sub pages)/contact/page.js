import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/form";
export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-psemibold text-center text-4xl capitalize">
            Looking to hire a skilled software developer?
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Let’s create something extraordinary together! With a passion for
            developing efficient, scalable solutions and a deep understanding of
            the latest technologies, I’m ready to tackle your project’s unique
            challenges. Whether you need a developer to lead the way on a new
            initiative or to seamlessly integrate into an existing team, I bring
            a proven track record of delivering results. Reach out using the
            form below or contact me directly, and let’s discuss how I can
            contribute to your success. I look forward to joining your team!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}

//1:52:49
