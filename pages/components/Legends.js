import React from 'react'
import { FaMapMarkerAlt, FaGripLinesVertical, FaArrowUp } from 'react-icons/fa'
import {BsCircleFill, BsSquareFill} from 'react-icons/bs'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Legends = () => {
    return (
        <div className="bg-[#162641] flex justify-evenly p-3 text-white text-xs legends lg:px-60" >
            <div className="lg:flex justify-center px-2">
                <p className="lg:mx-1">محطات</p>
                <FaMapMarkerAlt size={20} className="text-blue-500" />
            </div>

            <div className="lg:flex justify-center px-2">
                <p className="lg:mx-1 ">مشاريع إنشائية</p>
                <FaMapMarkerAlt size={20} className="text-red-600 " />
            </div>

            <div className="lg:flex justify-center px-2">
                <p className="lg:mx-1">أنابيب</p>
                <FaGripLinesVertical size={20} className="text-blue-400" />
            </div>

            <div className="lg:flex justify-center px-2 ">
                <p className="lg:mx-1 ">مناهيل</p>
                <BsCircleFill size={20} className="text-gray-200" />
            </div>

            <div className="lg:flex justify-center px-2">
                <p className="lg:mx-1">
إتجاه التدفق</p>
                <FaArrowUp size={20} className="text-orange-400" />
            </div>

            <div className="lg:flex justify-center px-2">
            <p className="lg:mx-1"> الوصلات المنزلية</p>
                <BsSquareFill size={20} className="text-orange-400" />
                
            </div>
        </div>
    )
}

export default Legends