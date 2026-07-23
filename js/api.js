// ==========================================
// TATA-DATA API
// ==========================================

const API_URL = "https://script.google.com/macros/s/AKfycbxQyjgU5dsi9Q96Y5UsIaVxbu3rnRxWJPZyAxaNkiv5sQSyog7i4aY3Lkc67MZIzAw/exec";

// Generic POST
async function post(action, data = {}) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                action,

                ...data

            })

        });

        return await response.json();

    } catch (err) {

        return {

            success: false,

            message: "Tidak dapat terhubung ke server."

        };

    }

}

// Register
async function register(data){

    return await post("register", data);

}

// Login
async function login(data){

    return await post("login", data);

}