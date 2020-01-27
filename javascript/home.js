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
  firebase.analytics();


    //Starter prosessen hvor data legges inn i tabell
  function sendData(){
  var listenavn = document.getElementById("tittel").value;
  var tekst = document.getElementById("tekst").value;   


  console.log(listenavn.value); 
  console.log(tekst.value); 

  var data = {
    Liste_Navn: listenavn,
    Liste: tekst
  }
  refMessage.push(data);
} 
