function validate(){
    var name=document.getElementById=('name');
    var pswd=document.getElementById=('pswd');

    if(name !== "admin" && pswd !== "12345"){
        alert('invalid')
        return false
    }
}