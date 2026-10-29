const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const cartmanImage = document.querySelector()


const messages = [
  "Screw you guys, I'm going home!",
  "Respect my authoritah!",
  "No, kitty, this is my pot pie!" ,
 "Words cannot express how much I hate you guys.",
  "I'm not fat, I'm big-boned",
  "Are you sure? Are you HIV Positive?",
  "Mem, Mem!"
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});


button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);
})