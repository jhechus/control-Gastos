import CerrarBtn from '../img/cerrar.svg'

function Modal({setModal}) {

    const ocultarNodal = () => {
        setModal(false)
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
    </div>
  )
}

export default Modal
