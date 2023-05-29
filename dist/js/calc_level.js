const toLevel = (number) => {
    // >= 90 甲
    if (number >= 90) {
        return '甲';
    }
    // >= 80 乙
    if (number >= 80) {
        return '乙';
    }
    // >= 70 丙
    if (number >= 70) {
        return '丙';
    }
    // >= 60 丁
    if (number >= 60) {
        return '丁';
    }

    // < 60 不及格
    return '不及格';
}

const calcLevel = () => {
    let number = document.querySelector('#number');

    if (!number) {
        alert('沒有輸入框');
        return;
    }

    if (!number.value) {
        alert('請輸入分數');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `您的等級為： ${toLevel(number.value)}`;
    number.value = '';
    number.focus();
}


let level = document.querySelector('#level');

level.addEventListener('click', calcLevel);

let number = document.querySelector('#number');

number.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {

        calcLevel();
    }
})