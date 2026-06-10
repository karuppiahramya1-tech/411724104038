console.log("Print Statement")
const a=20;
const b=30;
console.log(a+b)

const str="Ramya"
console.log(str)

const arr=[1,2.4,"Divya",false]
console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr[1]=3.1
console.log(arr[1])

arr.push("Sibi")
console.log(arr)


arr.pop()
console.log(arr)


function example(){
    console.log("I am writing something")
}

const ptag=document.getElementById("ptag")
ptag.innerHTML="Print Statement"


const input=document.getElementById("input")
const output=document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.textContent=input.value
})

const first=document.createElement("h1")
first.textContent="Some text"
document.body.appendChild(first)

first.remove()

