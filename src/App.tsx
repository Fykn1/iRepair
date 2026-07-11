import { useState } from "react";
import { Header } from "./components/Header"
import { NewServiceCardInput } from "./components/NewServiceCardInput"
import { ServiceCard } from "./components/ServiceCard"

interface OrdemServico {
  nome: string;
  modelo: string;
  defeito: string;
  status: boolean;
}

export function App() {
  const [listaOS, setListaOS] = useState<OrdemServico[]>([]);

  function addNovaOS(dados: {nome: string; modelo: string; defeito: string; status: boolean}) {
    const novaOS: OrdemServico = {
      ...dados,
    };

    setListaOS([...listaOS, novaOS])
  }

  return (
    <>
      <Header />
      <div className="grid justify-center">
        <NewServiceCardInput onSalvar={addNovaOS} />
      </div>
      <div className="flex flex-wrap gap-2 m-5">
        {listaOS.map((os) => (
          <ServiceCard
            nome={os.nome} 
            modelo={os.modelo} 
            defeito={os.defeito} 
            status={os.status}
          />
        ))}
      </div>
    </>
  )
}
