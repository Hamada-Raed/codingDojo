const cursor = document.querySelectorAll(".cursor")
var timeout; 

document.addEventListener("mouseMove" , (e)=> {
    let x = e.page(x)
    let y = e.page(y)
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display= 'block';

    function mousestop(){
        cursor.style.display = 'none';
    }    

    clearTimeout(timeout); 
    timeout = setTimeout(mousestop,1000)

});