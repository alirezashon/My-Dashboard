import Image from "next/image";


export default function index(){
    return(
  <>
    <div className="profile-box">
        <img className="profile-image" src={'/images/me.jpg'}/>
    </div>        
  </>
    )
}