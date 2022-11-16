console.log(' start')

console.log(' start 2')

function timeout2sec() {
    console.log('2 sec timeout')
}

setTimeout(timeout2sec , 2000)

window.setTimeout(function(){
    console.log('inside timeout 2 sec ', 5000)
})

console.log('end')