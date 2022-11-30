let linksWork = function () {
    console.log('ССЫ ЛОЧКИ',document.location.href,window.location.href)
    window.location.href= '#main';
    console.log('ССЫ ЛОЧКИ',document.location.href,window.location.href)
}

export default linksWork;

// document.location.href	https://realadmin.ru/saytostroy/?page=4#top
// document.location.protocol	https:
// document.location.host	realadmin.ru
// document.location.pathname	/saytostroy/
// document.location.search	?page=4
// document.location.hash	#top