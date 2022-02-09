import React from 'react';
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

function Loading() {
  return (
    <div>
        <li className="item">
            <MdDone className="done-icon uncompleted" />
            <p className="textoItem">Cargando tareas...</p>
            <MdClose className="delete_icon"  />
        </li>
        <li className="item">
            <MdDone className="done-icon uncompleted" />
            <p className="textoItem">Cargando tareas...</p>
            <MdClose className="delete_icon"  />
        </li>
        <li className="item">
            <MdDone className="done-icon uncompleted" />
            <p className="textoItem">Cargando tareas...</p>
            <MdClose className="delete_icon"  />
        </li>
        <li className="item">
            <MdDone className="done-icon uncompleted" />
            <p className="textoItem">Cargando tareas...</p>
            <MdClose className="delete_icon"  />
        </li>
        <li className="item">
            <MdDone className="done-icon uncompleted" />
            <p className="textoItem">Cargando tareas...</p>
            <MdClose className="delete_icon"  />
        </li>
    </div>
  );
}

export {Loading};
