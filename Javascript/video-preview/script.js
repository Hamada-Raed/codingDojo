// console.log("page loaded...");
// document.getElementById("myVideo").addEventListener("mouseover", function() {
// 	this.play();
// });

// document.getElementById("myVideo").addEventListener("mouseleave", function() {
// 	this.pause();
// });
function playVideo(vid){
	vid.play();
}
function pauseVideo(vid){
	vid.pause();
	// vid.currentTime = 0;
}