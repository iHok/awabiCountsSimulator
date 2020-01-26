let round25 = (x) => {return 0 <= x ? x-x%25 : (x-25)-x%25}

let dividedBy50 = (x) => {return x/50}

let setValue = (x,y) => {document.querySelector(x).setAttribute('value', y)}

let generate = () =>{
    let getInput = document.querySelectorAll("#getInput input");
    let setInput = document.querySelectorAll("#setInput input");

        console.dir(getInput);
        getInput.forEach((e,i) =>{
            console.log(e.name);
            console.log(e.name=="kaisu");
            if(e.name=="kaisu"){
                setValue( '#'+e.name , e.value)
            } else {
                setValue( '#'+e.name , dividedBy50(round25(e.value)))
            };
        })
//    setValue( '#eiki' , dividedBy50(round25(this.value)));

}

generate();