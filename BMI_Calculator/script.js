const form = document.querySelector("form");
// console.log(user_input);

form.addEventListener("submit", (event) => {
    event.preventDefault()
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  // result =
  console.log(height,weight);
  
  const bmi = (weight / ((height/100)**(2))).toFixed(2)

  if ((height != "" && height > 0) && (weight != "" && weight > 0)) {
    result.innerHTML = `BMI: ${bmi}`;
  }
  else result.innerHTML = "The Input Field is invalid"  
});
