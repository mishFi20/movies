import React from 'react'

const Error = () => {

    function refreshPage () {
        window.location.reload()
    }

  return (
    <div className="w-full flex justify-center items-center flex-col text-2xl gap-4">
      <p>⚠️</p>
      <p>Algo salio mal, intenta de nuevo</p>
      <button className="bg-white  border border-black rounded-sm cursor-pointer px-4 py-2" onClick={refreshPage}>Recargar</button>
    </div> 
  )
}

export default Error