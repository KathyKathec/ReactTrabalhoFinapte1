import React, { useState } from "react";
import "./styles.css";

export default function App2() {
  const [res, setResposta1] = useState("");
  const [res2, setResposta2] = useState("");
  const [per, setPer] = useState("");
  const [cont, setCont] = useState(0);
  const [cont2, setCont2] = useState(0);
  const [showContent, setShowContent] = useState(false); // Variable de estado para controlar la visibilidad

  function submitBtn(e) {
    e.preventDefault();
    setShowContent(true); // Mostrar el contenido después de enviar la enquete
  }

  return (
    <div className="App2">
      <h1>
        Bem vindo!
        <br />
        Crie aqui sua enquete
      </h1>

      <form method="post" onSubmit={submitBtn}>
        <label>
          Faça aquí sua pergunta:
          <input
            type="text"
            name="resposta1"
            value={per}
            onChange={(e) => setPer(e.target.value)}
          />
        </label>
        <br />
        <label>
          Resposta 1:
          <input
            type="text"
            name="resposta1"
            value={res}
            onChange={(e) => setResposta1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Resposta 2:
          <input
            type="text"
            value={res2}
            name="resposta2"
            onChange={(e) => setResposta2(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar enquete</button>
      </form>

      {showContent && (
        <>
          <hr />
          <h2 id="title">
            Sua enquete: <br /> {per}
          </h2>
          <button type="button" id="btnR" onClick={(e) => setCont2(cont2 + 1)}>
            {res2} Tem {cont2} votos
          </button>
          <button type="button" id="btnR2" onClick={(e) => setCont(cont + 1)}>
            {res} Tem {cont} votos
          </button>
        </>
      )}
    </div>
  );
}
