function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timer(startDate) {
    const start = new Date(startDate.replace(/-/g, '/'));

    while (true) {
        let now = new Date();
        let totalSeconds = Math.floor((now - start) / 1000);
        let minutos = Math.floor((totalSeconds / 60), 0);
        let horas = Math.floor((totalSeconds / 3600), 0);
        let dias = Math.floor((horas / 24), 0);
        let semanas = Math.floor((dias / 7), 0);
        let meses = Math.floor((dias / 30), 0);
        let anos = Math.floor((dias / 365), 0);


        //Exibe o timer (TROCA PRO SEU METODO)

        document.getElementById('anos').innerHTML =  anos;
        document.getElementById('meses').innerHTML = meses;
        document.getElementById('semanas').innerHTML = semanas;
        document.getElementById('dias').innerHTML = dias;
        document.getElementById('horas').innerHTML = horas;
        document.getElementById('minutos').innerHTML = minutos;

        await timeout(1000);
    }
}
//Rodando a função com a data de inicio.
timer("2024-02-13 14:56:30");