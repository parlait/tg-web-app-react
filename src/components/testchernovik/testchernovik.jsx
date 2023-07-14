/*
const asynchFn= async () => {
    throw new Error('there was an error')
}
asynchFn()
.then(value => console.log(value))
.catch(error => console.log(error.message))
*/
/*
node 'src\components\testchernovik\testchernovik.jsx'
*/
const asynchFn= async () => {
   // throw new Error('there was an error')
   return 'rrreeee'
}

//asynchFn()
//.then(value => console.log(value))
//.catch(error => console.log(error.message))

const resultmoi =() =>asynchFn().then(value => ddd(value));

resultmoi()
/*
node 'src\components\testchernovik\testchernovik.jsx'
*/
function ddd(v) {
    return v
}
//ddd();
