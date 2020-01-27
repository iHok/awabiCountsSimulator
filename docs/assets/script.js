let round25 = (x) => {return 0 <= x ? x-x%25 : (x-25)-x%25}

let dividedBy50 = (x) => {return x/50}

let setValue = (x,y) => {document.querySelector(x).setAttribute('value', y)}

let calc = () =>{
    let getInputHouju = document.querySelectorAll("#getInput input:not([name='回数']):not([name='合計'])");
    let kaisu = document.querySelector("#getInput input[name='回数']").value;
    let houjuGenerate = document.querySelectorAll("#generateResult tr");
    let goukei = 0;
    let mainGenerate = 0;
    let subGenerate = 0;
    let goukeiZansu = 0;

    getInputHouju.forEach((e) => {
        goukei = Number(goukei) + Number(e.value);
        mainGenerate = document.querySelectorAll(".main." + e.name).length;
        subGenerate = document.querySelectorAll(".sub." + e.name).length / 2;
        goukeiZansu = Number(goukeiZansu) + Math.floor(Number(dividedBy50(round25(e.value))-mainGenerate-subGenerate))
        setValue( '#'+e.name , Number(dividedBy50(round25(e.value)) - Number(mainGenerate) - Number(subGenerate)))
    })
    setValue('#合計', goukei);
    setValue('#回数', Number(kaisu) + Number(houjuGenerate.length));
    setValue('#合計残数', goukeiZansu);
}

let generate = () => {
    let tableGenerate = document.querySelector("#generateResult"); 
    let getSelect = document.querySelectorAll(".select select");
    const trGenerate = `
    <tr>
        <td class="main ${getSelect[0].value}">${getSelect[0].value}</td>
        <td class="sub ${getSelect[1].value}">${getSelect[1].value}</td>
        <td class="sub ${getSelect[2].value}">${getSelect[2].value}</td>
        <td><input type="button" value="削除" onclick="this.parentNode.parentNode.remove();calc();"></td>
    </tr>
    `;
    tableGenerate.insertAdjacentHTML('beforeend', trGenerate); 
    getSelect[0].selectedIndex=0;
    getSelect[1].selectedIndex=0;
    getSelect[2].selectedIndex=0;
}

calc();