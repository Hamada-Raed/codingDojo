var animalImg = document.querySelector("#animal")
console.log(animalImg)

function PickBanach(element) {
    console.log(animalImg.src)
    animalImg.src = "Banach.jpeg"

}
function PickHilbert(element){
    animalImg.src = "Hilbert.jpeg"
}