import React from 'react'
import './menu.css'

function Menu () {


    return(
        <div className="container_menu">
            <div className="encabezado_menu">
                <p>Stiven Rodriguez</p>
            </div>
            <div className="navegacion_menu">
                <nav>
                    <a>To-Do</a>
                </nav>
            </div>
        </div>
    )
}

export {Menu}