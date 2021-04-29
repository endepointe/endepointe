const dropdownBtn = document.getElementById('navbar_1_dropdown_button');
const dropdownMenu = document.getElementById('navbar_1_dropdown_links');
const dropdownBtnInner = document.getElementById('navbar_1_dropdown_button_inner');
const dropdownMenuInner = document.getElementById('navbar_1_dropdown_inner');

dropdownBtn.addEventListener('click', () => {
  document.getElementById('navbar_1_dropdown_links').classList.toggle('showMenu');
});
dropdownMenu.addEventListener('mouseleave', () => {
  document.getElementById('navbar_1_dropdown_links').classList.remove('showMenu');
});
dropdownBtnInner.addEventListener('click', () => {
  console.log('inner menu clicked')
  document.getElementById('navbar_1_dropdown_links_inner').classList.toggle('showMenu')
});
