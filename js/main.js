'use strict';
{

  // ----sp メニュー ----
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const openHeader = document.getElementById('openHeader');
  const arrow = document.getElementById('arrow');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hideMenu');
    openHeader.classList.add('hideMenu');

    arrow.classList.add('hideMenu');
  });

  close.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hideMenu');
    openHeader.classList.remove('hideMenu');
    arrow.classList.remove('hideMenu');
  });


  // ----ｐｃ タブ----
  const menuItems = document.querySelectorAll('.menu-tab li a');
  const contents = document.querySelectorAll('.content-tab');


  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      clickedItem.classList.add('active');
  
      contents.forEach(content => {
        content.classList.remove('active');
      });

      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

















