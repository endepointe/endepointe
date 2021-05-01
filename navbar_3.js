const menuBtn = document.getElementById('navbar_3_menu_btn');
menuBtn.addEventListener('click', () => {
  console.log(document.getElementById('navbar_3_menu_list').classList);
  document.getElementById('navbar_3_menu_list').classList.toggle('expand');
});