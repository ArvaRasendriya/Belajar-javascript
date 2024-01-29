var x = "25"; 
var y = "3.14";

var toNum = parseInt(x);
var foFloat = parseFloat(y);
var toSting = toNum.toString();
console.log(toSting + toSting); 

//fungsi
function jumlah(a, b) {
    return a + b;
}

//fungsi 
var kurang = function (a, b) {
    return a - b;
};

alert(jumlah(5, 20));
alert(kurang(25, 5));