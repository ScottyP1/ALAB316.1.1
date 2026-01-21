// --------------------------------------------------------- Part 1
const mainEl = document.querySelector('main');
const h1El = document.createElement('h1');

mainEl.style.backgroundColor = 'var(--main-bg)';

h1El.innerHTML = 'DOM Manipulation';
mainEl.appendChild(h1El);

mainEl.classList.add('flex-ctr');

// --------------------------------------------------------- Part 2
const topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// --------------------------------------------------------- Part 3
var menuLinks = [

    { text: 'about', href: '/about' },

    { text: 'catalog', href: '/catalog' },

    { text: 'orders', href: '/orders' },

    { text: 'account', href: '/account' },

];

menuLinks.map((item) => {
    const linkEl = document.createElement('a');
    linkEl.href = item.href;
    linkEl.text = item.text;

    topMenuEl.appendChild(linkEl);
})