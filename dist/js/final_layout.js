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


Vue.createApp({
    data() {
        return {
            isOpen: false,
            isRun: false,
        }
    },
    methods: {
        doToggle() {
            if (this.isRun) {
                return;
            }

            this.isRun = true;
            this.isOpen = !this.isOpen;

            let wrap = this.$refs.wrap;
            let popup = this.$refs.popup;

            if (this.isOpen) {
                gsap.to(popup, { opacity: 1, display: 'block', duration: 1 });
                gsap.to(wrap, { opacity: 0, display: 'none', duration: 0 });
                // popup.style.display = 'block';
                // wrap.style.display = 'none';
            } else {
                gsap.to(popup, { opacity: 0, display: 'none', duration: 0 });
                gsap.to(wrap, { opacity: 1, display: 'block', duration: 1 });
            }

            setTimeout(() => {
                this.isRun = false;
            }, 1000)
        }
    }
}).mount('#patent-design')