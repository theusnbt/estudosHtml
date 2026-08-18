function calc(){
    let A = document.getElementById("box1").value;
    let B = document.getElementById("box2").value;
    let C = document.getElementById("box3").value;
    let delta;

    if(A === "" || A === 0 || isNaN(A)){
        alert("O valor deve ser apenas números");
        document.getElementById("box1").value="";
        document.getElementById("box1").focus();
    }
    else if(B === "" ||isNaN(B)){
        alert("O valor deve ser apenas números");
        document.getElementById("box2").value="";
        document.getElementById("box2").focus();
    }
    else if(C === "" || isNaN(C)){
        alert("O valor deve ser apenas números");
        document.getElementById("box3").value="";
        document.getElementById("box3").focus();
    }
    else{
        A = parseFloat(A);
        B = parseFloat(B);
        C = parseFloat(C);
        delta = (B*B) - (4*A*C);
        document.getElementById("deltaChip").textContent="Δ = "+delta.toFixed(2);

        if(delta < 0){
            document.getElementById("raiz1").value="Não há raizes inteiras";
            document.getElementById("raiz2").value="Não há raizes inteiras";
        }
        else{
            let x1 = ((-B + Math.sqrt(delta)) / (2 * A)).toFixed(2);
            let x2 = ((-B + Math.sqrt(delta)) / (2 * A)).toFixed(2);
            document.getElementById("raiz1").value=x1;
            document.getElementById("raiz2").value=x2;
        }

    }
    
}

function limpar(){
    document.getElementById("box1").focus();
}

calc();