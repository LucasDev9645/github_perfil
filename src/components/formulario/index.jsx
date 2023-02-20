import React from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = React.useState(0);
  let [materiaB, setMateriaB] = React.useState(0);
  let [materiaC, setMateriaC] = React.useState(0);
  let [nome, setNome] = React.useState("");

  React.useEffect(() => {
    console.log("O compronente iniciou");
    return () => {
      console.log("O componente finalizou");
    };
  }, []);

  const alteraNome = (e) => setNome(e.target.value);

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;
    if (media >= 7) {
      return <p>Olá {nome}, Você foi aprovado</p>;
    } else {
      return <p>Olá {nome}, Você não foi aprovado</p>;
    }
  };

  return (
    <form>
      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={({ target }) => setMateriaC(parseInt(target.value))}
      />
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
