let init = () => {
	getPageName();
	let a = document.querySelectorAll('a');
	for (let i = 0; i < a.length; i++)
		//	a[i].addEventListener('click', getPageName,false);
		//	a[i].addEventListener('click', getHistory,false);
		a[i].addEventListener('click', addTo, false);
}
let getPageName = () => {
	console.log("hibar");
	var path = window.location.pathname;
	var hash = location.hash;
	console.log(path);
	console.log(hash);
}
let getHistory = () => {
	console.log(history.length);
}
const mainTitle = document.querySelector('title').textContent;
let barHistory = [];
let updPageTitle = (value) => {
	document.querySelector('title').textContent = mainTitle + '#' + value;
}
let addTo = (e) => {
	e.preventDefault();
	console.log(e.target.href);
	let hash = null;
	if (e.type === 'click') {
		location.hash = e.target.href.split('#')[1]; //if(e.type==='click'){  location.hash='';  location.hash=hash;  }
	} else { //popstate
		hash = location.hash.replace('#', '');
	}
	let label = document.querySelector('a[href="#' + hash + '"]');
	label = (label === null) ? 'Home' : label.textContent;
	console.log(label + '#' + hash);
	let len = barHistory.length; //ostatni wolny indeks tablicy

	updPageTitle(label);

	history.pushState(hash, label, '#' + hash);
	//					contact	Contact		#contact
	barHistory[len] = { hashKey: hash, value: label };	//labe.replace('.html')
	(e.type == 'click') ? location.hash = hash : null;
	console.log(barHistory);

}

window.addEventListener('load', init, false);


//window.addEventListener('popstate',getPageName,false);