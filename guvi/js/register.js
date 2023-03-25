function register() {
    if (localStorage.getItem("email") === null) {

    }
    else {
        alert(" User Already Logged In");
        window.location.replace("http://localhost/Guvi/login.html");
    }
}
function ageCalculator(userinput) {
    var dob = new Date(userinput);

    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;

}
function reguser() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("pass")[0].value;
    var con_password = document.getElementsByName("conpass")[0].value;
    var age = ageCalculator(document.getElementsByName("dob")[0].value);
    var dob = document.getElementsByName("dob")[0].value;
    var mobileno = document.getElementsByName("mobile")[0].value;
    var name = document.getElementsByName("name")[0].value;
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email.match(emaiPattern)) {
        alert("Please enter valid email");
    } else if (!password.match(passPattern)) {
        alert("Please enter valid password");
    }
    else if (password == con_password) {
        $(document).ready(function () {
            $.ajax({
                url: 'http://localhost/Guvi/php/register.php',
                type: "POST",
                data: {
                    email: email,
                    password: password,
                    name: name,
                    mobile: mobileno,
                    dob: dob,
                    age: age,
                    isup: false
                },
                success: function (data, status) {
                    if (data === "email already exists") {
                        alert(data);
                        window.location.replace("http://localhost/Guvi/register.html");
                    }
                    else if (status == "success") {
                        window.location.replace("http://localhost/Guvi/login.html")
                    }
                    else if (status == "failed") {
                        alert("Registration Failed");
                        window.location.replace("http://localhost/Guvi/register.html");
                    }
                }
            });
        });
    }
    else {
        alert("Password Mismatch")
    }
}
