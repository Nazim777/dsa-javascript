const number = [1,2,3,4,5,6]
const squares = number.reduce((accumulator,currenvalue)=>{
    accumulator.push(currenvalue*currenvalue) 
    return accumulator

},[])
//console.log(squares)

const odds = number.reduce((accumulator,currenvalue) =>{
    if(currenvalue%2==1) {
        accumulator.push(currenvalue)

    }
    return accumulator
},[])
//console.log(odds)

const even = number.reduce((accumulator,currenvalue) =>{
    if(currenvalue%2==0) {
        accumulator.push(currenvalue)
    }
    return accumulator

},[])
//console.log(even)

const products = [
    {name:'mango',price:200},
    {name:'mango',price:200},
    {name:'banana',price:100},
    {name:'banana',price:100},
    {name:'apple',price:100},
    {name:'grape',price:400},
    {name:'grape',price:400}
]

const invoice = products.reduce((accumulator,currenvalue) =>{
    if(accumulator[currenvalue.name]) {
        accumulator[currenvalue.name].price += currenvalue.price 
        accumulator[currenvalue.name].quantity ++ 

    } else{
        accumulator[currenvalue.name] = {
            price: currenvalue.price,
            quantity: 1
        }
    }
    return accumulator
},{})
//console.log(invoice)

let totalPrice = 0
const total = (arr) =>{
    for(let i = 0 ; i<arr.length; i++) {
        totalPrice += arr[i].price
    }

}
total(products) 
//console.log(totalPrice)

