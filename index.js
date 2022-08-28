// array traverse 

const array = [1,2,3,4,5,6]
const newArray1 = []
const newArray2 = []
let newArray1Count = 0 
let newArray2Count = 0
for(let i= 0 ; i<array.length ; i++){
   if(array[i] % 2 ==0) {
    newArray1Count ++
    newArray1.push(array[i])
   }else{
    newArray2Count ++
    newArray2.push(array[i])
   }
}
//console.log(`array 1 - ${newArray1} count - ${newArray1Count} array 2 - ${newArray2} count - ${newArray2Count}`)

// insert element in array 

const arr= [2,3,5,6,45,12,35]
const position = 2
const newElement = 4
//arr.splice(2,0,4)
//console.log(arr)
for(let i = arr.length-1 ; i >=0; i--) {
    if(i>=position) {
        arr[i+1] = arr[i]
        if(i==position) {
            arr[i] = newElement
        }
    }
}
//console.log(arr)

// delete element from array 
const arr1 = [10,20,30,40,50,60]
const position1 = 2 
for(let i = position1 ; i<arr1.length-1 ; i++) {
    arr1[i] = arr1[i+1]

}
arr1.length = arr1.length-1
//console.log(arr1)


// search element from array 
const arr3 = [10,20,30,40,50,60]
const searchElement = 40 ;
for(let i = 0 ; i<arr3.length; i++) {
    if(arr3[i] ==searchElement) {
       // console.log(i)
    }
}

// merge two array 
const arr4 = [1,2,3,4,5,6]
const arr5 = [10,20,30,40,50,60]


// const arr6 = arr4.concat(arr5)
// console.log(arr6)
// const arr7 = [...arr4,...arr5]
// console.log(arr7)
for(let i = 0 ; i<arr5.length; i++) {
   arr4.push(arr5[i])
}
//console.log(arr4)


// array sorting 


// ascending
const sortArray = [1,5,2,7,4,3]
for(let i = 0; i<sortArray.length; i++) {
    for(let j = 0 ; j<sortArray.length; j++) {
        if(sortArray[j] > sortArray[j+1]) {
           let temp = sortArray[j] 
            sortArray[j] = sortArray[j+1] 
           sortArray[j+1] = temp
         
        }
    }
}
//console.log(sortArray)

// descending 
const sortArray2 = [1,5,2,7,4,3]
for(let i = 0; i<sortArray2.length; i++) {
    for(let j=0 ; j<sortArray2.length; j++) {
        if(sortArray2[j]<sortArray2[j+1]) {
            let temp = sortArray2[j]
            sortArray2[j] = sortArray2[j+1] 
            sortArray2[j+1] = temp
        }
    }
}
//console.log(sortArray2)

// recursion 
const hello = (x)=>{
   // console.log(x)
    if(x<10) {
        hello(x+1)
    }
}
const data = 0
hello(data)

const factorial = (item) =>{
    if(item==0) return 1
  return item*factorial(item-1)
   
}
//console.log(factorial(5))

// indirect recursion 
const money = 100;
let totalApple = 0 ;
const buyApple = (x) =>{
    if(x>0) {
       // console.log(`i have a ${x} tk and ${totalApple} apple`)
        buyMore(x)
    }else{
       // console.log(`i don't have a money to buy a more apple , total apple ${totalApple}`)
    }

}
const buyMore = (x) =>{
    // totalApple = totalApple + 1 
    totalApple ++ 
   // x = x -10 
    x-= 10 
    buyApple(x)

}

buyApple(money)


// reverse array with recursion 
const array1 = [1,2,4,6,8] ;
//console.log(array1.reverse())
let temp ;
const customReverse = (arr,start,end) =>{
   // console.log(arr)
    if(start<=end) {
        temp = arr[start] 
        arr[start] = arr[end]
        arr[end] = temp
        customReverse(arr,start+1,end-1)
    }
    
}
customReverse(array1,0,array1.length-1)



