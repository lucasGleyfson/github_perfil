import ReposList from "./componentes/ReposList"
import Perfil from "./componentes/Perfil"

function App() {
  return (
    <>
      <Perfil nomeUsuario="lucasGleyfson" />
      <ReposList nomeUsuario="lucasGleyfson" />
    </>
  )
}

export default App
