//  CRUD  
// CREATE
//DELETE
// update
// Initialize Firebase
//  create ref => 

var config = {
    apiKey: "AIzaSyDeNPga2ZOnJ2c8_liEhOZ_oE0zu67xPqU",
    authDomain: "aalo-alo-1543997548313.firebaseapp.com",
    databaseURL: "https://aalo-alo-1543997548313.firebaseio.com",
    projectId: "aalo-alo-1543997548313",
    storageBucket: "aalo-alo-1543997548313.appspot.com",
    messagingSenderId: "833384826684"
};
// q
firebase.initializeApp(config);
const dataBase = firebase.database()


const users = dataBase.ref('users')
console.log('get all id', users.push().key)
// firebase.database().ref().child('posts').push().key;
users.on('value', (data) => {
    document.getElementById('list').innerHTML = renderDOM(data.val())
})
function writeData() {
    const idUser = document.getElementById('idUser').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    dataBase.ref('users/' + idUser).set({
        name,
        idUser,
        email: {
            "casncjas": {

                "cascas": "cascascas",
                "cascas": {
                    email
                }

            }
        }
    })
}

function renderDOM(dataRender) {
    var html = ""
    if (dataRender && Object.keys(dataRender).length === 0) {
        console.log('ok')
        return html
    }
    if (!dataRender) {
        return html
    }
    for (var item in dataRender) {
        html += `<li>${item}</li>`
        if (dataRender[item] && typeof dataRender[item] !== "string" && Object.keys(dataRender[item])[0] && Object.keys(dataRender[item]).length !== 0) {
            // console.log(item, dataRender[item])
            html += `<div style="margin-left : 20px">${renderDOM(dataRender[item])}</div>`
        }
    }
    return html
}
// learn storage firebase
// LEARN STORAGE  : CREATE , 
const domFile = document.getElementById('file')
const storage = firebase.storage()
domFile.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const storageFirebase = storage.ref('first/' + file.name)
    console.log('dom file', e.target.files[0])
    const task = storageFirebase.put(file)
    task.on('state_changed', function (spanot) { console.log(spanot) }, function (err) { }, function (complete) { })

})
storage.ref('first').getDownloadURL().then(url => {
    // const img = document.createElement('img')


    // Or inserted into an <img> element:
    var img = document.getElementById('myimg');
    img.src = url;
    console.log('img', data)
})
// learn firebase function 