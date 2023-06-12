const database = {
    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    },
    get(key, def) {
        let value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
            return value;
        }
        return def;
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}
let vm = Vue.createApp({
    data() {
        return {
            pending: [],
            done: [],
            itemValue: '',
        }
    },
    methods: {
        doAddItem() {
            let value = this.itemValue;
            if (!value) {
                Swal.fire({
                    title: '新增錯誤',
                    text: '請輸入項目名稱',
                    icon: 'error',
                }).then(() => {
                    setTimeout(() => {
                        this.$refs.itemValue.focus();
                    }, 500)
                })
                return;
            }
            this.pending.push(value);
            this.itemValue = '';
            this.$refs.itemValue.focus();
            this.update();
        },
        doRemove(index) {
            console.log(index);
        },
        toDone(index) {
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);
            this.update();
        },
        toPending(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
            this.update();
        },
        update() {
            database.set('todo-pending', this.pending);
            database.set('todo-done', this.done);

        },
        doSaveCloud() {
            Swal.fire({
                title: '儲存到雲端',
                text: '請輸入 UID',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: '儲存',
                cancelButtonText: '先不要'
            }).then(response => {
                if (response.value) {
                    let params = {
                        action: 'todo',
                        uid: response.value,
                        data: {
                            pending: this.pending,
                            done: this.done
                        }
                    }

                    console.log(params);
                }
            });
        },
        doLoadCloud() {
            console.log('load');
        }
    },
    mounted() {
        this.pending = database.get('todo-pending', []);
        this.done = database.get('todo-done', []);
    }
}).mount('#app');