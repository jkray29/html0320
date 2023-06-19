Vue.createApp({
    data() {
        return {
            items: [
                { title: '第一張', subtitle: '第一子標題', bg: '/image/dog.jpeg' },
                { title: '第二張', subtitle: '第二子標題', bg: '/image/banner.jpg' },
                { title: '第三張', subtitle: '第三子標題', bg: '/image/banner1.jpg' },

            ],
            currentIndex: 0,
            timer: '',
            loopSecond: 3
        }
    },
    methods: {
        setIndex(index) {
            this.currentIndex = index;
            this.doLoop();
        },
        doLoop() {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                let max = this.items.length - 1;
                if (this.currentIndex >= max) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
            }, this.loopSecond * 1000);
        }
    }
}).mount('#app-slider');