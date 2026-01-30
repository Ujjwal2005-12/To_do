let arr=[]

// let task=document.getElementsByName("task-text");
// let lst = document.getElementsByClassName("list");
const add=document.querySelector(".add");
let dlt=document.querySelector(".delete");
let comp=document.querySelector(".complete")

let list=document.querySelector(".task-text");
let tcount=document.querySelector(".task-count");
let clr=document.querySelector(".Clear all");


// function add() {
//         arr.push(val);
//         console.log("Added");
// }
function show() {
     for (const x of arr) {
        const item=document.createElement("li");
        item.textContent=x       
        console.log(x);
        

            }
}

/*while (true) {


    // let inp=Number(prompt("1:add\t2:pop\t3:show\t4:quite"))
    

    if (inp==1) {
        let val=prompt("Enter Value")
        arr.push(val);
        console.log("Added");
    }
    else if (inp==2) {
        if (arr.length==0) {
            console.log("Empty list");
            
        } else {
            
            arr.pop();
            console.log("Popped Successfully");
        }
    }
    else if (inp==3) {
        if (arr.length==0) {
            console.log("Empty list");
            
        } else {
            
            for (const x of arr) {
                console.log(x)
            }
        }
    }
    else if (inp==4) {
        console.log("Quiting app");
        break;
    }
    else{

        console.log("Invalid")
    }
    
}*/

add.addEventListener("click",()=>{

    console.log("btn target");
});