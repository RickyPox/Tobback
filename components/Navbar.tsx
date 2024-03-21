import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)
    const navigation=[
        {
            name:"Home",
            href:"#",
        },
        {
            name:"Sobre",
            href:"#",
        },
        {
            name:"Trabalhos",
            href:"#",
        },
        {
            name:"Contactos",
            href:"#",
        },
    ]

    function handleToggleMenuOpen(){
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <div className="relative">
                <div className="flex justify-center pt-[20px] relative">
                    <img className="w-[360px]" src="/logo.svg"></img>
                </div>
                <div className="absolute z-10 top-[60px] right-[300px] cursor-pointer" onClick={handleToggleMenuOpen}>
                    <svg className="w-[30px]" width="51" height="37" viewBox="0 0 51 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="1.5" x2="50.5" y2="1.5" stroke="white" stroke-width="3"/>
                        <line x1="0.5" y1="18.1666" x2="50.5" y2="18.1666" stroke="white" stroke-width="3"/>
                        <line x1="0.5" y1="34.8334" x2="50.5" y2="34.8334" stroke="white" stroke-width="3"/>
                    </svg>
                </div>
            </div>

            {isOpen && (
            <div className="w-full h-screen bg-[rgba(0,0,0,0.8)] backdrop-blur-[6px] absolute top-0">
                <div className="flex flex-col items-center justify-center h-full gap-y-[50px]">
                {navigation.map((navItem, index) => (
                    <Link key={index} href={navItem.href}><h2 className="uppercase text-center text-[#00AC14]">{navItem.name}</h2></Link>
                ))}
                </div>
            </div>
        )}
        </div>
    )
}