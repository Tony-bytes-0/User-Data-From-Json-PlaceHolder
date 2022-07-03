//prueba de fecth
var turn = 0
writeData = function (deployTo){
    let loop = 0
    deployTo.forEach(element => {
        document.getElementById(element[0]).innerHTML = globalThis.peopleInfo[loop].id
        document.getElementById(element[1]).innerHTML = globalThis.peopleInfo[loop].name
        console.log(document.getElementById(element[1]), ' deberia tener:  ', globalThis.peopleInfo[loop].name)
        document.getElementById(element[2]).innerHTML = globalThis.peopleInfo[loop].username
        loop += 1
    });
}
function shuffle() {globalThis.peopleInfo
    let currentIndex = globalThis.peopleInfo.length, randomIndex;
    // While there remain elements to shuffle. esto lo saque de internet.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [globalThis.peopleInfo[currentIndex], globalThis.peopleInfo[randomIndex]] = [
            globalThis.peopleInfo[randomIndex], globalThis.peopleInfo[currentIndex]];
    }
    alert('arreglo de objetos barajado!')
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        //json.map((element) => console.log(element))
        //newRow.innerHTML = json[turn].id//escribir en la grilla EJEMPLOS
        //document.getElementById('mainGrid').appendChild(newRow)

        turn += 1
        globalThis.peopleInfo = json
        console.log(peopleInfo, turn)
        console.log('lista la carga de los datos')
        })

        
        
