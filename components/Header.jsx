import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 px-6 xl:px-12 text-white">
       <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
          <Link href="/">
             <h1 className=" text-3xl font-semibold">
                Emmanuel <span className="text-accent">.</span>
             </h1>
            
          </Link>
          {/* desktop nav & hire me button*/}

          <div className="hidden lg:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
          </div>
          {/* mobile nav */}
          <div className="lg:hidden">
            <MobileNav/>
          </div>

          
       </div>
      
    </header>
  )
}

export default Header
