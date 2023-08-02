const box = document.querySelector('.box');

box.addEventListener('click', e => {
    e.currentTarget.style.backgroundColor = 'hotpink';
    e.currentTarget.style.width = 200+'px';
    console.log(getComputedStyle(e.currentTarget).width);
})

const box2 = document.querySelector('.box2');

box2.addEventListener('click', e => {
    /*  const style = getComputedStyle(e.currentTarget);
    console.log(style['background-color']);   or  */
    const bg = getComputedStyle(e.currentTarget).backgroundColor;
    const wid = getComputedStyle(e.currentTarget).width;
    console.log(bg);
    console.log(wid);
})

const a = document.querySelector('a');

console.log(a.getAttribute('href'));
console.log(a.getAttribute('target'));
console.log(a.getAttribute('title'));

a.setAttribute('href', 'http://www.nate.com')
a.setAttribute('target', '_self');
a.setAttribute('title', '네이트로 이동');
a.innerText = '네이트';

console.log(a.getAttribute('href'));
console.log(a.getAttribute('target'));
console.log(a.getAttribute('title'));
