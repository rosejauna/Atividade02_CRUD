//Objetivo é criar uma função de quebrar a linha - function component

import React from 'react';

export default function Labelln({texto}){

  return(
    <>

    {texto} <br/> 

    </>
    
  );
}


/* 

renderização contínua dos componentes,
State == variável (exclusiva do componente) 
mantém o conteúdo entre as renderizações.


*/