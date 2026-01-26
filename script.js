let arr=[]

while (true) {
    let inp=Number(prompt("1:add\t2:pop\t3:show\t4:quite"))
    

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
    
}