// stack
// last in first out

const arr2 = [];
let currentSize = arr2.length;
const max = 5; 

// push
const push = (newValue) =>{
    if(currentSize>=max) {
       // console.log('stack overflowing',newValue)
    }
    arr2[currentSize] = newValue;
    currentSize ++

}

// pop
const pop = () =>{
    if(currentSize>0) {
        currentSize --;
        arr2.length = currentSize 
    }else{
        console.log('stack already empty')
    }
}



push(2)
push(4)
push(3)
push(5)
push(6)
push(8)
push(2)
pop()
pop()
//console.log(arr2)

// reverse string array with stack 
const stringArray = [] 
let arraySize = stringArray.length
const push1 = (newValue) =>{
    stringArray[arraySize] = newValue
    arraySize++

}
const pop1 = () =>{
        lastRemoveItem = stringArray[arraySize-1]
        arraySize --;
        stringArray.length = arraySize;
        return lastRemoveItem
    
    
}

const string = 'hello'
const newStringArray = string.split('')
const reverseString = (arr) =>{
   
    for(let i = 0; i<arr.length; i++) {
        push1(arr[i])
    }
    for(let i = 0 ; i<arr.length; i++) {
        arr[i] = pop1()
    }


} 

reverseString(newStringArray)
//console.log(newStringArray)
//console.log(stringArray)



// Queue 
// first in first out
const queue = [] ;
let currentSize1 = queue.length ;
const maxSize = 5
const queuePush = (newValue) =>{
    if(currentSize1>=maxSize) {
        console.log('queue overflowing',newValue)
    } 
    queue[currentSize1] = newValue ;
    currentSize1++ ;

}

const queuePop = () =>{
    if(currentSize1>0) {
        for(let i = 0; i<queue.length; i++) {
            queue[i] = queue[i+1]
            currentSize1--
            queue.length = currentSize1 
        }
    } else{
        console.log('queue is already empty') 
    }
    
}

// front and rear operations in queue
const  front = () =>{
    if(currentSize1>0) {
     console.log( queue[0])
    }else{
        console.log('queue is already empty')
    }
}

const rear = () =>{
    if(currentSize1>0) {
      console.log( queue[currentSize1-1] ) 
    }else{
        console.log('queue is already empty')
    }
}

queuePush(2)
queuePush(4)
queuePush(6)
queuePush(5)
//queuePop()
//  queuePop()
//console.log(queue)
//front()
//rear()

// linear search 
const array2 = [4,20,60,25,62,70]
const find = 60 
for( let i = 0 ; i<array2.length; i++) {
    if(array2[i] == find) {
       // console.log(i)
        break
    }
}



// binary search with iterative approach 
// it work with only sorted array

const array3 = [2,5,6,8,25,40]
const find1 = 25 ;
let start = 0 ;
let end = array3.length-1 ;
let position2 = undefined; 
while(start<=end) {
    let mid = Math.floor((start+end)/2)
    if(array3[mid] == find1) {
        position2 = mid
        break 
    } else if (array3[mid]<find1) {
        start = mid + 1
    }else {
        end = mid - 1
    }
}
//console.log(position2)


// recursive binary search 

const array4 = [10,15,20,25,30]
let start1 = 0 ;
const find2 = 20
let end1 = array4.length-1 ;
let position3 = undefined 

const binaryRecursive = (arr,start,end) =>{
    let mid = Math.floor((start+end)/2) ;
    if(arr[mid]==find2) {
        position3 = mid; 
        return position3
    } else if(arr[mid]<find2) {
        binaryRecursive(arr,mid+1,end)
    }else{
        binaryRecursive(arr,start,mid-1)
    }
}
binaryRecursive(array4,start1,end1)
//console.log(position3)


