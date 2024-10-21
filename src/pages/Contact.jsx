import assets from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="p-4">
      <div className="text-2xl text-center text-gray-500 pt-10">
        <p>
          CONTACT <span className="text-gray-800 font-semibold">US</span>
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row my-10 gap-10 mb-28">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg font-semibold text-gray-600">Our Hospital</h2>
          <p className="text-gray-500">
            Gachibowli, Hyderabad <br /> Telangana, India
          </p>
          <p className="text-gray-500">
            Mobile: <a href="tel:+911234567890" className="text-blue-600">+91 1234567890</a> <br />
            Email: <a href="mailto:amrutamhospital@gmail.com" className="text-blue-600">amrutamhospital@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
