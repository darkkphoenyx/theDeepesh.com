import { Mail } from "lucide-react";
import { Card, CardTitle } from "../../components/ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    // <div
    //   className="relative h-[650px] bg-background max-w-7xl mx-auto" // remember the h is the total height of the viewport for the actual component to be placed... so play around with the values
    //   style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} //here the polygon is a rectangle that is used as clipping mask for the component to be rendered
    // >
    //   <div className="relative h-[calc(100vh+650px)] -top-[100vh]">
    //     <div className="sticky top-[calc(100vh-650px)] h-[650px]">
    //       {/* <span
    //         style={{ fontFamily: "Stretched" }}
    //         className="lg:text-[250px] not-italic text-[92px] font-extrabold tracking-[5px] absolute -top-50"
    //       >
    //         TALK...
    //       </span> */}

    //       {/* <ContactForm /> */}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-background py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="lg:text-5xl md:text-4xl font-bold text-secondary text-3xl mb-12"
          style={{ fontFamily: "Priestacy" }}
        >
          Let's Create Something Amazing Together
        </h1>
        <p className="text-secondary/80">
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-8 max-w-7xl mx-auto">
        <div className="px-4">
          <ContactForm />
        </div>
        <div>
          <Card className="hidden md:flex flex-row space-y-4 rounded-2xl p-4 bg-gray-800 gap-4 w-full">
            <span className="flex gap-2 items-center md:text-xl font-medium text-primary">
              <Mail
                className="block md:hidden p-1.5 bg-primary/20 rounded-lg"
                size={16}
              />
              <Mail
                className="hidden md:block p-1.5 bg-primary/20 rounded-lg"
                size={50}
              />
            </span>
            <CardTitle className="space-y-2">
              <p className="font-semibold text-lg text-primary">Email me</p>
              <p className="text-gray-300 text-sm font-normal">
                sun.08deepesh@gmail.com
              </p>
            </CardTitle>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
