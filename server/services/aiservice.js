const Groq = require("groq-sdk");

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const askAI = async (message) => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                { role: "system", content: "You are a pizza ordering assistant." },
                { role: "user", content: message }
            ]
        });

        return response.choices[0].message.content;

    } catch (err) {
        console.error("Groq error:", err);
        return "I cant respond at this time...";
    }
};

module.exports = askAI;