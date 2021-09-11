import { useState } from "react"
import "./Works.scss"

function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "assets/sideproj.png",
            title: "Side Projects",
            desc: "These are some of the projects I'm a part of. These projects eihter came from my group projects in school or open source projects in Github. I contribute on projects with the same technologies I'm familiar with",
            img: "assets/EasyCityHotel.JPG",
        },
        {
            id: "2",
            icon:"assets/certi.png",
            title: "Certificates",
            desc: "These are the certificates I got from completing online courses like freecodecamp, Udemy, Google, Microsoft etc. I may also include certifications for participating in big events like hackatahons and being a guest speaker in short talks.",
            img: "assets/EasyCityHotel.JPG",
        },
        {
            id: "3",
            icon: "assets/community.png",
            title: "Organization",
            desc: "These are the organizations and communities I am a part of. These organization maybe through online or in-person. I have also contributed to some of these communities in their projects or webinars which is included in the Porfolio Tab above.",
            img: "assets/algofilipinotech.png",
        },
        {
            id: "4",
            icon: "assets/proto.png",
            title: "Protoytpes",
            desc: "These are the systems and projects I made myself during my spare time. Some of them are incomplete but this all shows my process of learning throughout my career. The source codes of the said projects can be accessed by clicking my Github username.",
            img: "assets/LandF.JPG",
        },
    ]
    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="works" id="works"> 
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}> 
                    {data.map(d =>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>_______________________________________</span>
                            </div>
                        </div>
                        <div className="right">
                    
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrowgreen.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrowgreen.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
