//MODAL DEBITEUR
var btnAddUsers = document.getElementById('btnAddUsers');
var modal = document.getElementById('myModal');
var span = document.getElementById('close1');
var submit = document.getElementById("submit");

btnAddUsers.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
span.onclick = function() {
    modal.style.display = "none";
}
submit.onclick = function() {
    modal.style.display = "none";
}


//MODAL GROUPE
var btnAddGroups = document.getElementById("btnAddGroups");
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementById('close2');
var submit2 = document.getElementById("submit2");

btnAddGroups.onclick = function() {
    modal2.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
span2.onclick = function() {
    modal2.style.display = "none";
}
submit2.onclick = function() {
    modal2.style.display = "none";
}