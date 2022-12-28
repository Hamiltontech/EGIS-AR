import React from "react";

const InfoSection = () => {
  return (
    <div className="">
      <div className=" w-full flex justify-center mt-20" >
        <img
          src="https://geo1.esmrts.com/wp-content/uploads/2021/05/mm.png"
          height={100}
          width={300}
        />
      </div>
      <div className="w-full mt-5 justify-center  text-center ">
        <p dir="rtl" className="px-40">سنكون أكثر من سعداء لتقديم المساعدة لك.
        </p>
        <p dir="rtl">هذا النموذج مرتبط مع مركز إدارة البنية التحتية المتقدمة (AIM) التابع لإدارة مركز نظم المعلومات</p>
        <p dir="rtl">سيتم مراجعة ملاحظتك من قبل متخصص سيتصل بك باستخدام معلومات الاتصال التي قمت بتضمينها أدناه.</p>
      </div>
      <div className="grid w-full px-40 mt-10 text-right">
        <label className="text-gray-500 ">الاسم الكامل</label>
        <input className="border-gray-300 border outline-none py-2 text-right" />
      </div>
      <div className="flex w-full px-40 mt-5 gap-5">
        <div className="grid w-[50%]">
        <label className="text-gray-500 text-right">البريد الالكتروني</label>
        <input className="border-gray-300 border outline-none py-2 text-right" type="email"/>
        </div>
        <div className="grid w-[50%]">
        <label className="text-gray-500 text-right">رقم الهاتف</label>
        <input className="border-gray-300 border outline-none py-2 text-right" type="tel"/>
        </div>
      </div>
      <div className="grid w-full px-40 mt-5">
        <label className="text-gray-500 text-right">نوع المشكلة</label>
        <select className="border-gray-300 border outline-none py-2 text-gray-500 text-right">
          <option>معلومات خاطئة</option>
          <option>مشكلة فنية</option>
          <option>مشكلة في النظام</option>
          <option>اقتراحات</option>
          <option>غير ذلك</option>
        </select>
      </div>
        <div className="grid px-40 mt-5">
        <label className="text-gray-500 text-right">ضع المحتوى هنا</label>
        <textarea className="border-gray-300 border outline-none py-10 text-right" type="text"/>
      </div>
      <div className="grid px-40 mt-10">

        <button className="border-gray-300 border outline-none py-2 bg-[#162641] text-white hover:bg-[#162641]/80 ease-out duration-200" type="text">أرسل</button>
      </div>
    </div>
  );
};

export default InfoSection;
