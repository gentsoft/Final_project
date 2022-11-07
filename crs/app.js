import Header from './Header.js';
import Main from './Main.js';

function App() {

    const metaUtfElem = document.createElement('meta');
    metaUtfElem.setAttribute('charset', 'UTF-8');

    const metaViewportElem = document.createElement('meta');
    metaViewportElem.setAttribute('name', 'viewport');
    metaViewportElem.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const titleElem = document.createElement('title');
    titleElem.innerText = 'Final Project';

    const cssElem = document.createElement('link');
    cssElem.setAttribute('rel', 'stylesheet');
    cssElem.href = './css/style.css';

    const cssMediaElem = document.createElement('link');
    cssMediaElem.setAttribute('rel', 'stylesheet');
    cssMediaElem.href = './css/media.css';

    document.head.append(metaUtfElem, metaViewportElem, titleElem, cssElem, cssMediaElem);

    console.log('метка 1')

    const getRoot = function() {
        let elem = document.getElementById('root');
        console.log(elem)
        console.log(Header)
        let getHeder = function(){
                return elem.append(Header)
            };    
        getHeder();    
        return elem.append(Main());
        
    }
    
    getRoot();
}

console.log('метка 3');


export default new App();

