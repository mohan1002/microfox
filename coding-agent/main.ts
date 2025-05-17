import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

async function generateCode(prompt: string) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a TypeScript function to ${prompt}`,
        max_tokens: 100,
    });
    console.log(response.data.choices[0].text);
}

generateCode("sort an array of numbers");
