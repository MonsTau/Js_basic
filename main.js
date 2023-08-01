/* 
    e.target: 이벤트가 발생했을때 마우스 포인터 위치 요소값 반환
    e.currentTarget: 이벤트가 발생했을때 선택자 요소를 반환
*/

const main = document.querySelector('main');

/* main.addEventListener('click', e => {
    console.log(e.currentTarget);  // <main>...</main>
}) */

main.addEventListener('click', e => {
    console.log(e.target);
})