
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"  // Importando o ícone de download

//Componentes 
import Socials from "@/components/Socials";
import Foto from "@/components/Foto";

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24">

            {/* Apresentação */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Um estudante de Ciência da Computação.</span>
            <h1 className="h1 mb-6">Olá, eu sou<br /><span className="text-blue-500">Yuri Cavallini</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Estudante de Ciência da Computação, apaixonado por tecnologia e desenvolvimento de software. 
              Atualmente estou aprendendo a desenvolver aplicações web com ReactJS e NodeJS.
            </p>

            {/* Redes Sociais */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className=" flex items-center gap-2"> 
                <span> Download CV </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-blue-500 rounded-full flex justify-center items-center text-blue-500
                  text-base hover:bg-blue-500 hover:text-primary
                  hover:transition-all duration-500"/>            
              </div>
            </div>
          </div>
            {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Foto />
          </div>
          </div>
        </div>
    </section>
  );
};

export default Home