import { useEffect, useState } from "react"
import PortfolioList from "../portfoliolist/PortfolioList"
import "./Portfolio.scss"
import {
    featuredProject,
    prototypePortfolio,
    orgPortfolio,
} from "../../data"

function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "proto",
            title: "Prototypes"
        },
        {
            id: "cert",
            title: "Certificates"
        },
        {
            id: "side",
            title: "Side Projects"
        },
        {
            id: "org",
            title: "Organizations"
        },
    ]

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredProject)
            break;
            case "proto":
                setData(prototypePortfolio)
            break
            case "org":
                setData(orgPortfolio)
            break
            default:
                setData(featuredProject)
        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(items=>(
                    <PortfolioList title={items.title} active={selected === items.id} setSelected={setSelected} id={items.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(

                
                <div className="items">
                    <img src={d.img} alt =""/>
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
