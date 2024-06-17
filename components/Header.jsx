import Link from "next/link";  
import { Button } from "./ui/button";

// Componentes
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Yur1_a1<span className="text-blue-500">.</span>
                </h1>
            </Link>

            {/* Navbar pc */}
            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href="https://wa.me/5517981429334" target="_blank">
                    <Button>Wpp me!</Button>
                </Link>
                
            </div>

             {/* Navbar mobile */}
             <div className="xl:hidden">
                <MobNavbar />
             </div>
        </div>
    </header>
  );
};
export default Header