import { useState } from "react"
import Atacantes from "./Atacantes"
import Goleiros from "./Goleiros"
import MeioCampo from './MeioCampo'
import Defensores from './Defensores'


const Rendering = () =>{
const [state, setState] = useState()


return(
<div>


        <button onClick={() => setState("a")}>Atacantes</button>
        <button onClick ={() =>{setState("g")}}>Goleiros</button>
        <button onClick={()=>{setState("m")}}>Meio Campo</button>
        <button onClick={()=>{setState("d")}}>Defensores</button>
        { (state == "a")? <div><Atacantes/> </div>:''  }
        { (state == "g")? <div><Goleiros/> </div>:''  }
        { (state == "m")? <div><MeioCampo/> </div>:''  }
        { (state == "d")? <div><Defensores/> </div>:''  }
        </div>

    )
}

export default Rendering