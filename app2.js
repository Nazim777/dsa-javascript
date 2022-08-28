// var twoSum = function(nums, target) {
    
//     for(let i = 0 ; i<nums.length; i++) {
//        for(let j= i+1 ; j<nums.length; j++) {
//         if(target==(nums[i]+ nums[j])) {
//             return [i,j]
//         }
        
//        }
//     }
    
// };

const twoSum = (nums,target) =>{
    for(let i = 0 ; i<nums.length; i++) {
        let remainnig = target -nums[i] 
        for(let j= i+1 ; j <nums.length; j++) {
            if(nums[j] === remainnig) {
                return [i,j]
            }
        }
    }
}

let  nums = [3,2,4,5]
 let target = 7

// console.log(twoSum(nums,target))

class Hello {
    constructor(name,age) {
        this.name = name 
        this.age = age
        this.profession = ''
        this.isCompleted = false ;
        this.storage = []
        this.data= []
        

    }
    hello = (value) =>{
        this.storage.push(value) 
        return this.storage

    }
    more = (isCompleted,profession) =>{
        this.profession = profession
        this.isCompleted =isCompleted
       
    }
    arr = (array)=>{
        for(let i = 0 ; i<array.length; i++) {
            this.data.push(array[i])
            this.data ;
            
        }
    }

    unshift = (value) =>{
        this.data.unshift(value)
        return this.data
    }
}
const ds = new Hello('john doe',30)
//console.log(ds)
ds.hello(2)
ds.more(true,'teacher')
//console.log(ds)
const array = [1,2,3,4,5,6]
ds.arr(array)
//console.log(ds)
ds.unshift(10)
//console.log(ds)
