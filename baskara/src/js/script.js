function calc(){
    let A = parseFloat(document.getElementById("box1"));
    let B = parseFloat(document.getElementById("box2"));
    let C = parseFloat(document.getElementById("box3"));
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
        delta = (B*B) - (4*A*C);
        document.getElementById("deltaChip").value = delta.toFixed(5);
    }
    
}

function limpar(){
    document.getElementById("box1").focus();
}

calc();