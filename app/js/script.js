//MODAL DEBITEUR
var btnAddUsers = document.getElementById('btnAddUsers');
var modal = document.getElementById('myModal');
var span = document.getElementById('close1');
var submit = document.getElementById('submit');

btnAddUsers.onclick = function () {
    modal.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
span.onclick = function () {
    modal.style.display = "none";
}
submit.onclick = function () {
    modal.style.display = "none";
}

//MODAL GROUPE
var btnAddGroups = document.getElementById('btnAddGroups');
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementById('close2');
var submit2 = document.getElementById('submit2');

btnAddGroups.onclick = function () {
    modal2.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
span2.onclick = function () {
    modal2.style.display = "none";
}
submit2.onclick = function () {
    modal2.style.display = "none";
}



//SELECT BOX USERS
$(".dropdown dt a").on('click', function() {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function() {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function() {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
    title = $(this).val() + ",";

  if ($(this).is(':checked')) {
    var html = '<span title="' + title + '">' + title + '</span>';
    $('.multiSel').append(html);
    $(".hida").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida");
    $('.dropdown dt a').append(ret);

  }
});