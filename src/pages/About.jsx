import assets from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div className="p-4">
      <div className="text-2xl text-center text-gray-500 pt-10">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>
      <div className="flex md:flex-row flex-col gap-12 my-10">
        <img src={assets.about_image} alt="About Us" className="w-full md:max-w-[360px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700">
          <p>
            Welcome to Amrutam, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At Amrutam, we understand the challenges individuals face when it comes to scheduling doctor appointments 
            and managing their health records.
          </p>
          <p>
            Amrutam is committed to excellence in healthcare technology. We continuously strive to enhance our platform, 
            integrating the latest advancements to improve user experience and deliver superior service. Whether 
            you’re booking your first appointment or managing ongoing care, Amrutam is here to support you every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Amrutam is to create a seamless healthcare experience for every user. We aim to bridge 
            the gap between patients and healthcare providers, making it easier for you to access the care you need,
            when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
