import MinhaImagem from './igu.jpg'

export default function App() {
  return (
    <div>
      <h1>Meu app React</h1>
      <img src={MinhaImagem} alt="Minha Imagem" className="imagem-reduzida" />
    </div>
  );
}
