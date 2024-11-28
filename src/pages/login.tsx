import Input from "../components/input";
import Logo from "../assets/images/Logo_Sistemas.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

function Login() {

  const navigate = useNavigate();

  const [fields, setFields] = useState({
    email : '',
    password : ''
  });

  const onSubmit = () => {
    alert(fields)
  };

  const disableButton = () => {
    return (fields.email.length == 0 || fields.password.length == 0);
  }

  return (
    <>
      {/* Contenido */}
      <div className="flex justify-end h-0.5/6">
        <div className="flex space-x-3 p-10">
          <div className="text-xl">No tines una Cuenta?</div>
          <div className="text-xl underline font-semibold text-[#BD0011] cursor-pointer" onClick={() => navigate('/register')}>
            Registrate
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-5/6 m-[-40px]">
        <form className="flex justify-center align-middle" onSubmit={(e) => {e.preventDefault(); onSubmit();} }>
          <div className="w-4/6">
            <div className="font-bold text-4xl text-center mb-12">
              Iniciar Sesión
            </div>
            <div className="space-y-8">
              <div>
                <Input label="Usuario" type="email" value={fields.email} onChange={(e) => setFields({...fields, ['email']: e.currentTarget.value})}></Input>
              </div>
              <div>
                <Input label="Contraseña" type="password" value={fields.password} onChange={(e) => setFields({...fields, ['password']: e.currentTarget.value})}></Input>
              </div>
              <div className="text-lg font-semibold text-end text-[#BD0011]">
                Recuperar contraseña
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button text="Iniciar Sesión" disabled={disableButton()} type="submit"></Button>
            </div>
          </div>
        </form>
      </div>
      {/* ***** */}
    </>
  );
}

export default Login;
