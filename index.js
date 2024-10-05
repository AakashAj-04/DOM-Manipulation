// Basic accessing  DOM .
document.getElementById("demo").innerHTML = "Aakash";
function changeColor(){
    document.getElementById("demo").style.color = "blue"
}

//Using Class name 
const x = document.getElementsByClassName('title')
const y = document.getElementById('show').innerHTML = "Selected Data :-" + x[0].innerHTML;

// HTML object
const f1 = document.forms['frm1'];
text = '';
for(let i = 0;i<f1.length;i++){
    text+= f1.elements[i].value + "<br>";
}
document.getElementById('formData').innerHTML = text;