import Link from "next/link"

export default function Footer (){
    
    const navigation = [
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

    return(
        <div className="flex flex-col items-center border-t-[1px] border-[#00AC14]">
            <img src="/logo.svg" className="w-[300px]"></img>
            <div className="flex items-center gap-[50px] mt-[50px]">
                { navigation.map((item,index) =>(
                    <Link key={index} href={item.href}><p className=" text-center">{item.name}</p></Link>
                ))}
            </div>
            <div className="flex gap-[50px] mt-[50px]">
                <img src="/Behance.png"></img>
                <img src="/LinkedIn.png"></img>
                <img src="/Insta.png"></img>
            </div>
            <div>
                <p className="text-[14px] mt-[70px]">© 2024 Tobback Productions, All rights reserved</p>
            </div>
        </div>
    )
}