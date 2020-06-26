$(document).ready(function () {
  $('#button').click(function () {
    let name = document.querySelector('#name');
    let response = document.querySelector('#response');
    let tec = document.querySelector('#tec');
    let firstName = name.value.split(' ', 1);
    $('#ask').hide();
    response.innerHTML = `<p>Muito prazer em te conhecer, ${firstName}! Espero que você goste do meu currículo. Estou a disposição para o esclarecimento de qualquer dúvida</p>`;
    if (firstName !== ' ') {
      tec.innerHTML = `<p>${firstName}, para ver os detalhes de quais são meus conhecimentos específicos sobre
      determinada tecnologia, basta clicar sobre ela</p>`;
    }
  });
  $('#html').click(function () {
    $('#html1').fadeToggle(500);
  });
  $('#css').click(function () {
    $('#css1').fadeToggle(500);
  });
  $('#js').click(function () {
    $('#js1').fadeToggle(500);
  });
  $('#java').click(function () {
    $('#java1').fadeToggle(500);
  });
  $('#so').click(function () {
    $('#so1').fadeToggle(500);
  });
  $('#ide').click(function () {
    $('#ide1').fadeToggle(500);
  });
  $('#editores').click(function () {
    $('#editores1').fadeToggle(500);
  });
  $('#office').click(function () {
    $('#office1').fadeToggle(500);
  });
  $('#hardware').click(function () {
    $('#hardware1').fadeToggle(500);
  });
  $('#bd').click(function () {
    $('#bd1').fadeToggle(500);
  });
  $('#anjos').click(function () {
    $('#anjos1').fadeToggle(500);
  });
  $('#mrbeer').click(function () {
    $('#mrbeer1').fadeToggle(500);
  });
  $('#net').click(function () {
    $('#net1').fadeToggle(500);
  });
  $('#cna').click(function () {
    $('#cna1').fadeToggle(500);
  });
});