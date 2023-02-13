import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import Swal from "sweetalert2"
import 'react-circular-progressbar/dist/styles.css'

function ControlPresupuesto({
    gastos, 
    presupuesto,
    setGastos,
    setPresupuesto,
    setIsValidPresupuesto
}) {

    const [ porcentaje, setPorcentaje] = useState(0)
    const [ disponible, setDisponible] =useState(0)
    const [ gastado, setGastado] =useState(0)


    useEffect ( () => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado

        //calcular el porcentaje gastado para la grafica
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto * 100)).toFixed(2);

        setDisponible(totalDisponible)
        setGastado(totalGastado);

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 380);

    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        Swal.fire({
            title: 'Seguro que quieres eliminar el presupuesto actual?',
            text: 'Se eliminaran los gastos y el presupuesto',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#3b82f6',
            cancelButtonText: 'Cancelar',
            width: '40%',
            
          }).then((result) => {
            if (result.isConfirmed) {
                setGastos([])
                setPresupuesto(0)
                setIsValidPresupuesto(false)
            } 
          })
    }

  return (
    <div className=' contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={ buildStyles({
                    pathColor: porcentaje > 100 ? '#dc2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#dc2626' : '#3B82F6',
                })} 
                value={porcentaje} 
                text={`${porcentaje}%`}         
            />

            
        </div>

        <div className=' contenido-presupuesto'>
            <button
                className=" reset-app"
                type="button"
                onClick={handleResetApp}
            >
                Resetear presupuesto
            </button>
            <p>
                <span> presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span> Disponible: </span> {formatearCantidad(disponible)}
            </p>

            <p>
                <span> Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
