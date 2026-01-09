function formatarDataLongaBR(data = new Date()) {
    const formatador = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    // Exemplo: "03 de dezembro de 2025"
    const formatada = formatador.format(data);

    // Garantir mês em minúsculas
    return formatada.replace(
        / de ([A-Za-zÀ-ÖØ-öø-ÿ]+)/,
        (match, mes) => ` de ${mes.toLowerCase()}`
    );
}

export default formatarDataLongaBR;  