    'use client'
    
import { useState } from "react";
import MessagesDisplay from "./MessagesDisplay";
import CodeDisplay from "./CodeDisplay";

    

    interface ChatData {
    role: string;
    content: string;
    }

    function App() {
    const [prompt, setPrompt] = useState<string>("");
    const [chat, setChat] = useState<ChatData[]>([]);



    const getQuery =  async () => {
        try {
            const options: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt
            })
        }
    
        
        const response = await fetch("/api/generate", options)
        const data: ChatData = await response.json()
        console.log(data)
        const userMessage = {
            role: "user",
            content: prompt
        }
    
        setChat(prevChat => [...prevChat, data, userMessage])
        setPrompt("");
    
        }catch (error) {
            console.log(error)
        }
    }
    
    
    const clearChat = () => {
        setPrompt("");
        setChat([]);
    }
    


    const filteredUserMessages = chat.filter(
        (message) => message.role === "user"
    );
    const latestCode = chat.filter((message) => message.role === "assistant").pop();

    return (
        <section className="flex flex-col  justify-center h-[70vh] w-[60vw] bg-[rgb(255,255,255)] rounded-[15px]  shadow  pt-1 ">
            <MessagesDisplay userMessages={filteredUserMessages} />
            <div className=" flex justify-center items-center mt-6 px-6">
                <input  value={prompt} onChange={e => setPrompt(e.target.value)} className="p-2 border-2 border-black/10 box-border w-full rounded-md m-"/>
                
            </div>
            <CodeDisplay text={latestCode?.content || ""}/>
            <div className="flex justify-end mb-2 mr-2  px-4  font-extrabold">
                <button className="bg-red-500  rounded-l-md p-2 text-slate-950 " onClick={getQuery}>Get Query !</button>
                <button className="bg-amber-500  rounded-r-md p-2 text-gray-950" onClick={clearChat}>Clear Chat</button>
            </div>


        </section>
    );
    }

    export default App;
