import { useState } from "react";
import "./Contact.scss"
function Contact() {

    const [message,setMesage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMesage(true)
    }
    return (
        <div className="contact" id="contacts">
            <div className="left">
                <img src="https://www.pngkit.com/png/full/290-2900380_contact-me-lets-connect-logo.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks. I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
