import axios from "axios";
const BASE_URL = "https://api.openrouter.ai/v1";
const API_KEY = "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";
const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${BASE_URL}/chat/completions`, {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            max_tokens: 100,
        }, {
            // Request headers
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
        });
        console.log("Response:", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data);
        }
        else {
            console.error("Unexpected error:", error);
        }
    }
};
sendMessage("Hello, OpenRouter!");
//# sourceMappingURL=main.js.map