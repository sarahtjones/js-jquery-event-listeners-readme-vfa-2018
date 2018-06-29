//define functions here

function getIt() {
  $('p').on('click', function(){
    window.alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key){
    if (key.which == 71){
      window.alert('G was pressed');
    }
  })
}
$(document).ready(function(){

//+ Define a function `submitIt` that does not accept a parameter.
//The function should bind a `submit` event to the form that alerts `"Your form is going to be submitted now."`.
function submitIt() {
  $('input').on('submit', function(){
    window.alert('Your form is going to be submitted now.');
  })
}
// call functions here

});
