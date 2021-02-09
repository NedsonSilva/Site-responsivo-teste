const btn_menu = document.getElementById('btn_menu');
const menu_toggle = document.querySelector('.links');
const body = document.getElementsByTagName('section')[0];

btn_menu.onclick = function() {
  menu_toggle.classList.toggle('menu_close')
}

body.onclick = function() {
  menu_toggle.classList.add('menu_close');
}

