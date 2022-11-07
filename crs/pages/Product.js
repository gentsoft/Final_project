let content = ``;

let avaitInfo = function(){
let contentF = async function(){
    await fetch('https://gentsoft.github.io/FakIpi/crs/info.json')
    .then(res=>res.json())
    .then(json=>{
        // console.log(json);
        console.log(json.shoes);
        let shoess = json.shoes;
        for(let i = 1; i <=33; i++){
            // console.log(shoess[i].photo)
            let contentPas = `
                <div class="main__Product__contnet">
                    <div class="main__Product__img">
                        <img src="${shoess[i].photo}" alt="#">                
                    </div>
                    <div class="main__Product__info">
                        <div class="main__Product__info_gender">
                            <span>Пол:</span><span>${shoess[i].gender}</span>
                        </div>
                        <div class="main__Product__info_season">
                            <span>Сезон:</span><span>${shoess[i].season}</span>
                        </div class="main__Product__info_size">  
                        <div>
                            <span>Размер:</span><span>${shoess[i].size}</span>
                        </div> 
                        <div class="main__Product__info_vendor">
                            <span>Инвентарный №:</span><span>${shoess[i].vendor}</span>
                        </div>
                        <div class="main__Product__info_price">
                            <span>Цена:</span><span>${shoess[i].price}</span>
                        </div>         
                    </div>
                
                </div>
            `;
            content = content + contentPas;
        }
    })
};
contentF()
}
avaitInfo()

function Product(){
 return content
}

console.log('метка Product');

export default Product;
