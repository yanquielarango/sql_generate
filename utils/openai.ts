import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

if ( !configuration.apiKey)
throw new Error("OPENAI_API_KEY is not set")

const openai = new OpenAIApi(configuration)


export default openai;