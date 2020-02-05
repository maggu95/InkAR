
  // konfigurasjon og sensitive opplysninger  
  //Burde  finne en løsning for å skjule denne informasjonen senere
  var firebaseConfig = {
    apiKey: "AIzaSyAbTojGs7YjrywdR3i0QM4vdsCedRVxdMY",
    authDomain: "inkar-56afd.firebaseapp.com",
    databaseURL: "https://inkar-56afd.firebaseio.com",
    projectId: "inkar-56afd",
    storageBucket: "inkar-56afd.appspot.com",
    messagingSenderId: "803150610489",
    appId: "1:803150610489:web:226d40c3176ceb60b3cde8",
    measurementId: "G-J71E3TF6P2"
  };
  // starter sammenkobling til Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase); 


  //Oppretter tabell i firebase 
  var refMessage =  firebase.database().ref('TestTabell');

    //Starter prosessen hvor data legges inn i tabell
  function sendData(){
  var listeNavn = document.getElementById("tittel").value;
  var listeTekst = document.getElementById("tekst").value;   


  console.log(listeNavn.value); 
  console.log(listeTekst.value); 
  //Opretter objekt satt sammen av det vi skrev inn  
  var data = {
    Liste_Navn: listeNavn,
    Liste: listeTekst
  }

  //Database.Push data til database
  //ref.Message er variabelen med database og push er 
  //en kommando fra firebase som dytter data til databasen
  refMessage.push(data);
} 
