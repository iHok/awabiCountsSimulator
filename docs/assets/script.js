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
    setValue('#合計残数', 0 <= goukeiZansu ? goukeiZansu : '-');
    generateCheck();
}

let generate = () => {
    let tableGenerate = document.querySelector("#generateResult"); 
    let getSelect = document.querySelectorAll(".select select");
    const trGenerate = `
    <tr class="trGenerate">
        <td class="main ${getSelect[0].value}">
            <div>
                <select onchange="this.parentNode.parentNode.querySelector('span').innerText=this.value;this.parentNode.parentNode.className='main '+this.value;calc();">
                    <option ${getSelect[0].value=='英気' ? 'selected' : ''}>英気</option>
                    <option ${getSelect[0].value=='気力' ? 'selected' : ''}>気力</option>
                    <option ${getSelect[0].value=='猛撃' ? 'selected' : ''}>猛撃</option>
                    <option ${getSelect[0].value=='勇猛' ? 'selected' : ''}>勇猛</option>
                    <option ${getSelect[0].value=='堅守' ? 'selected' : ''}>堅守</option>
                    <option ${getSelect[0].value=='守備' ? 'selected' : ''}>守備</option>
                    <option ${getSelect[0].value=='俊敏' ? 'selected' : ''}>俊敏</option>
                    <option ${getSelect[0].value=='精密' ? 'selected' : ''}>精密</option>
                    <option ${getSelect[0].value=='拒絶' ? 'selected' : ''}>拒絶</option>
                </select>
                <span>${getSelect[0].value}</span>
            </div>
        </td>
        <td class="sub ${getSelect[1].value}">
            <div>
                <select onchange="this.parentNode.parentNode.querySelector('span').innerText=this.value;this.parentNode.parentNode.className='sub '+this.value;calc();">
                    <option>　</option>
                    <option ${getSelect[1].value=='英気' ? 'selected' : ''}>英気</option>
                    <option ${getSelect[1].value=='気力' ? 'selected' : ''}>気力</option>
                    <option ${getSelect[1].value=='猛撃' ? 'selected' : ''}>猛撃</option>
                    <option ${getSelect[1].value=='勇猛' ? 'selected' : ''}>勇猛</option>
                    <option ${getSelect[1].value=='堅守' ? 'selected' : ''}>堅守</option>
                    <option ${getSelect[1].value=='守備' ? 'selected' : ''}>守備</option>
                    <option ${getSelect[1].value=='俊敏' ? 'selected' : ''}>俊敏</option>
                    <option ${getSelect[1].value=='精密' ? 'selected' : ''}>精密</option>
                    <option ${getSelect[1].value=='拒絶' ? 'selected' : ''}>拒絶</option>
                    <option ${getSelect[1].value=='属性' ? 'selected' : ''}>属性</option>
                </select>
                <span>${getSelect[1].value}</span>
            </div>
        </td>
        <td class="sub ${getSelect[2].value}">
            <div>
                <select onchange="this.parentNode.parentNode.querySelector('span').innerText=this.value;this.parentNode.parentNode.className='sub '+this.value;calc();">
                    <option>　</option>
                    <option ${getSelect[2].value=='英気' ? 'selected' : ''}>英気</option>
                    <option ${getSelect[2].value=='気力' ? 'selected' : ''}>気力</option>
                    <option ${getSelect[2].value=='猛撃' ? 'selected' : ''}>猛撃</option>
                    <option ${getSelect[2].value=='勇猛' ? 'selected' : ''}>勇猛</option>
                    <option ${getSelect[2].value=='堅守' ? 'selected' : ''}>堅守</option>
                    <option ${getSelect[2].value=='守備' ? 'selected' : ''}>守備</option>
                    <option ${getSelect[2].value=='俊敏' ? 'selected' : ''}>俊敏</option>
                    <option ${getSelect[2].value=='精密' ? 'selected' : ''}>精密</option>
                    <option ${getSelect[2].value=='拒絶' ? 'selected' : ''}>拒絶</option>
                    <option ${getSelect[2].value=='属性' ? 'selected' : ''}>属性</option>
                </select>
                <span>${getSelect[2].value}</span>
            </div>
        </td>
        <td><button onclick="this.parentNode.parentNode.parentNode.remove();calc();">削除</button></td>
        <td class="generateCheck"><label><input type="checkbox" onclick="generateCheck()"></label></td>
    </tr>
    `;
    tableGenerate.insertAdjacentHTML('beforeend', trGenerate); 
    getSelect[0].selectedIndex=0;
    getSelect[1].selectedIndex=0;
    getSelect[2].selectedIndex=0;
}

let generateCheck = () =>{
    let getInputHouju = document.querySelectorAll("#getInput input:not([name='回数']):not([name='合計'])");
    let houjuGenerate = document.querySelectorAll("#generateResult tr");
    let usedKakera = {};

    getInputHouju.forEach((e) => {usedKakera[e.name] = e.value;})
    houjuGenerate.forEach((e)=>{
        if(e.querySelector(".generateCheck input").checked){
            let kakera = e.querySelectorAll(".trGenerate span");
            let usedKakeraHTML =`
            <input type='checkbox' onclick='generateCheck()' checked>
            ${kakera[0].textContent}${usedKakera[kakera[0].textContent] = usedKakera[kakera[0].textContent] - 50}`
            kakera[1].textContent=="　" ? "" : usedKakeraHTML=usedKakeraHTML+`　${kakera[1].textContent}${usedKakera[kakera[1].textContent] = usedKakera[kakera[1].textContent] - 25}`;
            kakera[2].textContent=="　" ? "" : usedKakeraHTML=usedKakeraHTML+`　${kakera[2].textContent}${usedKakera[kakera[2].textContent] = usedKakera[kakera[2].textContent] - 25}`;
            e.querySelector(".generateCheck label").textContent = '';
            e.querySelector(".generateCheck label").insertAdjacentHTML('beforeend', usedKakeraHTML);
        } else {
            e.querySelector(".generateCheck label").textContent = '';
            e.querySelector(".generateCheck label").insertAdjacentHTML('beforeend', "<input type='checkbox' onclick='generateCheck()'>");
        }

    })
}

calc();