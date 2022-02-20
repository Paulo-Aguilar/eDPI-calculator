
// const edpi = document.getElementById("edpi");

function calculator (){
    const mouse = parseFloat(document.getElementById("mouse").value);
    const sensitivity = parseFloat(document.getElementById("sensitivity").value); 
    const game = document.getElementById('game').value;

    document.getElementById('edpi').value = mouse * sensitivity;
   

}