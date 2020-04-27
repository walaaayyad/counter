const countEl = document.getElementById('count');
currentNum()
timedRefresh(10000)
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
