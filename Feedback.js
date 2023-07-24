document.getElementById(feedbackForm).addEventListener("submit",function(event){
    event.preventDefault();

    function thankyou(){
        alert("Thank you, ${name}, for your feedback! Here is 500 points for your our way of saying thank you")
    }

    const name = document.getElementById("name").value;
    
    const email = document.getElementById(email).value;
    
    const membership = document.getElementById("membership").value;
    
    const rate = document.getElementById("rate");
    
    const sliderValue = document.getElementById("sliderValue");
    
    rate.addEventListener("input",function() {
        sliderValue.textContent = rate.value;
    })
   
    const question1 = document.getElementById("question1");
    
    const question2 = document.getElementById("question2");
    
    const question3 = document.getElementById("question3");
    
    const feedback = document.getElementById("feedback");
    
    
})