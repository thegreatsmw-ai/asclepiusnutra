
document.addEventListener('DOMContentLoaded', function(){
  // Year
  const yrs = document.querySelectorAll('.year');
  yrs.forEach(el => el.textContent = new Date().getFullYear());
  // Mobile nav
  const toggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }
  // Contact form demo
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Message sent (demo). Thank you!');
      form.reset();
    });
  }
  // Product modal simple (delegation)
  document.addEventListener('click', function(e){
    const card = e.target.closest('.product-card');
    if(card){
      const name = card.querySelector('h4')?.textContent || 'Product';
      const price = card.querySelector('.price')?.textContent || '';
      alert(name + '\n' + price + '\n\nFor demo, replace with a product modal or product page.');
    }
  });
});
