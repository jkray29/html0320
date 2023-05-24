const sayHi = () => {
    let name = document.querySelector('#name');

    if (!name) {
        alert('沒有輸入框');
        return;
    }

    if (!name.value) {
        alert('請輸入姓名');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `Hi!, ${name.value}`;
    name.value = '';
    name.focus();
}


let hi = document.querySelector('#hi');

hi.addEventListener('click', sayHi);