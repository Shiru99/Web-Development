//########################################################################################################


//Comments 
    // this is comment
    /*
        this
        is
        multiline 
        comment
    */



// // // VARIABLES :

// // var has global scope
// // let,const



// var ashwin = 99;
// console.log(ashwin)     // ";" is not mandatory 




// let age = 30;
// // print(age);      // print is undefined
// console.log(age)    // to print

// age = 44;
// console.log(age);




// const year = 2020;
// console.log(year);

// // const year ;
// // year = 2021;             // Error

// // year = 2022;
// // console.log(year);       // Error


//########################################################################################################


// //  DATATYPES :

// // Strings/numbers/booleans/null/undefined/symbols

// const isCool = true
// console.log(typeof isCool) // boolean

// const name = "john"
// console.log(typeof name) // String

// const age = 42
// console.log(typeof age) // number
// const grades = 6.5
// console.log(typeof grades) // number

// const x = null
// console.log(typeof x) // null => no output

// const y = undefined
// let w; // w => undefined
// console.log(typeof y) // undefined
// console.log(typeof w) // undefined


//##########################################    Strings     ##############################################


// // concatenation :


// const name = "John Doe"

// const age = 42

// console.log('my name is '+ name + ' & my age is ' +age)

// // template String :

// console.log(`my name is ${name}`) // BackTicks

// const tumtum = `my name is ${name} & my age is ${age}`
// console.log(tumtum)

// LENGTH fn / uppercase/loercase method()

// let nm = "Jenny Doe"
// console.log(nm.length)
// console.log(nm.toUpperCase())
// console.log(nm.substring(9,2).toLowerCase())
// console.log(nm.split(''))



//############################################  Array   ##################################################



// let nums = new Array(1,2,3,4,5)
// const fruits = ['mangoes','grapes','oranges',true,null,1999]

// console.log(nums)
// console.log(fruits)

// // output :
// //     [ 1, 2, 3, 4, 5 ]
// //     [ 'mango', 'grapes', 'oranges', true, null, 1999 ]




// console.log(fruits[2])

// fruits.push('apples')
// fruits.unshift('strawberries')
// console.log(fruits)

// // output :
// //    [  'strawberries',  'mangoes',  'grapes',  'oranges',  true,  null,  1999,  'apples']

// fruits.pop()
// console.log(fruits)
//              // [ 'strawberries', 'mangoes', 'grapes', 'oranges', true, null, 1999 ]


// console.log(Array.isArray(fruits))      // is array ?? => true
// console.log(Array.isArray('fun'))       // is array ?? => false
// console.log(fruits.indexOf('grapes'))   // 2



//########################################  Object Literals ##############################################


// const person = 
//     {
//         firstname: 'John',
//         lastname: 'Doe',
//         age: 33,
//         fun : [22,55,99],
//         address: { city: 'chinaTown', state: 'Dunkane', country: 'Sladon' },
        
//     }

// // console.log(person)

// console.log(person.firstname , person.lastname , person.fun[2] , person.address.state)

// const person1 = 
// {
//     firstname: 'Jenny',
//     lastname: 'Doe',
//     age: 30,
//     fun : [22,55,99,66],
//     address: { city: 'csTown', state: 'DJcount', country: 'Sladon' },
    
// }

// person1.email = 'Jenny@fun'
// console.log(person1)


// // New :
// // console.log(firstname)  //ReferenceError: Cannot access 'firstname' before initialization
// const{firstname , lastname , address:state} = person1 
// console.log(firstname)  // Jenny

//########################################################################################################


// const todos = 
// [
//     {
//         id: 1,
//         text: "meeting with Jenny",
//         isComplete: false,
//     },
//     {
//         id: 2,
//         text: "meeting with John",
//         isComplete: true,
//     },
//     {
//         id: 3,
//         text: "meeting with Mom",
//         isComplete: false,
//     },
// ]

// const todosJSON = JSON.stringify(todos)
// console.log(todosJSON)
// // output :
// //      [{"id":1,"text":"meeting with Jenny","isComplete":false},{"id":2,"text":"meeting with John","isComplete":true},{"id":3,"text":"meeting with Mom","isComplete":false}]



//############################################   Loops   #################################################

// for(let i=0;i<10;i++){
//     console.log(`For - ${i}`)
// }

// let i = 0
// while(i<10){
//     console.log(`while - ${i}`)
//     i++
// }

// const nums = [1,2,3,4,5]
// for(let num of nums){
//     console.log(num)
// }

//##################################  Loops  : foreach/map/filter   ######################################

const nums = [1,2,3,4,5]

// // Foreach :
// nums.forEach(  function(num){console.log(num*100)} )   /// similar to lamda function in python




// // Map :
// const Squares = nums.map(function(num){return num**2})
// console.log(Squares)


// const Squares = nums.map(function(num){if( num%2 != 0) return num**2;})
// console.log(Squares)            //  ==>>  [ 1, undefined, 9, undefined, 25 ]

// const Squares = nums.map(function(num){if( num%2 != 0) return num**2; else return num*100;})
// console.log(Squares)            //  ==>>  [ 1, 200, 9, 400, 25 ]





// // filter :
// const evens = nums.filter(function(num){return num%2 != 0})
// console.log(evens)       //  ==>>  [ 1, 3, 5 ]

// const evens = nums.filter(function(num){return num%2 != 0}).map(function(num){return num**2})
// console.log(evens)          //  ==>>  [ 1, 9, 25 ]

//###########################################   Condition   ##############################################

// // const x,y = 11,99    //error
// // const x,y = 99       //error

// const x = 11,y=99

// if(x===11 && y===11 ){
//     console.log(`both x and y are found and equal to 11`)
// }
// else if(x===11 || y===11 ){
//     console.log(`any one of x and y is equal to 11`)
// }
// else{
//     console.log(`I don't want to find...  :( `)
// }



