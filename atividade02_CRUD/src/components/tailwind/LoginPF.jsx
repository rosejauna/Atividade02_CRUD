import React from "react";

import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";
import Button from "./Button.jsx";
import InputText from "./InputText.jsx";
import InputPassword from "./InputPassword.jsx";


function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-80">
        <LabelTitle texto="Cadastro de Pessoas Física" />
        <div className="mb-4 flex flex-col">
          <Label texto="Nome:" />
          <InputText placeholder="Nome Completo" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="CPF:" />
          <InputPassword placeholder="000.000.000-00" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Email:" />
          <InputPassword placeholder="exemplo@aqui.com" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Telefone:" />
          <InputPassword placeholder="(00) 0000-0000" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="CEP" />
          <InputPassword placeholder="72.000.000" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Endereço" />
          <InputPassword placeholder="(00) 0000-0000" />
        </div>

        <Button valor="Enviar" />
      </form>
    </div>
  );
}


export default Login;

