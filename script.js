// Deklarasi Konten
const map = ["Circle", "Moonland", "Island", "Desert", "Half", "Fireland", "Icecross", "Near", "Double", "Around", "Fourwar", "Greataxe", "Deathwar", "Bigarrow"];
const masters = ["Daimyou", "Wizard", "Sorcerer", "Darklord", "Summoner"];
const magic = [50, 60, 70, 80, 90, 100];
const bgm = [1, 2, 3, 4, 5, 6];

// Function
function kali() {
  document.getElementById("kali").innerHTML = Math.floor(Math.random() * 101) + "×";
}

function generator() {
  document.getElementById("map").innerHTML = "Map: " + map[Math.floor(Math.random() * map.length)];

  let master = document.getElementsByClassName("master");
  let magicdoc = document.getElementsByClassName("magic");
  let bgmdoc = document.getElementsByClassName("bgm");

  for (let i = 0; i < master.length; i++) {
    master[i].innerHTML = "Master: " + masters[Math.floor(Math.random() * masters.length)];
  }

  for (let c = 0; c < magicdoc.length; c++) {
    magicdoc[c].innerHTML = "Magic: " + magic[Math.floor(Math.random() * magic.length)];
  }

  for (let u = 0; u < bgmdoc.length; u++) {
    bgmdoc[u].innerHTML = "BGM: " + bgm[Math.floor(Math.random() * bgm.length)];
  }
}