//######################################   = == ===  and else if    ######################################

// Comparision(100)           // Function can be called before defining it too.
// Comparision('100')

// function Comparision(number)
// { 
//     // Comparision using == will not check datatype, irrespective of datatype it will do comparision  
//     if (number == 100)  
//         console.log("Values are equal");  
//     else  
//         console.log("Values are not equal");  

//     // Comparision using === will check datatype too.
//     if(number === 100)  
//         console.log("Values and datatypes are equal");  
//     else  
//         console.log("Values or datatypes are not equal");  
// }






// const x =100

// const color = x===100 ? 'red' : 'blue';           // ternary operator
// // console.log(color)



// switch(color)
// {
//     case 'blue':
//         console.log(`color is blue`)
//         break
//     case 'red':
//         console.log(`color is red`)
//         break
//     default:
//         console.log(`color is undefined...`)
//         break
// }


//########################################  Function    ##################################################


// function addnums(num1=0,num2=0)
// {
//     // console.log(num1+num2)
//     return num1+num2
// }


// console.log(addnums(11,1100))         // 1111
// console.log(addnums())                // => 0

// console.log(addnums(99))               // => 99
// console.log(addnums(11,88,9900) )     // => not 9999 only 99


//####################################  Arroy  Function    ###############################################

// const opnums = (num1,num2) => num1*num2                     /// Lamda function
// console.log(opnums(11,33))
// console.log(opnums(1,33))


//########################################################################################################
//#######################################    OOP    #####################################################
//########################################################################################################


//##################################    Constructor fn with prototypes  ##################################


// // Constructor fn :
// function Person(firstname,lastname,DoB)
// {
//     this.firstname = firstname
//     this.lastname = lastname 

//     this.DoB = new Date(DoB)                   // Date is also class => DoB is also object

//     this.fullname = function(){
//         return `${this.firstname} ${this.lastname}`
//     }
// }

// // instantiate object:

// const person1=new Person("John","Doe",'04/24/1980') // MM/DD/YYYY format

// console.log(person1.DoB)          // Thu Apr 24 1980 00:00:00 GMT+0530 (India Standard Time)
// console.log(typeof(person1.DoB))  // object
// console.log(person1.DoB.getFullYear()) 
// console.log(person1.fullname())  





// console.log(typeof(person1))   // object
// console.log(person1)
// output :
/*
    Person {firstname: "John", lastname: "Doe", DoB: Thu Apr 24 1980 00:00:00 GMT+0530 (India Standard Time), fullname: ƒ}
        -firstname: "John"
        -lastname: "Doe"
        -DoB: Thu Apr 24 1980 00:00:00 GMT+0530 (India Standard Time) {}
            __proto__: Object
        -fullname: ƒ ()
            length: 0
            name: ""
            arguments: null
            caller: null
            prototype: {constructor: ƒ}
            __proto__: ƒ ()
            [[FunctionLocation]]: 0.01.js:360
            [[Scopes]]: Scopes[2]
        -__proto__: Object
*/

//########################################################################################################

// incase we don't want particular fn associate with every instance in that case we can define that fn seperately using prototype 


// Constructor fn :
// function Person(firstname,lastname,DoB)
// {
//     this.firstname = firstname
//     this.lastname = lastname 

//     this.DoB = new Date(DoB)                  
// }

// Person.prototype.fullname = function(){
//     return `${this.firstname} ${this.lastname}`

// }

// instantiate object:
// const person1=new Person("John","Doe",'04/24/1980') 
// console.log(person1.fullname())
// console.log(person1)

// output :
/*
    Person {firstname: "John", lastname: "Doe", DoB: Thu Apr 24 1980 00:00:00 GMT+0530 (India Standard Time)}
        firstname: "John"
        lastname: "Doe"
        DoB: Thu Apr 24 1980 00:00:00 GMT+0530 (India Standard Time)
            __proto__: Object
        __proto__:
            fullname: ƒ ()
            constructor: ƒ Person(firstname,lastname,DoB)
            __proto__: Object
*/
//######################################### Classes ######################################################

// class
// class Person {
//     constructor(firstname, lastname, DoB) {
//         this.firstname = firstname
//         this.lastname = lastname
//         this.DoB = new Date(DoB)
//     }
//     fullname() {
//         return `${this.firstname} ${this.lastname}`
//     }
// }

// const person1=new Person("John","Doe",'04/24/1980') 
// console.log(person1.fullname())
// console.log(person1)

//########################################################################################################

//##############################################  Console   ##############################################


//// log()
// console.log("hiii");

//// error()
// console.error('This is a simple error'); 


//// warn()
// console.warn('This is a warning.');  


//// clear()
// console.clear();         // Used to clear the console.



//// time() and timeEnd()

//  let fun1 =   function(){  console.log('fun1 is running');  } 
//  let fun2 =   function(){  console.log('fun2 is running');  } 

// console.time('abc'); 
//  fun1(); 
//  fun2();
// console.timeEnd('abc'); 




//// table()
// console.table({'a':1, 'b':2}); 

// output :
//     ┌─────────┬────────┐
//     │ (index) │ Values │
//     ├─────────┼────────┤
//     │    a    │   1    │
//     │    b    │   2    │
//     └─────────┴────────┘



//// count()
// for(let i=0;i<5;i++){  console.count(i); } 

//// group() and groupEnd()     

// console.group('simple'); 
//   console.warn('warning!'); 
//   console.error('error here'); 
//   console.log('vivi vini vici'); 
// console.groupEnd('simple'); 


////group() and groupEnd() methods of the console object allows us to group contents in a separate block,which will be indented. 






//########################################################################################################