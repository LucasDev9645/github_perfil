import React from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] =
    React.useState(true);
  const [nomeUsuario, setNomeUsuario] = React.useState("");
  return (
    <>
      <div className="containerInput">
        <h1 className="tituloInicial">Seus Repositórios do GitHub</h1>
        <input
          placeholder="Digite seu usuário"
          className="inputInicial"
          type="text"
          onBlur={(e) => setNomeUsuario(e.target.value)}
        />
      </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && <Formulario />}

      <button
       onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}
        type="button"
      >
        Toggle Form
      </button> */}
    </>
  );
}

export default App;
