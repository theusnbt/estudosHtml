function calcula(op){
    var resultado;

    let n1 = document.getElementById("box1").value;
    let n2 = document.getElementById("box2").value;

    if(isNaN(n1)){
        alert("O valor deve ser apenas números");
        document.getElementById("box1").value="";
        document.getElementById("box1").focus();
    }
    else if(isNaN(n2)){
        alert("O valor deve ser apenas números");
        document.getElementById("box2").value="";
        document.getElementById("box2").focus();
    }
    else{
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        if(op == "+")
            resultado = n1 + n2;
      
        else if(op == "-")
            resultado = n1 - n2;
        
        else if(op == "*")
            resultado = n1 * n2;
        
        else if(n2 == 0){
                alert("Não se pode dividir por zero"); 
                document.getElementById("box2").value = "";
                document.getElementById("result").value = "";
                document.getElementById("box2").focus();
                return;
        }
        else
                resultado = n1/n2;
       
        document.getElementById("result").value = resultado.toFixed(2);
    }
}

function limpar(){
    document.getElementById("box1").focus();
}
