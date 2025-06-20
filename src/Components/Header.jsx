export default function Header() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white  flex flex-col items-center text-center space-y-4 font-medium">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQEyq796dgZxQQ/profile-displayphoto-shrink_800_800/B56ZdF8vCrGoAc-/0/1749225239468?e=1755734400&v=beta&t=CGPkBhkhZWuwrJ_ae7VwyH-9UuGaJbZFOAb6DnYvLuI"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
      />

      <h1 className="text-2xl font-semibold">
        Name: <span className="text-blue-600">Aaditya Sigdel</span>
      </h1>
      <p className="text-gray-700 text-lg">Role: <span className="text-green-600">MERN Stack Developer</span></p>

      <div className="space-y-2 text-gray-700">
        <p>
          <i className="fa-solid fa-envelope text-blue-500 mr-2"></i>
          <span>Email:</span> aadityasigdel@gmail.com
        </p>
        <p>
          <i className="fa-solid fa-phone text-green-500 mr-2"></i>
          <span>Contact:</span> 9815874706
        </p>
        <p>
          <i className="fa-solid fa-location-dot text-red-500 mr-2"></i>
          <span>Address:</span> Sundarharaincha -6, Morang, Nepal
        </p>
      </div>

      <div className="flex space-x-6 pt-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
          <i className="fa-brands fa-linkedin text-xl"></i>
          LinkedIn
        </a>
        <a href="#" className="text-gray-800 hover:text-black flex items-center gap-2">
          <i className="fa-brands fa-github text-xl"></i>
          GitHub
        </a>
      </div>
    </div>
  );
}
