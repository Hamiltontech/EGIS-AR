import React from 'react'
import arabic from '../../public/assets/arabic.png'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({setShow, show, setAbout, about, info, setTech, tech}) => {
  return (
    <div className={about?'hidden' : info? 'hidden' :tech? "hidden" : "flex bg-[#162641] w-full p-2 justify-between header-sys"}>
    
      <div className='lg:flex justify-between gap-10 text-white mr-10  hidden font-tajwal'>
      <button onClick={()=>setShow(!show)}><AiOutlineMenu size={25} className="text-white mt-1 ml-4"/></button>
     <button onClick={()=>setAbout(true)} className='cursor-pointer hover:text-white/40 ease-in-out duration-150'>عن النظام</button>
      <button onClick={()=>setTech(true)} className='cursor-pointer hover:text-white/40 ease-in-out duration-150'>الوصف التقني</button>
      </div>
      <div className='float-right'>
        <Image src={arabic} alt="logo" width={220} layout="fixed" height={100}/>
      </div>
    </div>
  )
}

export default Header
