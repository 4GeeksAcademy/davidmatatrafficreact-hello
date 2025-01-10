import React, {useState} from "react"

const TrafficLight =()=>{
    //hook useState
    const[selected, setSelected] = useState ("red")

    //[estado en si mismo, única función para cambiar el estado] = useState(como se inicializa el estado)
    
    const changeColor=(color)=>{
        setSelected(color)
    }
    
    return(
        <main>
            <div className="stick">

            </div>
            <div className="light-box">
                <div 
                className={`red ${selected == "red" ? "light-on" : ""}`}
                onClick={()=>changeColor("red")}
                ></div>
                <div 
                className={`yellow ${selected == "yellow" ? "light-on" : ""}`}
                onClick={()=>changeColor("yellow")}
                ></div>
                <div 
                className={`green ${selected == "green" ? "light-on" : ""}`}
                onClick={()=>changeColor("green")}
                ></div>
            </div>
           
        </main>
    )
}

export default TrafficLight

//