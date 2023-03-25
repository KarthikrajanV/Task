function profile() {
    if (localStorage.getItem("email")) {
        $(document).ready(function () {
            $.ajax
                ({
                    url: 'http://localhost/Guvi/php/profile.php',
                    type: "POST",
                    data: {
                        email: localStorage.getItem("email"),
                    },
                    success: function (data, status) {
                        var da = jQuery.parseJSON(data);
                        document.getElementById("sname").innerHTML = da.name;
                        document.getElementById("sage").innerHTML = da.age;
                        document.getElementById("smail").innerHTML = da.email;
                        document.getElementById("smob").innerHTML = da.mobile;
                    }
                });
        })
    }
    else {
        window.location.replace("http://localhost/Guvi/login.html");
    }

}
function logout() {
    localStorage.removeItem("email");
    window.location.replace("http://localhost/Guvi/login.html");

}
