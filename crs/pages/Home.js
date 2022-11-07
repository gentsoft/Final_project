function Home(){
    const imjOll = 4;   //number of photos on the main slide
                        //ко-во фото на галавном слайде
    let criateElem = function(num){
        let elem = `
        <div class="main__Home__img">
            <img src="crs/img/home_${num}.jpg" alt="#">
        </div>`
        return elem;
    };

    let criateElemAll = function(){
        let elem = ``;
        for(let i = 0; i < imjOll; i++){
            elem = elem + criateElem(i+1);
        }
        return elem;
    };

    criateElemAll()

    let slaeder = function (){
        let elem = document.querySelector('.main__Home');
        if(!elem)return;
        let time = 5000;
        setTimeout(() => {
            elem.classList.add('main__Home_25')
            setTimeout(() => {
                elem.classList.remove('main__Home_25')
                elem.classList.add('main__Home_50')
                setTimeout(() => {
                    elem.classList.remove('main__Home_50')
                    elem.classList.add('main__Home_75')
                    setTimeout(() => {
                        elem.classList.remove('main__Home_75')
                        elem.classList.add('main__Home_50')
                        setTimeout(() => {
                            elem.classList.remove('main__Home_50')
                            elem.classList.add('main__Home_25')
                            setTimeout(() => {
                                elem.classList.remove('main__Home_25')
                                console.log('работает')
                                setTimeout(() => {
                                    slaeder()
                                }, time);
                            }, time);
                        }, time);
                    }, time);
                }, time);
            }, time);            
        }, time);        
    };
    
    setTimeout(() => {
        slaeder()
    }, 2000);

    let content =
        `
            <div class="main__Home">
                ${criateElemAll()}
            </div>
        `;

    return content;

}
console.log('метка Product');



export default Home;