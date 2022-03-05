(function(){
    var fasIcon = document.getElementById("fas")
    var cart = document.getElementById("icon")
    cart.addEventListener("click", function(){

    })
})

(function (){
    var cartBtn = document.querySelectorAll(".span");

    cartBtn.forEach(function(btn) {
        btn.addEventListener("click", function (event){
            console.log(event);
        })
    })
}
    )

    var Tee = document.querySelectorAll("span")
    console.log("Tee", Tee)



    // function decleared
    function addToCart(product, dollar, price){
        alert(product + " is "+ dollar + price)
    }

    function like(itemId) {
        const elem = document.getElementById(itemId);
        console.log(elem.classList)
        if(elem.classList.contains("colorBlue","coloo", "coolo" )){
            elem.classList.remove("colorBlue","coloo", "coolo");
        } else {
            elem.classList.add("colorBlue","coloo", "coolo");
        }
    }