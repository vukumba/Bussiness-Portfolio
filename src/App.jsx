import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import emailjs from '@emailjs/browser';
import { PiBooks, PiPhone, PiPhoneCall } from 'react-icons/pi'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FullYear } from 'react-full-year'
import { BiBrush, BiChair, BiColor, BiMenu } from 'react-icons/bi'
import img from './assets/vukumba.png'
import img2 from './assets/profile.jpeg'
import img3 from './assets/logo.jpeg'
import Navbar from './components/Navbar'
import { BsHouse, BsInfo, BsInfoCircle, BsLaptop, BsMenuButton } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { FaComputer, FaLinkedin } from 'react-icons/fa6'
import { MdCable, MdContactPage, MdContactPhone, MdEmail, MdOutlineDesignServices, MdSettings, MdSettingsApplications } from 'react-icons/md'
import { GiSpade } from 'react-icons/gi'
import Card from './components/Card'
import { FormCard } from './components/FormCard'
function App() {

  const year = new Date().getFullYear();
  const items = [
    {
      title: "Computer Hardware & Peripherals",
      icon: <FaComputer className='w-[60px] h-[60px]' />,
      desc: "We provide high-quality computer hardware, accessories, and peripherals for various needs.",
    },
    {
      title: "Electrical Equipment & Components",
      icon: <MdCable className='w-[60px] h-[60px]' />,
      desc: "Supplying a wide range of electrical components for industrial and commercial use.",
    },
    {
      title: "Cleaning Equipment",
      icon: <BiBrush className='w-[60px] h-[60px]' />,
      desc: "Offering professional-grade cleaning equipment and supplies.",
    },
    {
      title: "Personal Protective Equipment (PPE)",
      icon: <GiSpade className='w-[60px] h-[60px]' />,
      desc: "Ensuring workplace safety with high-quality PPE for different industries.",
    },
    {
      title: "School Materials & Stationery",
      icon: <PiBooks className='w-[60px] h-[60px]' />,
      desc: "Providing educational supplies and stationery for students and institutions.",
    },
    {
      title: "Computers & Laptops",
      icon: <BsLaptop className='w-[60px] h-[60px]' />,
      desc: "Supplying the latest laptops and desktop computers for businesses and individuals.",
    },
    {
      title: "Mining, Industrial & Construction Machinery",
      icon: <BsHouse className='w-[60px] h-[60px]' />,
      desc: "Reliable machinery and equipment for mining, industrial, and construction sectors.",
    },
    {
      title: "Office Furniture",
      icon: <BiChair className='w-[60px] h-[60px]' />,
      desc: "Stylish and ergonomic office furniture solutions for all workspaces.",
    },
  ];

  const [isMenu,setIsMenu]=useState(false);
  return (
    <div className='w-[100%] ' >
      {/* Navbar*/}

      <div id='navBar' style={{ backgroundColor: "#042b52" }} className=" sticky top-0 left-0  w-[100%]  p-4 flex flex-row items-center justify-between">
        <img  src={img} className='max-w-[100%] rounded rounded-2xl hover:scale-80   duration-500 cursor-pointer text-2xl w-[100px] md:w-[150px] text-white text-yellow-600 font-semibold'></img> <div className="hidden md:block"><Navbar /></div> <div onClick={()=>setIsMenu(!isMenu)} className="block md:hidden">
          <BiMenu className='text-white text-2xl cursor-pointer' />
          {isMenu&& <div className=" p-4 w-full flex justify-center items-center z-40 absolute top-0 left-0 bg-[#042b52]" onScroll={()=>{!isMenu}}>
        
          <ul className='text-white flex flex-col justify-evenly gap-4 font-semibold text-center'>
            <li className='flex justify-center items-center' onClick={()=>{!isMenu}}><BsInfoCircle/><a className='p-2' href="#About">About</a></li>
            <li className='flex justify-center items-center' onClick={()=>{!isMenu}}><MdOutlineDesignServices/><a className='p-2' href="#Services">Services</a></li>
            <li className='flex justify-between items-center' onClick={()=>{!isMenu}}><PiPhoneCall/><a className='p-2' href="#Contact">Contact Us</a></li>
          </ul>
          
         </div>}
        {isMenu&& <div style={{backgroundColor:"#808080BF"}} className="w-full h-[100vh] absolute top-0 left-0 z-10" onMouseOver={()=>{setIsMenu(false)}} onClick={()=>{setIsMenu(false)}} ></div>}
        </div>

       
      </div>
      {/* Profile section */}


      <div id='Home' className="p-4 w-full scroll-mt-[120px]  ">

        {/* //Hero image */}
        <div className="amoeba p-4  bg-blue-300 w-auto rounded place-items-center rounded-2xl flex flex-col md:flex-row gap-4 "> <img src={img2} className='aspect-auto rounded rounded-3xl md:rounded-3xl px-6 md:px-4 w-full max-w-[300px]  shrink-0 md:w-[300px] hover:scale-80 duration-500 hover:-translate-1' />
          <div className="ms-8"><h1 className=' text-xl md:text-3xl text-white my-4'>Welcome to <span className='text-xl md: text-5xl text-yellow-400 font-medium'>VUKUMBA(Pty)Ltd</span></h1>
            <div className="text-2xl my-2  mb-10 font-bold text-white">Reliable Industrial Supply Solutions You Can Count On</div>
            <div className="text-xl my-2">Established in 2021 by Vutlharhi Phakula, VUKUMBA (Pty) Ltd<br /> is a 100%
              Black Economic Empowerment company.<br /> We specialize in supplying farming and industrial equipment,
              stationery, computer peripherals,<br /> and consumables. Our mission is to alleviate poverty, create jobs,<br />
              and empower women, youth, and disabled individuals.

              We strive to provide specialized services with excellence, <br />respect, and integrity,
              making us one of the leading multi-division companies in the industry.</div>
          </div></div>
      </div>

      {/* About us section */}
      <div id='About' className=" transition bg-[#042b52] my-4 place-items-center grid  p-8 w-[100%] text-center scroll-mt-[120px]  ">

        <div className="text-2xl mb-10 text-white mt-4">About <span className='text-3xl text-yellow-400 font-semibold'>VUKUMBA(PTY)</span></div>
        <div className="md:flex-row flex-col-reverse flex justify-between place-items-center">
          <div className="p-4 md:ps-30 text-wrap">
            <div className="grid place-items-center text-start text-xl text-white ">
              Founded in 2021 by Vutlharhi Phakula, VUKUMBA (Pty) Ltd is a 100% Black Economic Empowerment <br />
              and empower women, youth, and disabled individuals.company committed to fostering economic growth and empowerment.<br />  Our mission is to alleviate poverty, create jobs, and support women, youth,<br /> and disabled individuals through sustainable business initiatives.</div>
            <div className="grid place-items-center text-start text-xl text-white mt-6">
              As a multi-division company, we specialize in providing high-quality farming and industrial equipment, stationery, computer peripherals, and other essential supplies. We are dedicated to maintaining excellence, respect, and integrity in all our services.</div>
            <div className=" place-items-start"
            >
              <h1 className='text-2xl text-start justify-start  font-semibold text-yellow-400 mb-4 mt-4' >Our Values</h1>
              <div className="text-start text-xl text-gray-300">  <div className=" flex justify-start place-items-center gap-2    ">
                <TiTick className='text-amber-400 self-start' />Service Excellence</div>
                <div className=" flex justify-start place-items-center gap-2 text-xl">
                  <TiTick className='text-amber-400 self-start ' />Honesty & Integrity</div>
                <div className=" flex justify-start place-items-center gap-2">
                  <TiTick className='text-amber-400 self-start ' />Professionalism</div>
                <div className=" flex justify-start place-items-center gap-2">
                  <TiTick className='text-amber-400 self-start ' />Confidentiality</div>
                <div className=" flex justify-start place-items-center gap-2">
                  <TiTick className='text-amber-400 self-start ' />Passion for Innovation</div>
                <div className=" flex justify-start place-items-center gap-2">
                  <TiTick className='text-amber-400 self-start ' />Teamwork & Collaboration</div></div>

            </div>
          </div>
          <img src={img3} alt="" className='max-w-[300px] md:w-[250px] w-[220px] rounded rounded-3xl cursor-pointer hover:-translate-y-2 duration-500' />
        </div>
      </div>



      {/* Services section */}
      <div id='Services' className="  my-8 text-center scroll-mt-[120px] ">
        <h1 className='text-5xl font-semibold'>Our Services</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  p-4">
          {(items).map((item) => (
            <Card title={item.title} icon={item.icon} description={item.desc} />
          ))}
        </div>
      </div>

      {/* Contact us section */}

      <div id='Contact' className="text-5xl text-center font-semibold scroll-mt-[120px] ">Contact Us</div>

      <FormCard />




      <div style={{ backgroundColor: '#042b52' }} className="py-10 w-full text-white  flex flex-col items-center justify-center gap-10 relative bottom-0 left-0">

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center flex-wrap">
          {/* contact info and socials */}
          <div className="">
            <h2 className='text-2xl font-semibold mb-2'>Conatct Info</h2>
            <h2 className='flex place-items-center gap-2'> <PiPhone />+27 63 766 0739</h2>
            <h2 className='flex place-items-center gap-2' > <FaWhatsapp className='text-green-300' /> +27 63 766 0739</h2>
            <h2 className='flex place-items-center gap-2' > <MdEmail type='email' className='text-white' /> v33phaks@gmail.com</h2>
          </div>
          <div className="">
            <h2 className='text-2xl font-semibold mb-2'>Socials</h2>
            <div className="flex justify-evenly items-center gap-4 cursor-pointer">
              <FaFacebook  className='text-xl hover:scale-110 cursor-pointer '/>
              <FaTwitter className='text-xl hover:scale-110 cursor-pointer '/>
              <FaLinkedin className='text-xl hover:scale-110 cursor-pointer '/>
              <FaInstagram className='text-xl hover:scale-110 cursor-pointer '/>
            </div>
            <p></p>
          </div>
          
        </div>
        <div className=" ">
          <h1 className='text-center text-3xl  mb-4 font-bold'>Addresses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-amber-500">
            <p className='text-wrap'>Limpopo - Stand No 220, Gavaza Village<br />
              , Ward 28, Coblentz, 0772</p>

            <p>Gauteng - 5 Lilongwe Street,<br /> Vusumuzi, Tembisa, 1691</p>
            <p>Limpopo - 74 Freedom Dr,<br /> Seshego Sec B, 0742</p>
            <p>Mpumalanga - 5713 Mtuki Street<br /> Ackerville, Kwa-Guqa, 1039</p>
            <p>Gauteng - 39 Dr Monnakgotla Str<br /> Ga-Rankuwa Unit 7, 0208</p>
            <p>Gauteng - 25 Mhlanga Street<br /> Atteridgeville, 0006</p>
            <p>Gauteng - Miravaal AH, Vanderbilj Park<br /> Midvaal NU1, 1911</p>
            <p>Limpopo - P.O. Box 595<br /> Coblentz, 0772</p>
          </div>

        </div>

        <p><span>{'\u00a9'} {year} Powered by NewtonDev . All rights reserved.</span> Contact Us +27 63 5878465 </p>
      </div>
    </div >
  )
}

export default App
