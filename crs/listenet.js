function Listener(){

    let filterElem = document.querySelectorAll(".main__Product__Filter_Sl");

    filterElem[3].addEventListener('click', function(){

        let inputGender = filterElem[0].querySelectorAll("input");
        let inputSeason = filterElem[1].querySelectorAll("input");
        let inputSize = filterElem[2].querySelectorAll("input");
        let allProduct = document.querySelectorAll(".main__Product__contnet");

        for(let i = 0; i < allProduct.length; i++){
            allProduct[i].classList.remove("main__Product__Filter_none");
        };

        let filterElemInsaid = function(state,teg){
            for(let i = 0; i < allProduct.length; i++){
                if(allProduct[i].children[1].children[teg].children[1].outerText != state){
                    allProduct[i].classList.add("main__Product__Filter_none")
                };
            };
        };

        for(let i=0, n=27; i < inputSize.length;i++, n++){
            if(inputSize[i].checked == true){
                console.log(i,n)
                let teg = 2;
                let state = n + '';

                for(let i = 0; i < allProduct.length; i++){
                    let iAraund = i;
                    allProduct[i].classList.add("main__Product__Filter_none");
                    let arrSize = allProduct[i].children[1].children[teg].children[1].outerText;
                    console.log(i+200,arrSize.split(',')[i],state)   
                    for(let i = 0; i < arrSize.split(',').length; i++){  
                        console.log(i+200,arrSize.split(',')[i],state)                        
                        if(arrSize.split(',')[i] == state){    
                            console.log(i+100,arrSize,state)                        
                            allProduct[iAraund].classList.remove("main__Product__Filter_none");
                        }
                    }
                };
                
            };
        };

        //gender[0],season[1],size[2] tegi
        if(inputGender[0].checked == true){
            let teg = 0;
            let state = 'мужская';
            filterElemInsaid(state,teg);
            console.log('M')};
        if(inputGender[1].checked == true){
            let teg = 0;
            let state = 'женская';
            filterElemInsaid(state,teg);
            console.log('W')};
        if(inputGender[2].checked == true){
            let teg = 0;
            let state = 'мальчику';
            filterElemInsaid(state,teg);
            console.log('ChM')};
        if(inputGender[3].checked == true){
            let teg = 0;
            let state = 'девочке';
            filterElemInsaid(state,teg);
            console.log('ChW')};
        if(inputSeason[0].checked == true){
            let teg = 1;
            let state = 'зима';
            filterElemInsaid(state,teg);
            console.log('winter')};
        if(inputSeason[1].checked == true){
            let teg = 1;
            let state = 'круглосезонная';
            filterElemInsaid(state,teg);
            console.log('all-season')};
        if(inputSeason[2].checked == true){
            let teg = 1;
            let state = 'осенне-весенняя';
            filterElemInsaid(state,teg);
            console.log('autumn-spring')};
        if(inputSeason[3].checked == true){
            let teg = 1;
            let state = 'лето';
            filterElemInsaid(state,teg);
            console.log('summer')};
        

    });

    filterElem[4].addEventListener('click', function(){
        let allProduct = document.querySelectorAll(".main__Product__contnet");
        for(let i=0; i < allProduct.length; i++)
            {allProduct[i].classList.remove("main__Product__Filter_none");}
    });
}

export default Listener;