
function calculator (){
    const mouse = parseFloat(document.getElementById("mouse").value);
    const sensitivity = parseFloat(document.getElementById("sensitivity").value); 

    document.getElementById('edpi').value = mouse * sensitivity;

    document.getElementById('submit').style.background = "#212529";

}   
