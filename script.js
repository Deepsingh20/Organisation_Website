document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Gurmat Lehar Organisation";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To GLO";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });




let left = document.querySelector(".left");
let right = document.querySelector(".Right");
let slider = document.querySelector(".slider");

const Gimg = document.querySelectorAll(".Gimg")

let slideNumber = 1;
const length = Gimg.length;

const nextSlide =()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`; 
    slideNumber++;
}

const prevSlide =()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`; 
    slideNumber--;
}

const getFirstSlide =()=>{
    slider.style.transform = `translateX(0px)`; 
    slideNumber = 1;
}

const getLastSlide =()=>{
    slider.style.transform = `translateX(-${(lenght-1)*800}px)`; 
    slideNumber = lenght;
}



right.addEventListener("click", function(){
    if(slideNumber < length){
       nextSlide();
    }else{
        getFirstSlide();
    }
});

left.addEventListener("click", function(){
    if(slideNumber > 1){
       prevSlide();
    }else{
        getLastSlide();
    }
});




