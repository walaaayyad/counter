/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
} 

function back(params) {
  window.history.back();
}
// const mySession=sessionStorage.getItem('login'),
//   myLocal =localStorage.getItem('login');
// function skip() {
//   sessionStorage.setItem('login','skip');
//   window.history.back();
//   console.log('udhogiul');
// }
// if( localStorage.getItem("login")=== "0"){
//   console.log('welcome');
//   console.log(myLocal);
  
// }else if (mySession==='skip') {
//   skip()
//   console.log(myLocal);
//   console.log(`skip ${mySession}`);
  
// } else if(myLocal!=="wait") {
//   location.replace("./pages/addToHomeScreen.html")
  
//   localStorage.setItem("login","wait")
//   console.log(myLocal);

// }
