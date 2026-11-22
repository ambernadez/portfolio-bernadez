// Show selected page
const navButtons = document.querySelectorAll('#mainnav button');
const pages = document.querySelectorAll('.page');

function showPage(id){
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.target === id));
  window.scrollTo({top:0, behavior:'smooth'});
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.target));
});

// Image Modal Handler
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

function openModal(img){
  modalImg.src = img.currentSrc || img.src;
  modalImg.alt = img.alt || 'Full View';
  modal.classList.add('active');
  modalClose.focus();
}

function closeModal(){
  modal.classList.remove('active');
}

document.addEventListener('click', (e) => {
  const img = e.target.closest('.card-img, .hero-img');
  if (img) openModal(img);
});

document.querySelectorAll('.card-img, .hero-img').forEach(img => {
  img.setAttribute('tabindex', '0');
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(img);
    }
  });
});

modalClose.addEventListener('click', closeModal);

modalClose.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    closeModal();
  }
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
