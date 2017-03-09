function myAddition() {
    var addOne = document.getElementById("addOne").value;
    var addTwo = document.getElementById("addTwo").value;
    var total = Number(addOne) + Number(addTwo);
    document.getElementById("totalAddition").innerHTML = total;
}

function mySubtraction(){
    var subOne = document.getElementById("subOne").value;
    var subTwo = document.getElementById("subTwo").value;
    var subTotal = Number(subOne) - Number(subTwo);
    document.getElementById("totalSubtraction").innerHTML = subTotal;
}

function myDivision(){
    var divOne = document.getElementById("divOne").value;
    var divTwo = document.getElementById("divTwo").value;
    var divTotal = Number(divOne) / Number(divTwo);
    document.getElementById("totalDivision").innerHTML = divTotal;
}