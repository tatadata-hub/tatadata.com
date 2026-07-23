// ==========================================
// TATA-DATA API
// ==========================================

const API_URL = "https://script.google.com/macros/s/AKfycbxaHZVffrICrFirgJPz4E6fL7eO9W7-ImJp1vhSA7akhe_5T9KzcLN0qNEegNNARezG/exec";

// Generic POST
async function post(action, data = {}) {

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                action,
                ...data
            })
        });

        // Lihat isi response dulu
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
