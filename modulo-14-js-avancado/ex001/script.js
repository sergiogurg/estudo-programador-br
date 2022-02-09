

let dog = {
    sound: 'Au au',
    speak: genericSpeak
}

let cat = {
    sound: 'Miau',
    speak: genericSpeak
}

function genericSpeak() {
    console.log(this.sound)
}

// dog.speak()
// cat.speak()

let bindedFunction = genericSpeak.bind(dog)

bindedFunction()