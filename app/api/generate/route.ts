import openai from "@/utils/openai";
import {NextRequest, NextResponse} from "next/server";



export async function POST(_resquest: NextRequest) {
    const {message} = await _resquest.json()

    

    try {
        const response = await  openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Create a SQL request to ${message}`
                }
                ]
        })
        console.log(response.data.choices[0].message)
        return NextResponse.json(response.data.choices[0].message)
        
    } catch (error) {
        return NextResponse.error
    }
    
}