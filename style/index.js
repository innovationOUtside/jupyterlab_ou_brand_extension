import './base.css';

// Via: https://discourse.jupyter.org/t/changing-favicon-with-notebook-extension/2721

let head = document.head || document.getElementsByTagName('head')[0];

let link = document.createElement('link')
let oldLink = document.getElementsByClassName('favicon');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'https://www.open.ac.uk/oudigital/v4/external/img/favicons/favicon.png';
if (oldLink) {
    link.classList = oldLink[0].classList;
    head.removeChild(oldLink[0]);
}
head.appendChild(link);