
var SliderSize = 250;
var SliderSpeed;
function changeText() {
        const textColor = document.getElementById("textColor").value;
        document.getElementById("slider-text").style.color = textColor;
      }

      function changebg() {
        console.log("red");
        
        const bgColor = document.getElementById("bgColor").value;
        document.getElementById("slide-display").style.backgroundColor =
          bgColor;
      }


      function changeSize(){
        const textSize = document.getElementById("textSize").value;
        SliderSize  = textSize
        validateForm()   
    }
    function changeSpeed(){
        const textSpeed = document.getElementById("textSpeed").value;
        console.log(textSpeed,"textSize");
        SliderSpeed  = textSpeed
        validateForm()  
              }
      function validateForm() {
        const sliderText = document.getElementById("slider-input").value;
        if (sliderText.toString().length > 0) {
          document.getElementById("slide-display").style.width = "100%";
          document.getElementById("slider-text").innerHTML = `<marquee behavior="scroll" style="font-size: ${SliderSize}px" scrollamount="${SliderSpeed}" direction="">${sliderText}</marquee>`;
        } else {
          alert("Enter the text you wish to display");
        }
        return false;
      }
      function goback() {
        document.getElementById("slide-display").style.width = "0%";
      }