import Input from "../components/input"
import Logo from '../assets/images/Logo_Sistemas.png'

function Login() {
  return (
    <div className="sm:flex h-screen align-middle">
      <div className="w-full sm:w-6/12 h-full">
        <div className="flex justify-end h-0.5/6">
          <div className="flex space-x-3 p-10">
            <div className="text-xl">No tines una Cuenta?</div>
            <div className="text-xl underline font-semibold text-[#BD0011]">Registrate</div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-5/6 m-[-40px]">
          <div className="flex justify-center align-middle">
            <div className="w-4/6">
              <div className="font-bold text-4xl text-center mb-12">Iniciar Sesión</div>
              <div className="space-y-8">
                <div><Input label="Usuario"></Input></div>
                <div><Input label="Contraseña" type="password"></Input></div>
                <div className="text-lg font-semibold text-end text-[#BD0011]">Recuperar contraseña</div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-[#BD0011] hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96 h-14">Iniciar Sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#BD0011] h-screen sm:w-6/12 w-full flex align-middle justify-center items-center">
        <img src={Logo} className="h-[400px]"></img>
      </div>
    </div>
  )
}

export default Login