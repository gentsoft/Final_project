function Header(){
    const elem = document.createElement('header');
    elem.classList.add('header');

    elem.innerHTML = `
            <div class="container">

                <div class="header__logo">
                    <a href="/"><img src="https://via.placeholder.com/100x40" /></a>
                </div>

                <nav class="header__nav">
                    <ul>
                        <li><a class="header__nav_home" href="Final_project/">Главная</a></li>
                        <li><a class="header__nav_product" href="Final_project/catalog">Каталог</a></li>
                        <li><a class="header__nav_contact" href="Final_project/placeContact">Связь с нами</a></li>
                    </ul>
                </nav>

                <div class="header__save">
                <a href="/"><img src="https://via.placeholder.com/40x40" /></a>
                </div>

            </div>
        `;

    return elem;

}
console.log('метка 2');

export default Header();