

const firebaseConfig = {
    apiKey: "AIzaSyA0A7aP4B7hknJQ01fRqwKiDAgyDg8gcWI",
    authDomain: "myclass0626.firebaseapp.com",
    databaseURL: "https://myclass0626-default-rtdb.firebaseio.com",
    projectId: "myclass0626",
    storageBucket: "myclass0626.appspot.com",
    messagingSenderId: "500819934179",
    appId: "1:500819934179:web:b9d897a3b45248c4073ed6"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    // let result = await write('BBB', 'test')
    // console.log(result)

    // let response = await read('test')
    // console.log(response)

    // listen('test', (value) => {
    //     console.log(value)
    // })
})()
