import { useState } from "react"
import assets from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData,setUserData]=useState({
    name:'Lokesh Pasam',
    image:assets.profile_pic,
    email:'lokesh200@gmail.com',
    phone:'9618625679',
    gender:'Male',
    DOB:"2001-11-29",
    BloodGroup:'O+ve',

  });
const [isEdit,setIsEdit]=useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt=""/>
      {
        isEdit
        ? <input className="bg-gray-50 font-medium text-3xl max-w-60 mt-4" type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))}/>
        : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 mt-3 underline">Contact Information</p>
        <div className="grid grid-cols-[1fr_4fr] gap-y-0.5  mt-3 text-neutral-700">
          <p className="font-medium">Email id  :</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone   :</p>
          {
            isEdit
            ? <input className="bg-gray-100 max-w-32" type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))}/>
            : <p className="text-blue-400">{userData.phone}</p>
          }
        </div>
      </div>
      <div >
        <p className="text-neutral-500 mt-3 underline">Basic Information</p>
        <div className="grid grid-cols-[1fr_4fr] gap-y-0.5  mt-3 text-neutral-700"> 
          <p className="font-medium">Gender:</p>
          {
            isEdit
            ? <select className="max-w-20 bg-gray-100" onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            : <p className="text-gray-400">{userData.gender}</p>
          }
          <p className="font-medium">BirthDay:</p>
          {
            isEdit
            ? <input className="max-w-28 bg-gray-100" type="date" value={userData.DOB} onChange={e=>setUserData(prev=>({...prev,DOB:e.target.value}))}/>
            : <p className="text-gray-400">{userData.DOB}</p>
          }
          <p className="font-medium">Blood Group:</p>
          {
            isEdit
            ? <input className="bg-gray-100 max-w-20" type="text" value={userData.BloodGroup} onChange={e=>setUserData(prev=>({...prev,BloodGroup:e.target.value}))}/>
            : <p className="text-gray-400">{userData.BloodGroup}</p>
          }
        </div>
      </div>
      <div className="mt-10">
        {
          isEdit 
          ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(false)}>Save Information</button>
          :<button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
