const myArray = ['Jim', 28, 'red']

console.log(myArray[2])

let person = {
 name: 'Jim',
 age: 28,
 hairColor: 'red',
 run: function () {console.log('running')}
}

console.log(person.age)
person.run()
person.age = person.age + 1
console.log(person.age)

//const walk = function (){console.log('walking')}
//function walk (){console.log('walking slow')}
//walk()

let anotherPerson = {
 name: 'Sue',
 age: 27,
 hairColor: 'brown',
 walk: function (){console.log('walking')}
}
console.log('another person hair color ', anotherPerson.hairColor)
anotherPerson.walk()

let people = [person, anotherPerson,{ name: 'Mary', age: 32, hairColor: 'pink', run: function (){console.log('walking fast')} }]
console.log(people[0])
console.log(people)
console.log(people[2])
console.log(people[2].name + ' has ' + people[2].hairColor + ' hair.')

people.forEach(person => console.log(person.name + ' has ' + person.hairColor + ' hair.'))




