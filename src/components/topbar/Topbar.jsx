import "./Topbar.scss"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper"> 
                <div className="left"> 
                <a href="#intro" className="logo">mattekudacy</a>
                <div className="Itemcontainer">
                <AccountCircleIcon className="icons"/>
                <span>0921-203-7092</span>
                </div>

                <div className="Itemcontainer">
                <MailIcon className="icons"/>
                <span>cyrus2952@gmail.com</span>
                </div>

                <div className="Itemcontainer">
                <GitHubIcon className="icons"/>
                <span><a href="https://github.com/mattekudacy?tab=repositories" className="githublink">mattekudacy</a></span>
                </div>

                <div className="Itemcontainer">
                <LinkedInIcon className="icons"/>
                <span><a href="https://www.linkedin.com/in/cyrus-mante-17529b217/" className="githublink">Cyrus Mante</a></span>
                </div>
            </div>
            <div className="right"> 
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Topbar
