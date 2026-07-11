import { Header } from "./components/Header"
import { ServiceCard } from "./components/ServiceCard"

export function App() {
  return (
    <>
      <Header />
      <ServiceCard nome="TesteNome" modelo="TesteModelo" defeito="TesteDefeito" status={true}/>
    </>
  )
}
