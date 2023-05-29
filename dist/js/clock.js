const update = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    let time = '' + hh + mm + ss;

    for (let i = 0; i < 6; i++) {
        let dom = document.querySelector(`#c-${i + 1}`);
        dom.innerHTML = time[i];
    }
}

update();

setInterval(() => {
    update();
}, 1000);
