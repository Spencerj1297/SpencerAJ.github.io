var bomb = Math.floor(Math.random() * 12)
var treasure = Math.floor(Math.random() * 12)
 if (bomb === treasure) {
    treasure = Math.floor(Math.random() * 12)
 }

//Make sure that bomb and treasure are not in the same location
//

const treasureFind = (id) => {
  if (id === bomb) {
    document.getElementById(id).innerHTML = "💣"
  } else if (id === treasure) {
    document.getElementById(id).innerHTML = "💰"
  } else {
    document.getElementById(id).innerHTML = " "
  }
}
