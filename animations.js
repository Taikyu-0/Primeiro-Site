// Efeito de fade-in para elementos quando aparecem na tela
document.addEventListener('DOMContentLoaded', () => {
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Aplicar aos elementos que queremos animar
    document.querySelectorAll('.fade-in').forEach((el) => observador.observe(el));
});

// Animação do menu de navegação
const nav = document.querySelector('.main-nav');
let ultimaPosicaoScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    const posicaoAtual = window.pageYOffset;
    
    if (ultimaPosicaoScroll > posicaoAtual) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-80px";
    }
    
    ultimaPosicaoScroll = posicaoAtual;
});

// Efeito hover nos cards de conteúdo
document.querySelectorAll('.content-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Animação do botão de loading
function mostrarLoading(botao) {
    botao.classList.add('loading');
    setTimeout(() => {
        botao.classList.remove('loading');
    }, 2000);
}

// Animação do menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}); 