import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Card, CardTitle } from "../../components/ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div
      className="bg-background pt-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30, 41, 56, 0.5), transparent 70%), #101E2A",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="lg:text-5xl md:text-4xl font-bold text-secondary text-3xl lg:mb-12 mb-8"
          style={{ fontFamily: "Priestacy" }}
        >
          Get in Touch
        </h1>
        <p className="text-secondary/80 px-4">
          Whether you have a question or just wanna to say "HI", I'll try my
          best to get back to you!
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-18 mb-8 space-y-8 max-w-7xl mx-auto">
        <div className="px-4">
          <ContactForm />
        </div>
        <div className="px-4">
          <Card className="flex flex-row space-y-4 rounded-3xl p-4 bg-gray-800 border border-gray-600 gap-4 w-full">
            <span className="flex gap-2 items-center md:text-xl font-medium text-primary">
              <Mail
                className="block md:hidden p-1.5 bg-primary/20 rounded-lg"
                size={30}
              />
              <Mail
                className="hidden md:block p-1.5 bg-primary/20 rounded-lg"
                size={36}
              />
            </span>
            <CardTitle className="space-y-2">
              <p className="font-semibold text-lg text-primary">Email me</p>
              <p className="text-gray-300 text-sm font-normal">
                sun.08deepesh@gmail.com
              </p>
            </CardTitle>
          </Card>

          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-gray-600 bg-gray-800 p-4 mt-8">
            {/* instagram */}
            <a href="https://www.instagram.com/sun_deepesh/" target="_blank">
              <Card className="text-white p-2 justify-center hover:scale-x-103 transition-all gap-2 flex flex-row items-center bg-gradient-to-tr from-red-500 to-pink-500 border-none">
                <Instagram className="block md:hidden" size={20} />
                <Instagram className="hidden md:block" size={28} />
                <p className="font-semibold md:text-lg text-sm">Instagram</p>
              </Card>
            </a>

            {/* facebook  */}
            {/* facebook link has some issues */}
            <a
              href="https://www.facebook.com/deepesh.sunuwar.08"
              target="_blank"
            >
              <Card className="text-white p-2 justify-center hover:scale-x-103 transition-all gap-2 flex flex-row items-center bg-gradient-to-bl from-blue-500 to-indigo-700 border-none">
                <Facebook className="block md:hidden" size={20} />
                <Facebook
                  className="hidden md:block fill-white"
                  size={28}
                  stroke="1"
                />
                <p className="font-semibold md:text-lg text-sm">Facebook</p>
              </Card>
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/deepeshsunuwar/"
              target="_blank"
            >
              <Card className="text-white p-2 justify-center hover:scale-x-103 transition-all gap-2 flex flex-row items-center bg-gradient-to-bl from-blue-600 to-indigo-900 border-none">
                <Linkedin className="block md:hidden" size={20} />
                <Linkedin className="hidden md:block" size={28} />
                <p className="font-semibold md:text-lg text-sm">LinkedIn</p>
              </Card>
            </a>
            <a href="https://www.github.com/darkkphoenyx" target="_blank">
              <Card className="text-white p-2 justify-center hover:scale-x-103 transition-all gap-2 flex flex-row items-center bg-gradient-to-tr from-gray-900 to-gray-700 border-none">
                <Github className="block md:hidden" size={20} />
                <Github className="hidden md:block" size={28} />
                <p className="font-semibold md:text-lg text-sm">GitHub</p>
              </Card>
            </a>
          </div>
        </div>
      </div>

      {/* clipping mask */}
      <div
        className="relative lg:h-[170px] md:h-[80px] h-[50px] bg-primary z-10"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative bg-primary lg:h-[calc(100vh+170px)] md:h-[calc(100vh+80px)] h-[calc(100vh+50px)] -top-[100vh]">
          <div className="sticky lg:top-[calc(100vh-170px)] md:top-[calc(100vh-80px)] top-[calc(100vh-50px)] lg:h-[170px] md:h-[80px] h-[50px]">
            <p className="lg:text-[120px] md:text-[50px] text-[18px] flex justify-center ml-4 text-center md:pt-0 pt-2 font-bold text-background md:tracking-[50px] tracking-[30px]">
              gracias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
