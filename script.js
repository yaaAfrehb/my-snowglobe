
const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const cartmanImage = document.querySelector("#cartmanImage");

const audio = new Audio();

const scenes = [
  {
    image: "carts.png",
    message: "Screw you guys, I'm going home!",
    sound: "audio/quote1.mp3"
  },
  {
    image: "cop.png",
    message: "Ay! I am a cop and you will respect my authoritah!",
    sound: "audio/authoritah.mp3"
  },
  {
    //image: "cartman.png",
    //message: "Words cannot express how much I hate you guys.",
    //sound: "audio/quote4.mp3"
  },
  {
    image: "carts.png",
    message: "I'm not fat, I'm big-boned",
    sound: "audio/quote5.mp3"
  },
  {
    image: "cartman.png",
    message: "Are you sure? Are you HIV Positive?",
    sound: "audio/quote6.mp3"
  },
  {
    image: "carts.png",
    message: "Mem, Mem!",
    sound: "audio/quote7.mp3"
  }
];

button.addEventListener("click", () => {
  // Pick a random scene
  const pick = Math.floor(Math.random() * scenes.length);
  const scene = scenes[pick];

  // Change Cartman's picture and message
  cartmanImage.src = scene.image;
  message.textContent = scene.message;

  // Play the matching sound
  audio.pause();
  audio.currentTime = 0;
  audio.src = scene.sound;

  audio.play().catch(error => {
    console.log("Check the audio file name and path:", error);
  });

  // Shake the globe
  globe.classList.remove("shaking");
  void globe.offsetWidth;
  globe.classList.add("shaking");

  setTimeout(() => {
    globe.classList.remove("shaking");
  }, 600);
});
