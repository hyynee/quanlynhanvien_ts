"use client"


import { PacmanLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>

      <PacmanLoader color="#2c76f9" />
    </div>
  )
}

export default loading;
