import portfolioPic from "../assets/portfolio-pic.jpg";
import { Element } from 'react-scroll';


const Intro = () => {
  return (
    <Element name="intro" className="flex flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-[#f4f4f4] flex flex-col justify-center items-center p-10">
        <img
          src={portfolioPic}
          alt="Alice Lin"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4">Alice Lin</h1>
        <p className="text-lg text-gray-700">(she/her)</p>
        <p className="text-md text-gray-600">Software Engineer</p>

        <a className="bg-black text-white px-6 py-2 mt-4 rounded hover:bg-gray-800" href="mailto:lin.alice72@gmail.com">
          Email me
        </a>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 text-gray-600">
          {/* <a href="#"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="#"><i className="fab fa-twitter text-2xl"></i></a>
          <a href="#"><i className="fab fa-facebook text-2xl"></i></a>
          <a href="#"><i className="fab fa-linkedin text-2xl"></i></a> */}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-700 text-center max-w-md">
          I am a tech-savvy individual with a Bachelor's degree in Software Development,
          seeking employment as a mobile game developer. I am passionate about consistently
          advancing my knowledge and skills. I have attended multiple seminars and boot camps
          on coding and game development.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full md:w-auto">
            Resume
          </button>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full md:w-auto">
            Portfolio
          </button>
        </div>
      </div>
    </Element >
  )
}

export default Intro