function abrirJanela(){
	document.getElementById('modal-promocao').style.display = 'flex';

}

function fecharJanela(){
	document.getElementById('modal-promocao').style.display = 'none';
}

  const target = document.querySelectorAll('[data-anime]')
  const animationClass = 'animate';

  function animeScroll(){
	const windowTop = window.pageYOffset + 200;
	target.forEach(function(element){
		if((windowTop) > element.offsetTop) {
			element.classList.add(animationClass);
		}
	})
  }

  animeScroll();
  window.addEventListener('scroll',function(){
	animeScroll();
  })

  function tocarAudio(){
	var audio1 = new Audio();
    audio1.src = "../multimidea/Soar-alcear-v5l99-speed-1x.mp3";
    audio1.play();
  }

  const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);