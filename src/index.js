function generateSong(event) {
  event.preventDefault();

  new Typewriter("#song", {
    strings: "Rose smiled at me on the subway",
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

let songElement = document.querySelector("#song-generator-form");
songElement.addEventListener("submit", generateSong);
