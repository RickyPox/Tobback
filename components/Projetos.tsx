import React, { useState } from "react";
import MarqueeSlider from "./Marquee";
import services from "./ServicesArray";
import { motion } from "framer-motion";


export default function Projetos() {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);
    const handleServiceSelect = (service:any) => {
        setSelectedService(service);
    };

    const handleHoveredImage = (index:any) => {
        setHoveredImage(index)
    }


    return (
        <div>
            <MarqueeSlider services={services} onServiceSelect={handleServiceSelect}></MarqueeSlider>
            <div className="grid grid-cols-10 gap-[20px] mt-[200px]">
                <h2 className="col-start-2 col-span-3">PROJETOS</h2>
                <div className="flex col-start-2 col-span-7 justify-between">
                    {services.map((service, index) => (
                        <p key={index} className={`cursor-pointer hover:text-[#00AC14] ${selectedService.name === service.name ? "text-[#00AC14]" : "text-white "}` } 
                        onClick={() => setSelectedService(service)}>{service.name}</p>
                    ))}
                </div>
                {selectedService && (
                    <div className="col-start-2 col-span-8 mt-4 grid grid-cols-2 gap-4">
                        {selectedService.images.map((image, index) => (
                            <div key={index} className="overflow-hidden relative"
                            onMouseEnter={() => handleHoveredImage(index)}
                                onMouseLeave={() => setHoveredImage(null)}>
                                <img src={image.src} alt="" className="w-full h-auto"/>
                                {hoveredImage === index && <motion.div 
                                initial={{ width: 0, opacity:0 }}
                                animate={{ width: "100%", opacity:1}}
                                className="absolute flex items-center justify-center inset-0 bg-black/80">
                                    <h3>{image.name}</h3>
                                </motion.div>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
