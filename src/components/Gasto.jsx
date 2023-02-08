import React from 'react'
import { formatearFecha } from '../helpers';

import IconoAhorro from '../img/Icono_ahorro.svg'
import IconoCasa from '../img/Icono_casa.svg'
import IconoComida from '../img/Icono_comida.svg'
import IconoGastos from '../img/Icono_gastos.svg'
import IconoOcio from '../img/Icono_ocio.svg'
import IconoSalud from '../img/Icono_salud.svg'
import IconoSuscripciones from '../img/Icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro       : IconoAhorro,
  comida       : IconoComida,
  casa         : IconoCasa,
  gastos       : IconoGastos,
  ocio         : IconoOcio,
  salud        : IconoSalud,
  suscripciones: IconoSuscripciones
}


function Gasto({gasto}) {

    const { categoria, nombre, cantidad, id, fecha } = gasto;

  return (
    <div className=' gasto sombra'>
      <div className=' contenido-gasto'>
        <img 
          src={diccionarioIconos[categoria]}
          alt="Icono gasto" 
        />
        <div className=' descripcion-gasto'>
            <p className=' categoria'> {categoria} </p>
            <p className=' nombre-gasto'> {nombre} </p>
            <p className=' fecha-gasto'> <span> {formatearFecha(fecha)}  </span> </p>
        </div>
      </div>

      <p className=' cantidad-gasto'> ${cantidad} </p>

    </div>
  )
}

export default Gasto
