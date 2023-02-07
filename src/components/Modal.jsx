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
      </form>
    </div>
  )
}

export default Modal
