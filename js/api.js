// ==========================================
// TATA-DATA API
// ==========================================

const API_URL = "https://script.google.com/macros/s/AKfycbxaHZVffrICrFirgJPz4E6fL7eO9W7-ImJp1vhSA7akhe_5T9KzcLN0qNEegNNARezG/exec";

// ==========================================
// Generic POST
// ==========================================

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

        const text = await response.text();

        console.log("STATUS:", response.status);
        console.log("RESPONSE:", text);

        return JSON.parse(text);

    } catch (err) {

        console.error(err);

        return {
            success: false,
            message: err.toString()
        };

    }

}

// ==========================================
// REGISTER
// ==========================================

async function register(data){
    return await post("register", data);
}

// ==========================================
// LOGIN
// ==========================================

async function login(data){
    return await post("login", data);
}

// ==========================================
// REDEEM
// ==========================================

async function redeem(data){
    return await post("redeem", data);
}

// ==========================================
// COURSES
// ==========================================

async function getCourses(data){
    return await post("courses", data);
}

// ==========================================
// PROGRESS
// ==========================================

async function saveProgress(data){
    return await post("progress", data);
}
