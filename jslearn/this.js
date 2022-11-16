const { default: $ } = require("webdriverio/build/commands/browser/$")

function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Dimoden',
    age: '25',
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}


const lena = {
    name: 'Elena',
    age: 23,
}

//person.logInfo.bind(lena)()
//person.logInfo.call(lena , 'Frontend', '8-999-123-12-23')
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

const array = [1,2,3,4,5]
function multBy(arr, n){
    return arr.map(function(i){
        return i * n
    })
}

console.log(multBy(array, 5))
