import React from 'react'
import { AiFillSchedule } from "react-icons/ai"
import { FaSearch } from 'react-icons/fa'
function Header() {
    return (
        <div className='flex' style={{padding:"10px 20px", background:"var(--secondary)", color:"white"}}>
            <div className="flex left">

                <AiFillSchedule size={25}  style={{marginRight:"10px"}}/>
                <h3>Schodo</h3>
            </div>

            <div className="right">
               
               <FaSearch size={20}/>
            </div>
        </div>
    )
}

export default Header
