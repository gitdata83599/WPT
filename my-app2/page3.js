function function1(){
    const numbers =[1,2,3,4,5,6,7,8,9,10]

    //get square of each of the numbers
    const squares =[]
    for (const value of numbers){
        squares.push(value ** 2)

    }
    console.log(squares)
}
//function1()

function function2(){

    const numbers =[1,2,3,4,5,6,7,8,9,10]

    const squares =numbers.map((number) =>{
        return number ** 2
    })
    console.log(`squares:${squares}`)

}
//function2()

function function3(){
    const temp_c= [32,35,34,38,30]
    const temp_f= temp_c.map((temp)=>{
        return 32 + temp*(9/5)
    })
    console.log(temp_f)
}
//function3()

function function4(){
    //array of objects
    const persons =[
      
        {name:'person1' , age:10,address:'pune'},
        {name:'person2' , age:20,address:'karad'},
        {name:'person3' , age:11,address:'mumbai'},
        {name:'person4' , age:23,address:'satara'},
        {name:'person5' , age:14,address:'nash'},

       ]
       const names =persons.map((person)=>{
        return person.name
       })
       console.log(names)
       // get every person's name and address
  const persons2 = persons.map((person) => {
    return { name: person.name, address: person['address'] }
  })
  console.log(persons2)

  // get every persons's voting eligibility
  const persons3 = persons.map((person) => {
    return { name: person.name, age: person.age, canVote: person.age >= 18 }
  })
  console.log(persons3)
}

function4()



