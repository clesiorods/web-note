import { useEffect } from 'react';

export function Teste() {
  useEffect(() => {
    
    function handleResize() {
      // Obtém a largura da área de conteúdo da janela
      const larguraTela = window.innerWidth;
      console.log('Largura da tela: ' + larguraTela);
    }

    // Adiciona o listener de evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Remove o listener de evento de redimensionamento na desmontagem
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Seu componente aqui */}
    </div>
  );
}
