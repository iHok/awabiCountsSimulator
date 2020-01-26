let round25 = (x) => {return 0 <= x ? x-x%25 : (x-25)-x%25}

let dividedBy50 = (x) => {return x/50}

let setValue = (x,y) => {document.querySelector(x).setAttribute('value', y)}

let calc = () =>{
    let getInput = document.querySelectorAll("#getInput input");

    getInput.forEach((e,i) =>{
        if(e.name=="kaisu"){
            setValue( '#'+e.name , e.value)
        } else {
            setValue( '#'+e.name , dividedBy50(round25(e.value)))
        };
    })
}

let generate = () => {
    let getSelect = document.querySelectorAll(".select select");
    getSelect.forEach((e,i)=>{
        console.dir(e.value);
    })
}

calc();