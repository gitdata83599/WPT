const person ={
    name:'person1',
    address:'pune',
    age:20,
    email:'person1@test.com',
}

function function1(){
    console.log(`name=${person.name}`)
    console.log(`address=${person.address}`)
    console.log(`age=${person.age}`)
    console.log(`email=${person.email}`)
}
//function1()

function function2(){

    const { age,email,address,phone} =person

    //console.log(`name:${name}`)
    console.log(`address:${address}`)
    consolel.log(`age:${age}`)
    console.log(`email:${email}`)
    console.log(`phone:${phone}`)
}