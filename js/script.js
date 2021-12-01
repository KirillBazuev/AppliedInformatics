const btns = document.querySelectorAll('.nav-item')
console.log(btns)

for (let i = 0; i < btns.length; i++) {
    console.log();
    btns[i].addEventListener('click', function click(){
        console.log(i)
    })
}

// const messageOne = "hello"
// // alert(messageOne)

// let number = 123
// // alert('name'/2) NaN

// let name="Kirill"
// // alert(`My name is ${}`)

// //boolean
// let isTrue = 4<1
// alert(isTrue)

// let age=null

// //undefined
// let age

// const number = 404
// alert(typeof number)

// console.log('test')
// alert('test')
// const name = prompt('What is your name?','Kirill')
// alert(`Your name is ${name}`)
// let result = confirm("Are you boss?")
// console.log(result)

//alert makes string
// alert("6"/'2')

//alert(Boolean(2)) - true not a zero

// let x=1
// x= -x
// alert(x)

//let y=1
// let x = 3
// alert(x-y)

//alert('1'+2) 12
//alert(2+2+'1') 41
//alert('6'-1) 5

//let x = '2'
//let y = '3'
//alert(+x + +y) 5
//alert(Number(x)+Number(y)) 5

//let a=(1+2, 3+4) 7
//alert(a)

// const a=2
// const b=3
// console.log(a<b);
// console.log(a>b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);

// let year = prompt('what is your year of birth?')

// // if (year < 2000)
// // {
// //     console.log('vzrosly')
// // } else {
// //     console.log('zvezduk')
// // }

// let access = year<2000 ? 'vzroslyy':'zvezduk'
// console.log(access);

// let jsname = prompt("What is full name of JS?")
// let name = jsname=="ECMAScript"? "Yes":"No, it is ECMAScript"
// console.log(name);

// let login = prompt("Input your login")

// if (login==null || login==undefined)
// {
// alert("Canceled");
// }

// if (login=="admin")
//     {
//         let pass=prompt("Input your password")
        
//         if (login==null || login==undefined)
//         {
//             alert("Canceled");
//         }
            
//         if (pass="1234")
//         {
//              alert("Hello, Admin1234!");   
//         }
//         else if (pass=="") alert ("I don't know you");

//         if (login==undefined)
//         {
//             alert("Canceled");
//         }
//     }
// else if (login=="") alert("I don't know you");