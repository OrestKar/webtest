console.log('requesting data ...')

const p = new Promise(function(resolve , reject){
    setTimeout(()=> {
        console.log('preparing data ...')
        const backendData = {
            server: 'aws',
            port: 2000 ,
            status: 'working'
            
        }
        resolve(backendData)
    }, 2000)
})

p.then(data=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data.modified = true
            resolve(data)
        }, 2000)
    }).then(clientData =>{
        console.log('Data received' , clientData )
    })


    // p2.then(clientData =>{
    //     console.log('data received' , clientData )

    // } )
    //console.log('promise resolved')
})