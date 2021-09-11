import "./Skills.scss"
function Skills() {
    return (
       <div className="skill" id="skills">
           <div className="left">
                <h2>Programming</h2>
               <div className="skillcontainer">

           <li><h3>Python</h3>
           <span className="bar" title="70%"><span className="py"></span></span>
           </li>
           <li><h3>Java</h3>
           <span className="bar" title="60%"><span className="jav"></span></span>
           </li>
           <li><h3>Visual Basic</h3>
           <span className="bar" title="60%"><span className="vb"></span></span>
           </li>
           <li><h3>MySQL</h3>
           <span className="bar" title="60%"><span className="sql"></span></span>
           </li>
           <li><h3>HTML</h3>
           <span className="bar" title="40%"><span className="html"></span></span>
           </li>
           <li><h3>CSS</h3>
           <span className="bar" title="40%"><span className="css"></span></span>
           </li>
           <li><h3>Javascript</h3>
           <span className="bar" title="40%"><span className="js"></span></span>
           </li>
           </div>
        </div>
        <div className="right">
            <div className="skiller">
            <h2>Other Tools I Use : </h2>
            <div className="otherSkills">
               <div className="items">
               <img src="assets/matlab.png" alt=""/>
                    <h3>Matlab</h3>
               </div>
               <div className="items">
               <img src="assets/draw.png" alt=""/>
                    <h3>Draw.io</h3>
               </div>  
               <div className="items">
               <img src="assets/ptshop.png" alt=""/>
                    <h3>Photoshop</h3>
               </div>
               <div className="items">
               <img src="assets/git.png" alt=""/>
                    <h3>Github</h3>
               </div>  
               <div className="items">
               <img src="assets/trel.jpg" alt=""/>
                    <h3>Trello</h3>
               </div>   
                <div className="items">
               <img src="assets/kaggle.png" alt=""/>
                    <h3>Kaggle</h3>
               </div>     
            </div>
        </div>
       </div>
       </div>
       
    )
}

export default Skills