// array sortin 
const array5 = [6,3,2,4,7,1,9,5,8]
for(let i = 0 ; i<array5.length-1; i++) {
   for(let j = 0 ; j<array5.length; j++) {
    if(array5[j]>array5[j+1]) {
        let temp = array5[j]
        array5[j] = array5[j+1]
        array5[j+1] = temp 
    }
   }
}
//console.log(array5)

// selection sort 
//ascending sort
const item = [20,15,4,2,30,16,40]
const selectionSort = (arr) =>{
    for(let i = 0 ; i<arr.length; i++) {
       
        for(let j = i+1 ; j<arr.length; j++) {
            if(arr[j]<arr[i]) {
                let temp = arr[i] 
                arr[i] = arr[j] 
                arr[j] = temp

            }
        }
        
    }

}
selectionSort(item)
// console.log(item)

//discending sort 
const item1 = [20,15,4,2,30,16,40]
const selectionSort1 = (arr) =>{
    for(let i = 0 ; i<arr.length; i++) {
        for(let j = i+1 ; j<arr.length; j++ ){
            if(arr[j]>arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        
    }
}
selectionSort1(item1)
//console.log(item1)

//insertion sort

const item2 = [20,15,4,2,30,16,40]
const insertionSort = (arr) =>{
    let i ,current, j ;
    for(let i = 1; i<arr.length; i++) {
        current = arr[i]
        j = i-1 ;
        while(j>=0&& arr[j]>current) {
             arr[j+1] = arr[j] 
             j-- 
        }
        arr[j+1] = current
    }
}
insertionSort(item2)
//console.log(item2)

// anagram 
const anagram = (str1,str2) =>{
    let StrObj = {}
    if(str1.length !== str2.length) {
        return false
    }
    for(let ch of str1) {
        StrObj[ch] = (StrObj[ch] || 0) +1 ;
    }
    for(let ch of str2) {
        if(!StrObj[ch]) {
            return false
        }
        StrObj[ch] --
    }
    return true

}
//console.log(anagram('hello','ehllo'))

// palindram 
const palindrome = (str) =>{
    let start = 0 ;
    let end = str.length -1 ;
    if(str[start] !== str[end]) {
        return false
    }else{
        start ++ ;
        end -- ;
    }
    return true

}
//console.log(palindrome('ada'))

// maximum occurring character


let Obj = {} 
let str = 'hello' 
let maxKey = '' 
for(let i = 0 ; i<str.length; i++) {
    let key = str[i]
    if(!Obj[key]) {
        Obj[key] = 0 
    }
    Obj[key] ++
    if(maxKey == '' || Obj[key] > Obj[maxKey]) {
        maxKey = key
    }
}
//console.log(maxKey)


// object 
const data2 = {
    name: 'Abdur Rahman',
    eamil: 'abdurrahman@gmail.com',
    phone: 243231451234,
    home:'dinajpur'

}
// update 
data2.home = 'dhaka'
// delete 
delete data2.home
//console.log(data2)
// loop 
for(let data in data2) {
   // console.log(data)
}

// key of object 
const key = Object.keys(data2)
//console.log(key)

// value of object 
const value = Object.values(data2) 
//console.log(value)
//console.log(Object.entries(data2))

// linked list 

class List {
    constructor(data) {
        this.head = {
            value: data,
            next : null
        }
        this.tail = this.head 
        this.size = 1
    }
    addNode = (newData) =>{
        let newNode = {
            value : newData ,
            next : null
        }
        this.tail.next =newNode
        this.tail= newNode 
        this.size += 1
    }

    // insert linked list in any position
    insertNode = (index,value) =>{
        let counter = 1 
        let currentNode = this.head
        while(counter>index) {
            counter++ 
            currentNode = currentNode.next
        }
        let nextNode = currentNode.next 
        currentNode.next = {
            value : value ,
            next: nextNode
        }

    }
}

let list = new List(100)
list.addNode(200)
list.addNode(400)
list.insertNode (2,300)
console.log(list) 



