
import './HomeHeader.css'

const Header = () => {
  return (
    <header className="p-20 text-center mb-12 bg-no-repeat bg-cover bg-center h-[600px] rounded-md shadow-lg" style={{ backgroundImage: `url('/images/slider2.png')` }} >
            <div className='sloganContainer flex justify-center items-center flex-col h-full w-full gap-5 '>
            <div><img className='sliderPlaneImg' src='/public/images/paper_plane.png' alt="" /></div>
            <h1>Chào mừng</h1>
            <h1>đến với môi trường </h1>
            <h1><span>CyberSoft</span></h1>
            <button className='btnGlobal btnSlider mt-4 bg-yellow-500 text-white font-bold hover:bg-yellow-400'>Bắt đầu nào</button>
        </div>
    </header>
  )
}

export default Header