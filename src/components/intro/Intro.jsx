import "./Intro.scss"
import { init } from "ityped"
import { useEffect, useRef} from "react"

function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500, 
            typeSpeed: 50,
            strings:["Aspiring Software Engineer", "Start-Up Enthusiast", "2nd Year CS Student"]})
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/face.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Cyrus Mante</h1>
                    <h3>.<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Intro
