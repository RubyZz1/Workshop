import Axios from "axios";
import jwtDecode from "jwt-decode";

function logout(){
    window.localStorage.removeItem("authToken");
    delete Axios.defaults.headers["Authorization"];
}

function authenticate(credentials){
     return Axios
        .post("http://localhost:8000/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            
            window.localStorage.setItem("authToken", token);
        
            Axios.defaults.headers["Authorization"] = "Bearer " + token;

            return true;
        });


}


function setup(){
    const token = window.localStorage.getItem("authToken");

    if(token){
        const {exp: expiration} = jwtDecode(token);
        if(expiration * 1000 > new Date().getTime()){
            Axios.defaults.headers["Authorization"] = "Bearer " + token;
            console.log("Connexion établie avec axios");
        } else {
            logout();
        }
        
    }
        
}


function isAuthenticated(){
    const token = window.localStorage.getItem("authToken");

    if(token){
        const {exp: expiration} = jwtDecode(token);
        if(expiration * 1000 > new Date().getTime()){
            return true
        }else{
        return false
        }
        
    }else{
    return false
    }
}


export default{
    authenticate,
    logout,
    setup,
    isAuthenticated
}

