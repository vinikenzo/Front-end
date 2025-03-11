import Link from "next/link";
import Image from "next/image";

const LayoutTailwind = () =>{
    return(
        <>
          <div className="min-h-screen flex flex-col">  
            <header className="bg-yellow-400 text-black p-2 h-[90px]">
            <Image className="float-right" src="/images/shrek.jpg" alt="Shrek" width={ 45 } height={35} />
                <p className="text-2xl font-bold mb-2">Bem vindo ao Tailwind CSS</p>
                <p className="text-lg">Aprenda como criar layouts com facilidade e rapidez</p>

            </header>
            <main className="flex-1 container mx-auto p-6">
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-slate-300 p-4 rounded">
                        <h2 className="text-2xl font-semibold mb-2">Coluna 1</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-slate-300 p-4 rounded">
                        <h2 className="text-2xl font-semibold mb-2">Coluna 2</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="bg-slate-300 p-4 rounded">
                        <h2 className="text-2xl font-semibold mb-2">Coluna 3</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    
                </div>
            </main>
            <footer className="bg-yellow-400 text-black  text-lg font-semibold">
                <nav>
                    <Link className="mr-4 ml-3 "   href="/">Home</Link>
                    <Link className="mr-4" href="#">Sobre</Link>
                    <Link href="#">Contato</Link>
                </nav>
            </footer>
          </div>  
        </>
    )
}
export default LayoutTailwind;