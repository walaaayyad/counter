const countEl = document.getElementById('count');
currentNum()
// timedRefresh(60000)//1min
// timedRefresh(120000)//2min
timedRefresh(1500)//1.5 sec

// https://api.countapi.xyz/hit/youtube.com/

function currentNum (){
	fetch(`https://api.countapi.xyz/get/youtube.com/`)
	.then(res=>res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

function timedRefresh(time){
	setTimeout(()=>{location.reload(true)},time);
}
