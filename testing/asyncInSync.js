async function mainWithSync(){
    let base = 'basic/'
    console.log('start')
    sync = add(base, getSync())
    console.log(sync)
    console.log('end')
}

async function mainWithAsync(){
    let base = 'basic/'
    console.log('start with async')
    async = add(base, await getAsync())
    console.log(async)
    console.log('end with async')
}

function add(a, b){
    return a+b
}

function getSync(){
    return 'sync/' + 'value'
}

async function getAsync(){
    return 'async/' + 'value'
}

mainWithSync()
mainWithAsync()
