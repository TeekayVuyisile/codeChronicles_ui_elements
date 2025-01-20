//Function to diplay the new profile picture
let profilePicture = document.getElementById("image_profile_pic");
let newProfilePicture = document.getElementById("input_profile_picture");

newProfilePicture.onchange = function(){
    profilePicture.src = URL.createObjectURL(newProfilePicture.files[0]);
}

/*Hide Or Show Password Function*/
let eyeicon = document.getElementById("eyeicon");
let eyeicon2 = document.getElementById("eyeicon2");
let password = document.getElementById("password");
let conPassword = document.getElementById("conPassword");

eyeicon.onclick = function passFunction(){
        if(password.type == "password"){
            password.type = "text";
            eyeicon.src = "assets/eye-open.png";
        }else{
            password.type = "password";
            eyeicon.src = "assets/eye-close.png";
        }
};
eyeicon2.onclick = function passFunction(){
    if(conPassword.type == "password"){
        conPassword.type = "text";
        eyeicon2.src = "assets/eye-open.png";
    }else{
        conPassword.type = "password";
        eyeicon2.src = "assets/eye-close.png";
    }
};