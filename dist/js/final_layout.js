Vue.createApp({
    data() {
        return {
            items: [
                { title: '第一張', subtitle: '第一子標題', bg: '/image/dog.jpeg' },
                { title: '第二張', subtitle: '第二子標題', bg: '/image/dog.jpeg' },
                { title: '第三張', subtitle: '第三子標題', bg: '/image/dog.jpeg' },

            ],
            currentIndex: 0,
        }
    },
    methods: {
        setIndex(index) {
            this.currentIndex = index;
        }
    }
}).mount('#app-slider');