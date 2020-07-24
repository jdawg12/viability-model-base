// const questions = [
//     {qNum: '1', text: 'Has the client identified all the potential stakeholders?'},
//     {qNum: '2', text: 'Have sub-use cases been played out?'},
//     {qNum: '3', text: 'Have all actors been identified?'}
//   ]

// const newQtext = questions.map(_questions => _questions.text)[1];
// var newQtext2 = JSON.stringify(newQtext)

// console.log(typeof(newQtext2))
// console.log(newQtext2)

const gabanna = [{name : 'john', age: '17'},
                 {name: 'kevin', age:'42'}]



const people = [
    {name : 'boonk', age : '12'},
    {name : 'gang', age : '15'},
    {name : 'whole lotta', age : '11'}
]

console.log(people)

const personIndex = people.findIndex(e => e.name == 'boonk')

console.log(personIndex)

let newPeople = [...people]

Array.prototype.splice.apply(newPeople, [0, gabanna.length].concat(gabanna))

console.log(newPeople)