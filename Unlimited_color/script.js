const stop_button = document.querySelector("#stop");
const start_button = document.querySelector("#start");
let intervalId;
// setInterval()
// console.log(stop_button, start_button)
const change_color = function () {
  const rand_col = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += rand_col[Math.floor(Math.random() * 16)];
  }
  return hex;
};
start_button.addEventListener("click", () => {
  if(!intervalId){
    intervalId=setInterval(changebgcolor, 1000);
  }
  function changebgcolor() {
    document.body.style.backgroundColor = change_color();
  }
});
stop_button.addEventListener("click", () => {
  clearTimeout(intervalId)
  intervalId=null;
});
// console.log(Math.floor(Math.random()*16))
