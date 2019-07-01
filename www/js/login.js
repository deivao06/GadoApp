if (!localStorage.getItem('auth_token')){
    app.loginScreen.open('#my-login-screen');
}

$$("#my-login-screen .btn-logar").on('click', function (event) {
   event.preventDefault();
   app.request({
       url: "http://localhost:9090/api/login-user.php",
       method: "POST",
       dataType: "json",
       data: {
           "username": $$("#my-login-screen input[name=username]").val(),
           "password": $$("#my-login-screen input[name=password]").val()
       },
       success: function (data) {
           if (data.error === 0){
               localStorage.setItem('auth_token',data.message);
               app.loginScreen.close('#my-login-screen');
           }else{
               app.dialog.alert(data.message);
           }
       },
   });
});