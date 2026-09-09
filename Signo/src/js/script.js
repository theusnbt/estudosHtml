function calcular() {
    var d_ani = parseInt(document.getElementById("dia").value);
    var m_ani = parseInt(document.getElementById("mes").value);
    var a_ani = parseInt(document.getElementById("ano").value);


    var dataNasc = new Date(a_ani, m_ani - 1, d_ani);
    var hoje = new Date();

    var nomeMes = "";
    if (m_ani == 1) nomeMes = "Janeiro";
    else if (m_ani == 2) nomeMes = "Fevereiro";
    else if (m_ani == 3) nomeMes = "Março";
    else if (m_ani == 4) nomeMes = "Abril";
    else if (m_ani == 5) nomeMes = "Maio";
    else if (m_ani == 6) nomeMes = "Junho";
    else if (m_ani == 7) nomeMes = "Julho";
    else if (m_ani == 8) nomeMes = "Agosto";
    else if (m_ani == 9) nomeMes = "Setembro";
    else if (m_ani == 10) nomeMes = "Outubro";
    else if (m_ani == 11) nomeMes = "Novembro";
    else if (m_ani == 12) nomeMes = "Dezembro";

    document.getElementById("resMes").value = nomeMes;


    var numSemana = dataNasc.getDay();
    var nomeSemana = "";

    if (numSemana == 0) nomeSemana = "um domingo";
    else if (numSemana == 1) nomeSemana = "uma segunda-feira";
    else if (numSemana == 2) nomeSemana = "uma terça-feira";
    else if (numSemana == 3) nomeSemana = "uma quarta-feira";
    else if (numSemana == 4) nomeSemana = "uma quinta-feira";
    else if (numSemana == 5) nomeSemana = "uma sexta-feira";
    else if (numSemana == 6) nomeSemana = "um sábado";

    document.getElementById("resSemana").value = nomeSemana;

    var idade = hoje.getFullYear() - dataNasc.getFullYear();

    if (idade < 0) {
        document.getElementById("resIdade").value = "Ano inválido";
    } else {
        document.getElementById("resIdade").value = idade;
    }

    if (((d_ani >= 22) && (m_ani == 12)) || ((d_ani <= 20) && (m_ani == 1))) 
        document.images["signo"].src = "src/assets/img/capricornio.jpg";

    else if (((d_ani >= 21) && (m_ani == 1)) || ((d_ani <= 19) && (m_ani == 2))) 
        document.images["signo"].src = "src/assets/img/aquario.jpg";

    else if (((d_ani >= 20) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3))) 
        document.images["signo"].src = "src/assets/img/peixes.jpg";
    
    else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 20) && (m_ani == 4))) 
        document.images["signo"].src = "src/assets/img/aries.jpg";

    else if (((d_ani >= 21) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5))) 
        document.images["signo"].src = "src/assets/img/touro.pngq";
    
    else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6))) 
        document.images["signo"].src = "src/assets/img/gemeos.jpg";
    
    else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7))) 
        document.images["signo"].src = "src/assets/img/cancer.jpg";

    else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8))) 
        document.images["signo"].src = "src/assets/img/leao.jpg";
    
    else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9))) 
        document.images["signo"].src = "src/assets/img/virgem.jpg";
    
    else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10))) 
        document.images["signo"].src = "src/assets/img/libra.jpg";
    
    else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11))) 
        document.images["signo"].src = "src/assets/img/escorpiao.jpg";
    
    else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12))) 
        document.images["signo"].src = "src/assets/img/sagitario.jpg";
}

function limpar() {
    document.images["signo"].src = "";
    document.getElementById("dia").focus();
}