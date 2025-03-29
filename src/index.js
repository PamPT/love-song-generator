function displaySong(response) {
  console.log("Song Generated");
  new Typewriter("#song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "ca301o346f2bf4fa483tcabaf1a295d2";
  let prompt = `User instructions: Generate a love song that includes ${instructionsInput.value}`;
  let context =
    "You are a romantic song expert and love to write short love songs. Your mission is to generate a short love song, separated in verses, in basic HTML and separate each line with a  <br />.  Do not include a title to the song. Do not write html at the beggining.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displaySong);
}

let songElement = document.querySelector("#song-generator-form");
songElement.addEventListener("submit", generateSong);
