async function register() {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const res = await fetch("/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username,
            password
        })
    });

    const data = await res.json();

    alert(data.message);
}

async function login() {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const res = await fetch("/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username,
            password
        })
    });

    const data = await res.json();

    if (data.message === "Login successful") {

        window.location.href = "/tasks.html";
    }
    else {

        alert(data.message);
    }
}