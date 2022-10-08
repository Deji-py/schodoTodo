import React from 'react'
import { AiFillSchedule } from "react-icons/ai"
function Header() {
    return (
        <div className='flex' style={{padding:"10px 20px", background:"var(--secondary)", color:"white"}}>
            <div className="flex left">

                <AiFillSchedule size={25}  style={{marginRight:"10px"}}/>
                <h3>Schodo</h3>
            </div>
            <div className="right">
                <img src={require("./Assets/Images/Avatar.jpg")} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "100px" }} />
            </div>
        </div>
    )
}

export default Header
