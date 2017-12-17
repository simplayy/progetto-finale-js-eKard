/**
 * Scelta icone
 *
 */
function ico(c){
  img.width=330;


	switch(c){
			case 1:
        img.src="img/snowman.png";
        img.height=250;
        break;
      case 2:
        img.src="img/egg.png";
        img.height=100;
        break;
      case 3:
        img.src="img/la.png";
        img.height=250;

	}
}

/**
 * Cambia colore di sfondo della cartolina
 *
 */
function bac(c){
  card = document.getElementById("cardbox");

  switch(c){
    case 1:
      card.style.backgroundColor = "#005c99";
      break;
    case 2:
      card.style.backgroundColor= "#66b266";
      break;
    case 3:
      card.style.backgroundColor= "#f25e5e";
      break;
    case 4:
      card.style.backgroundColor= "#631e50";
      break;
    case 5:
      card.style.backgroundColor= "#9bd32f";
      break;
    case 6:
      card.style.backgroundColor= "#009f94";
  }
}

/**
 * Applica l'immagine di sfondo personalizzata
 */
function load_image(u) {
  img = document.getElementById("img");
  url = document.getElementById("urli").value;
  img.src = url;
  img.width=430;
  img.height=300;
}

/**
 * Carica il testo inserito dall'utente
 */
function load_text() {
  message = document.getElementById("message");
  msg = document.getElementById("msg");
  msg.innerHTML = message.value;
}

/**
 * Rende visibile o invisibile la cartolina
 * Utilizzata dal pulsante on/off
 */
function ante() {
  preview = document.getElementById("antebox");
  if (preview.style.display == "") {
    preview.style.display = "none";
  } else {
    preview.style.display = "";
  }
}
