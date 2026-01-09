import type { ReactElement } from "react";

interface AuditoriaItem {
  titulo_1?: string
  texto_1?: string
  titulo_2?: string
  texto_2?: string
  titulo_3?: string
  texto_3?: string
  titulo_4?: string
  texto_4?: string
  titulo_5?: string
  texto_5?: string
  [key: string]: any // Para permitir acesso dinâmico às propriedades
}

interface TextosProps {
  auditoria: AuditoriaItem[]
}

function Textos({ auditoria }: TextosProps) {
  // Dentro do seu componente:
  const blocks: ReactElement[] = []

  if (auditoria && auditoria.length > 0) {
    const item = auditoria[0] // Pegando o primeiro item enviado pelo backend

    for (let count = 1; count <= 5; count++) {
      const titulo = item[`titulo_${count}`]
      const texto = item[`texto_${count}`]

      if (titulo && texto) {
        blocks.push(
          <div key={count} className='flex flex-col w-full gap-2'>
            <h3
              className='font-bold text-blue-900 text-lg lg:text-xl tracking-normal lg:tracking-wide mb-2'
              dangerouslySetInnerHTML={{ __html: titulo }}
            />

            <div className='flex flex-col gap-4'>
              <p
                className='font-normal tracking-wide text-(--azul-paragrafo) text-sm md:text-base'
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            </div>
          </div>,
        )
      }
    }
  }

  return (
    <section className='w-full mx-auto'>
      <div className='flex flex-col gap-4 lg:gap-5'>
        {/* Renderiza automaticamente todos os blocos */}
        {blocks}
      </div>
    </section>
  )
}

export default Textos
