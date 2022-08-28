const fruits = ['apple','banana','orange','bluebery']
// array slice 
// start from 0 including(0) and UP to 4 [0,1,2,3]
//console.log(fruits.slice(0,4))
//console.log(fruits.slice(1,3))

let obj = {} 
let string = 'hello this is home page';
const hello = (str) =>{
    for(let i = 0 ; i<str.length; i++) {
        let key = str[i]
        if(!obj[key]) {
            obj[key] = 0
        }
        obj[key] ++
    }
}
hello(string)
//console.log(obj)

// diffrent ways of object access 
const person = {
    name:'john',
    shirt: 'white',
    
}
// dot (.) notation
// console.log(person.name)
// console.log(person.shirt)

// bracket notation
//console.log(person['shirt'])

const frequency = (str) =>{
    const result = {}
    for(let ch of str) {
    if(ch in result) {
        //result[ch] += 1
        result[ch] ++ 
    } else{
        result[ch] = 1
    }
    } 
    return result

}

const str = 'hello this is a home page'
//console.log(frequency(str))
const wordFrequency = (words) =>{
    const result = {}
    const wordArray = words.split(' ')
   for(let word of wordArray) {
    if(word in result) {
        result[word] ++

    }else{
        result[word]= 1
    }
   
   }
   return result
  

}
const str2 = 'hello this is a home page'
//console.log(wordFrequency(str2))


// for of loop array and string 
// for in loop object

const language = [
    'java',
    'python',
    'java',
    'python',
    'javascript',
    'java',
    'javascript'
]
const hello2 = language.reduce((accumulator,currentvalue) =>{
    if(accumulator[currentvalue]) {
        accumulator[currentvalue] ++

    } else{
        accumulator[currentvalue] = 1
    }
    return accumulator
},{})
//console.log(hello2)

const arr = [

   {
        name: 'Abdur Rahman',
        eamil: 'abdurrahman@gmail.com',
        phone: 243231451234,
        home:'dinajpur'
    
    },
     {
        name: 'Rahimul Islam',
        eamil: 'rahimulislamn@gmail.com',
        phone: 243231451234,
        home:'dhaka'
    
    },



]

const result = arr.reduce((accumulator,currentvalue) =>{
    if(!accumulator[currentvalue.name]) {
        accumulator[currentvalue.name] = {
            ...currentvalue,
            isCompleted: false ,
        }

    } 
    return accumulator
},{})
//console.log(result)





const products = [
    {name:'mango',price:200},
    {name:'mango',price:200},
    {name:'mango',price:200},
    {name:'banana',price:100},
    {name:'banana',price:100},
    {name:'apple',price:150},
    {name:'grape',price:400},
    {name:'grape',price:400}
]

// const invoice = products.reduce((accumulator,currentvalue)=>{
//   // console.log(`accumulator[${accumulator}]- currentvalue[${currentvalue.name},${currentvalue.price}]`)
//     if(accumulator[currentvalue.name]){
//         accumulator[currentvalue.name].quantity++
//         accumulator[currentvalue.name].price += currentvalue.price

//     }else{
//         accumulator[currentvalue.name]={
//             price: currentvalue.price,
//             quantity: 1

//         }
//     }
//     return accumulator
// },{})
// console.log(invoice)


//const invoice = products.reduce((accumulator,currentvalue)=>{
  // console.log(`accumulator[${accumulator}]- currentvalue[${currentvalue.name},${currentvalue.price}]`)
 // console.log(typeof accumulator)
  
    // if(accumulator[currentvalue.name]){
    //     accumulator[currentvalue.name].quantity++
    //     accumulator[currentvalue.name].price += currentvalue.price

    // }else{
    //     accumulator[currentvalue.name]={
    //         price: currentvalue.price,
    //         quantity: 1

    //     }
    // }
    // return accumulator
// },{})
// console.log(invoice)

const invoice =products.reduce((accumulator,currentvalue) =>{
    if(accumulator[currentvalue.name]) {
       // accumulator[currentvalue.name] .price = accumulator[currentvalue.name].price  + currentvalue.price 
       accumulator[currentvalue.name] .price += currentvalue.price
        accumulator[currentvalue.name].quantity ++

    }else{
        accumulator[currentvalue.name] = {
            price : currentvalue.price,
            quantity: 1
        }
    }
    return accumulator
},[])
//console.log(invoice)

let totalPrice = 0;
for(let i = 0 ; i<products.length; i++) {
   // console.log(products[i])
        totalPrice += products[i].price 
}
//console.log(total)



