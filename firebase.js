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




users.on('value', (data) => {
    // console.log('casncjasbc', data)
    // console.log('real time', data.val())
    document.getElementById('list').innerHTML = renderDOM(data.val())
})
function writeData() {
    const idUser = document.getElementById('idUser').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    dataBase.ref('users/' + idUser).set({
        name,
        idUser,
        email
    })

}
function renderDOM(dataRender) {
    var html = ""
    if (dataRender && Object.keys(dataRender).length === 0) {
        console.log('ok')
        return html
    }

    // console.log('datatoFireBase', dataRender)
    if (!dataRender) {
        return html
    }
    for (var item in dataRender) {
        html += `<li>${item}</li>`
        // renderDOM(dataRender[item])
        // console.log('value', dataRender[item])
        // if()
        if (dataRender[item] && typeof dataRender[item] !== "string" && Object.keys(dataRender[item])[0] && Object.keys(dataRender[item]).length !== 0) {

            // console.log(item, dataRender[item])
            html += `<div style="margin-left : 20px">${renderDOM(dataRender[item])}</div>`
            // console.log('string', string)

        }
        //dataRender[item ] => value
        // renderDOM(dataRender[item])
    }

    return html


}



            // writeData("cdcbsdhjbcsbdhbcjsbdjcbjsbdchjbsd", "cascas", "cascas")