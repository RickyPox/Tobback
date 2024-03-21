import Marquee from "react-fast-marquee";


export default function MarqueeSlider(props:any){

    const handleServiceClick = (service:any) => {
        props.onServiceSelect(service);
    };

    return(
        <div>
            <Marquee
            pauseOnHover
            >
                {props.services.map((service:any, index:any) => (
                    <h2 
                    style={{ WebkitTextStrokeColor: "#00AC14", WebkitTextStrokeWidth: "1px" }}
                    className="uppercase text-center hover:text-[#00AC14] text-transparent  mr-[20px] ml-[20px] cursor-pointer"
                    onClick={() => handleServiceClick(service)}>{service.name}</h2>
                ))}
            </Marquee>
            <Marquee
            pauseOnHover
            direction="right">
                {props.services.map((service:any, index:any) => (
                    <h2 
                    style={{ WebkitTextStrokeColor: "#B957A1", WebkitTextStrokeWidth: "1px" }}
                    className="uppercase text-center hover:text-[#B957A1] text-transparent   mr-[20px] ml-[20px] cursor-pointer"
                    onClick={() => handleServiceClick(service)}>{service.name}</h2>
                ))}
            </Marquee>
        </div>
    )
}
