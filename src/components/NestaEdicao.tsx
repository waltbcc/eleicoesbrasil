import type { JSX } from "react";

function NestaEdicao(destaques: string | any[]) {
    // Dentro do seu componente:
    let blocks: JSX.Element[] = [];

    if (destaques && destaques.length > 0) {
        const item = destaques[0]; // Pegando o primeiro item enviado pelo backend

        for (let count = 1; count <= 4; count++) {
            const titulo = item[`destaque_${count}`];

            if (titulo) {
                blocks.push(
                    <div key={2*count} className="p-4">
                        <a
                            target="_blank"
                            className="text-white font-medium text-base tracking-normal outline-0 hover:text-white/90 transition-colors"
                            dangerouslySetInnerHTML={{ __html: titulo }}
                        />
                    </div>
                );

                //Não coloca o último traço
                if (count < 4) {
                    blocks.push(
                        <div key={2*count + 1} className="h-0.5 bg-white w-11/12 m-auto"></div>
                    );
                }
            }
        }
    }
    
    return (
        <div className="bg-(--verde-principal) mx-auto w-full max-w-sm py-2 h-full rounded-xl">
            <strong className="uppercase text-amber-50 text-center block text-lg tracking-wide">Destaques do dia</strong>
            {/* Renderiza automaticamente todos os blocos */}
            {blocks}
        </div>
    )
}

export default NestaEdicao