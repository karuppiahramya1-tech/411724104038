console.log("A")
console.log("B")
console.log("C")

// const promise=new Promise((resolve,reject)=>{
    // const success=true;
    // if(success){
    //     console.log("Done")
    // }
    // else{
    //     console.log("No")
    // }

    // setTimeout(()=>{
    //     console.log("Hi")
    // },2000)

    // setTimeout(()=>{
    //     console.log("Done")
    // },0)
    // console.log("D")

    console.log(1)
    console.log(2)
    console.log("Hi")
    function example(){
        console.log("Hello")
    }
    const example1=()=>{
        const a=1;
        const b=2;
        console.log(1+2);
    }

    setTimeout(example,30000)
    setTimeout(example1,450)

// })
// promise.then(res=>{console.log(res)}).catch(err=>{console.log(err)})