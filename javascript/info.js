
var skjema =
'<form>'
+'<div class="form-group">'
+'<label for="exampleFormControlInput1">'
+'Email addresse</label><input type="email" class="form-control" id="Input1" placeholder="name@example.com">'
+'</div>'
+'<div class="form-group"> '
+'<label for="exampleFormControlSelect1">Hva er grunn for kontakt?</label>'
+'<select class="form-control" id="input2"><option>Problem med opplastning</option><option>Problem med konto</option><option>Problem med hiromarker</option><option>Juridisk</option><option>Annet</option></select></div><div class="form-group">'
+'<label for="exampleFormControlTextarea1">Skriv kort hva saken dreier seg om</label><textarea class="form-control" id="input3" rows="3"></textarea> <br>' 
+'<button onClick="hentInfo()" type="button" class="btn btn-secondary btn-sm">Send inn</button></div>'
+'</form>'; 

console.log(firebase);


//her hurtiglagres info
var email = 'test';
var kategori; 
var beskrivelse; 
var firebaseRef; 

//Når kunde trykker send vil infoen lagres i database
function hentInfo() {
email = $('#Input1').val(); 
kategori = $('#input2').val(); 
beskrivelse = $('#input3').val(); 
firebaseRef = firebase.database().ref('kontakt');

console.log(email); 
console.log(kategori); 
console.log(beskrivelse); 

var data = {
  email: email,
  kategori: kategori,
  beskrivelse: beskrivelse
}

firebaseRef.push(data);
}
