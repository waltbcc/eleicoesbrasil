
import NestaEdicao from "./NestaEdicao.tsx"
import Textos from "./Textos.tsx"
import CapaJornais from "./CapaJornais.tsx"

function Main(auditoria, capas) {


  return (
    <main className="p-4">
      <div className="mx-auto max-w-7xl flex gap-10 flex-col md:flex-row">
        <section className="max-w-sm w-full h-full flex flex-col gap-10">
        {NestaEdicao(auditoria)}
        {CapaJornais(capas)}
        </section>

        {Textos(auditoria)}

      </div>
    </main >
  )
}

export default Main;  