"use script"

const adviceText = document.querySelector(".advice-text");
const adviceId = document.querySelector(".advice-id");



function getAdvice() {
fetch("https://api.adviceslip.com/advice") 

  .then((response) => response.json())                  

  .then((data) => {

    adviceText.innerHTML = `"${data.slip.advice}"`; 
  })
  .catch((error) => {
    console.error("Error fetching advice:", error);
    adviceText.innerHTML = "Sorry, could not fetch advice at this time.";
  });
}








