const rndBtn = document.getElementById("rnd-btn");
const randomP= document.getElementById("random-ideas");


rndBtn.addEventListener("click", function(){

  fetch ('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
      randomP.textContent= data.activity
  })
})



// TODO
// REFRACTOR INTO A DISCORD BOT using discord.js -> https://bored-api.appbrewery.com/