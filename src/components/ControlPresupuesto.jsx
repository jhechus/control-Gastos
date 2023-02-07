import React from 'react'

function ControlPresupuesto({presupuesto}) {
  return (
    <div className=' contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p> Grafica here</p>
        </div>

        <div className=' contenido-presupuesto'>
            <p>
                <span> presupuesto... </span> ${presupuesto}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
