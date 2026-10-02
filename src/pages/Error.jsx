import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main className="px[5%] my-20 grow text-center flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-[#95ff00]">
        404
      </h2>
      <p className=" text-2xl font-bold mb-2 text-cyan-400">
        ops pagina nao encontrada
      </p>
      <p className="text-gray-400 mb-8 max-w-md">
        parece que voce se perdeu no mapa do jogo. A pagina que vc procura nao existe ou foi removida
      </p>
      <Link to="/" className="text-gray-400">voltar para o home</Link>
    </main>
  )
}

export default Error
