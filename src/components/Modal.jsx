import CerrarBtn from '../img/cerrar.svg'

function Modal({setModal, animarModal, setAnimarModal}) {

    const ocultarNodal = () => {
        
        setAnimarModal(false)

        setTimeout(() => {
          setModal(false)
        }, 500);
    }


  return (
    <div className=' modal'>
      <div className=' cerrar-modal'>
        <img 
            src={CerrarBtn} 
            alt="cerrar nodal"
            onClick={ocultarNodal}
        />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>
          Nuevo Gasto
        </legend>

        <div className=' campo'>
          <label htmlFor="Gasto">Nombre del Gasto</label>

          <input 
            id='nombre'
            type="text"
            placeholder='Añade el Gasto' 
          />
        </div>

        <div className=' campo'>
          <label htmlFor="cantidad">Cantidad del Gasto</label>

          <input 
            id         ='cantidad'
            type       ="text"
            placeholder='Añade la cantidad' 
          />
        </div>

        <div className=' campo'>
          <label htmlFor="categoria">Categoria</label>
            <select 
              name="" 
              id="categoria">
                <option value=""             > -- Seleccione -- </option>
                <option value="ahorro"       > Ahorro           </option>
                <option value="comida"       > Comida           </option>
                <option value="casa"         > Casa             </option>
                <option value="gastos"       > Gastos Varios    </option>
                <option value="ocio"         > Ocio             </option>
                <option value="salud"        > Salus            </option>
                <option value="suscripciones"> Suscripciones    </option>
            </select>  
        </div>

        <input 
          type="submit"
          value={'añadir gasto'}
        
        />

      </form>
    </div>
  )
}

export default Modal
