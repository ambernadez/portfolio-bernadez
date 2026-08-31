  //show selected page
  const navButtons = document.querySelectorAll('#mainnav button');
  const pages = document.querySelectorAll('.page');

  function showPage(id){
    pages.forEach(p=>p.classList.toggle('active', p.id===id));
    navButtons.forEach(b=>b.classList.toggle('active', b.dataset.target===id));
    window.scrollTo({top:0, behavior:'smooth'});
  }

  navButtons.forEach(btn=>{
    btn.addEventListener('click', ()=> showPage(btn.dataset.target));
  });
