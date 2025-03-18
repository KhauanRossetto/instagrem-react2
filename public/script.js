import React, { useState } from "react";

function Post() {
  // Estado para controlar o ícone favorito
  const [favorito, setFavorito] = useState(false);

  // Função para alternar o estado do favorito
  const toggleFavorito = () => {
    setFavorito(!favorito); // Alterna entre favorito e não favorito
  };

  return (
    <div className="post">
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {/* Ícone de favorito que muda dinamicamente */}
            <ion-icon
              name="bookmark-outline"
              className={`favorito ${favorito ? "amarelo" : ""}`} // Adiciona a classe "amarelo" quando favorito
              onClick={toggleFavorito} // Alterna o estado ao clicar
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
