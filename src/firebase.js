import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBcaQr-uMH7LQcFETQLiXk5LQ1WuG9nrwY",
    authDomain: "togomx-d4928.firebaseapp.com",
    databaseURL: "https://togomx-d4928.firebaseio.com",
    projectId: "togomx-d4928",
    storageBucket: "togomx-d4928.appspot.com",
    messagingSenderId: "87733822528"
};
firebase.initializeApp(config);
export default firebase;

export async function registrarTienda(tienda){
    const user = {
            displayName:tienda.responsable,
            email:tienda.email
        };
    //creamos el usuario
    const r = await firebase.auth().createUserWithEmailAndPassword(tienda.email, tienda.password)
    tienda["owner"] = r.uid;
    //creamos la tienda
    await firebase.database().ref("tiendas").push(tienda);
    //creamos el perfil
    await firebase.database().ref("users/" + r.uid).set(user);
    //logueamos al usuario
    await firebase.auth().signInWithEmailAndPassword(tienda.email, tienda.password);


}

export function signOut(){
    firebase.auth().signOut();
    localStorage.removeItem("user");
}
