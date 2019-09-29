var fim = 3600;
setInterval("start()", 1000);

function start() {
    if (fim == 0) {
        document.getElementById('start').innerHTML;
        document.getElementById('q1').disabled = "Tempo Limite Atingido";
        document.getElementById('q2').disabled = "Tempo Limite Atingido";
    } else {
        var horas = fim--;
        var seg = horas % 60;
        var segs = horas / 60;
        var hora = segs % 60;

        var relogio = Math.trunc(hora) + ":" + Math.trunc(seg);

        document.getElementById("start").innerHTML = relogio;
    }
}

