import back from "E:/e20-co225-Denture-Design-Studio/FrontEnd-DenturedesignStudio/src/backbutton/back.png"
import "./Back.css"
function Back({onclick}){
    return(
        <div>
        <button  className="backbutton" onClick={onclick}><img src={back} alt="my img" /></button>
        
        </div>
    )
}
export default Back