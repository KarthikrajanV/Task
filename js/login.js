function validateLogin(event) {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    $(document).ready(function () {
        $.ajax({
            url: 'http://localhost/Guvi/php/login.php',
            type: "POST",
            data: {
                email: email,
                password: password
            },

            success: function (data, status) {
                if (data === "Wrong Password") {
                    alert(data);
                }
                else if (data == "WRONG USER NAME OR PASSWORD") {
                    alert("Please Enter Valid Email Or Password");
                }
                else {
                    localStorage.setItem("email", email);
                    token = data.toString();
                    window.location.replace("http://localhost/Guvi/profile.html");

                }
            }
        });
    })

}