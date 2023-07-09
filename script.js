// Menu Button
document.querySelector(".img").addEventListener("click",function(){
        document.querySelector("#check").toggleAttribute("checked");
        document.querySelector(".navbar").style.transitionDuration = "0.6s";
})


// Image Changing
let image1 = () => {
    document.getElementById("demo").src = "gallery-1.jpg";
}

let image2 = () => {
    document.getElementById("demo").src = "gallery-2.jpg";
}

let image3 = () => {
    document.getElementById("demo").src = "gallery-3.jpg";
}

let image4 = () => {
    document.getElementById("demo").src = "gallery-4.jpg";
}



    // Login button form change
    function login(){
        document.querySelector(".form1").style.marginLeft = "45px";
        document.querySelector(".line").style.marginLeft = "40px";
        document.querySelector(".form2").style.marginRight = "-350px";

        if(window.innerWidth <= 837 && window.innerWidth >= 756){
                document.querySelector(".form1").style.marginLeft = "35px";
                document.querySelector(".line").style.marginLeft = "40px";
                document.querySelector(".form2").style.marginRight = "-350px";
        }

        if(window.innerWidth <= 756 && window.innerWidth >= 731 ||  window.innerWidth <= 731 && window.innerWidth >= 665){
                document.querySelector(".form1").style.marginLeft = "15px";
                document.querySelector(".line").style.marginLeft = "30px";
                document.querySelector(".form2").style.marginRight = "-340px";
        }
        if(window.innerWidth <= 453 && window.innerWidth >= 425 || window.innerWidth <= 428 && window.innerWidth >= 415){
            document.querySelector(".line").style.marginLeft = "40px";
        }
        if(window.innerWidth <= 415 && window.innerWidth >= 382){
            document.querySelector(".line").style.marginLeft = "40px";
        }
        if(window.innerWidth <= 382 && window.innerWidth >= 345){
            document.querySelector(".line").style.marginLeft = "30px";
        }
        if(window.innerWidth <= 345){
            document.querySelector(".line").style.marginLeft = "15px";
        }

    }
    
    // Register button form change
    function register(){
        document.querySelector(".form1").style.marginLeft = "-345px";
        document.querySelector(".line").style.marginLeft = "195px";
        document.querySelector(".form2").style.marginRight = "49px";

        if(window.innerWidth <= 837 && window.innerWidth >= 756){
            document.querySelector(".form1").style.marginLeft = "-345px";
            document.querySelector(".line").style.marginLeft = "159px";
            document.querySelector(".form2").style.marginRight = "49px";
        }

        if(window.innerWidth <= 756 && window.innerWidth >= 731 || window.innerWidth <= 731 && window.innerWidth >= 665){
            document.querySelector(".form1").style.marginLeft = "-345px";
            document.querySelector(".line").style.marginLeft = "139px";
            document.querySelector(".form2").style.marginRight = "49px";
        }
        if(window.innerWidth <= 453 && window.innerWidth >= 425 || window.innerWidth <= 428 && window.innerWidth >= 415){
            document.querySelector(".line").style.marginLeft = "175px";
        }
        if(window.innerWidth <= 415 && window.innerWidth >= 382){
            document.querySelector(".line").style.marginLeft = "165px";
        }
        if(window.innerWidth <= 382 && window.innerWidth >= 345){
            document.querySelector(".line").style.marginLeft = "147px";
        }
        if(window.innerWidth <= 345){
            document.querySelector(".line").style.marginLeft = "117px";
        }

    }
        