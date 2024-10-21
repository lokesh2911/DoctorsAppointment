import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import assets from "../assets/assets_frontend/assets";
import RelativeDoctors from "../Components/RelativeDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDoctorsInfo = () => {
    const doctorsInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(doctorsInfo);
    console.log(doctorsInfo);
  };

  const getAvailableSlots = () => {
    let today = new Date();
    let slots = [];

    for (let i = 0; i < 10; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots); // Push the collected time slots for each day.
    }
    setDocSlots(slots); // Set all the slots at once after collecting.
  };

  useEffect(() => {
    if (doctors.length) {
      fetchDoctorsInfo(); // Fetch doctor info only after doctors data is ready.
    }
  }, [doctors,docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docId]);

  return docInfo && (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="" />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg py-7 p-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
          <p className="flex items-center gap text-gray-900 text-2xl font-medium">
            {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center text-gray-600 mt-1 gap-2 text-sm">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 text-xs rounded-full border">{docInfo.experience}</button>
          </div>
          <div>
            <p className="flex items-center text-gray-900 font-medium gap-1 mt-3 text-sm ">About <img src={assets.info_icon} alt="" /></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee: $<span className="text-gray-600">{docInfo.fees}</span>
          </p>
        </div>
      </div>
      <div className="sm:ml-72 sm:pl-4 mt-4  font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            docSlots.length > 0 && docSlots.map((daySlots, index) => (
              <div 
                onClick={()=>setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary text-white':'border border-gray-200'}`} 
                key={index}
                >
                <p>{daySlots[0] && daysOfWeek[daySlots[0].datetime.getDay()]}</p>
                <p>{daySlots[0] && daySlots[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col gap-4 w-full mt-4">
            {/* Morning Slots (9:00 AM - 12:00 PM) */}
            <div>
              <p className="font-medium text-gray-700">Morning</p>
              <div className="flex items-center gap-3 overflow-x-scroll">
                {
                  docSlots.length && docSlots[slotIndex].filter(item => item.datetime.getHours() >= 9 && item.datetime.getHours() < 12).map((item, index) => (
                    <p 
                      onClick={() => setSlotTime(item.time)}
                      className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} 
                      key={index}>
                      {item.time.toLowerCase()}
                    </p>
                  ))
                }
              </div>
            </div>

            {/* Afternoon Slots (1:30 PM - 4:30 PM) */}
            <div>
              <p className="font-medium text-gray-700">Afternoon</p>
              <div className="flex items-center gap-3 overflow-x-scroll">
                {
                  docSlots.length && docSlots[slotIndex].filter(item => (
                    item.datetime.getHours() === 13 && item.datetime.getMinutes() >= 30 || 
                    (item.datetime.getHours() > 13 && item.datetime.getHours() < 17 && item.datetime.getHours() < 17)
                  )).map((item, index) => (
                    <p 
                      onClick={() => setSlotTime(item.time)}
                      className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} 
                      key={index}>
                      {item.time.toLowerCase()}
                    </p>
                  ))
                }
              </div>
            </div>

            {/* Evening Slots (6:00 PM - 9:00 PM) */}
            <div>
              <p className="font-medium text-gray-700">Evening</p>
              <div className="flex items-center gap-3 overflow-x-scroll">
                {
                  docSlots.length && docSlots[slotIndex].filter(item => item.datetime.getHours() >= 18 && item.datetime.getHours() < 21).map((item, index) => (
                    <p 
                      onClick={() => setSlotTime(item.time)}
                      className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} 
                      key={index}>
                      {item.time.toLowerCase()}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
       <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book Appointment</button>
      </div>
      <RelativeDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
}

export default Appointments;
