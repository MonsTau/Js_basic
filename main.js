const btns = document.querySelectorAll('.list li');

/* for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', e => {
        e.preventDefault();
        console.log(i);
    })
}
    

for (let btn of btns) {
    btn.addEventListener('click', e => {
        console.log(e.currentTarget);
    })
}
 */

btns.forEach((btn,index,array) => {
    btn.addEventListener('click', e => {
        isOn = e.currentTarget.classList.contains('on');
        if (isOn) return;
        for (let item of btns) item.classList.remove('on');
        btns[index].classList.add('on');
    })
})

/* const myArr = [1, 2, 3, 4, 5];

const newMyArr = myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});

console.log(newMyArr); // undefined */