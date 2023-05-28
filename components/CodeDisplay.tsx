'use client'

import { useState } from "react"
import  toast, { Toaster } from "react-hot-toast"
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'


interface CodeDsiplayProps {
    text: string
}



const CodeDisplay = ({text}: CodeDsiplayProps) => {
    const [copied, setCopied] = useState<Boolean>(false)

    const copyToClipboard = () => {
        setCopied(true);
        navigator.clipboard.writeText(text)
    
    setTimeout(() => {
        setCopied(false)
        toast.success('Successfully copied!');
        }, 700)
    }

    console.log(text)

    return (
        <section className="relative max-w-full h-[50%] m-6 rounded-[10px] bg-[rgb(34,34,34)] text-white overflow-hidden ">
            <div className="flex items-center w-full h-[35px] bg-slate-700/10 pl-[5px]">
                <div className="w-[15px] h-[15px]  m-[4px] bg-red-500 rounded-full"></div>
                <div className="w-[15px] h-[15px]  m-[4px] rounded-full bg-amber-500"></div>
                <div className="w-[15px] h-[15px]  m-[4px] rounded-full bg-lime-500"></div>
            </div>
            <section className="text-amber-500 p-4 text-sm overflow-y-scroll">
                <p>{text}</p>
            </section>

            <div className="  absolute  bottom-3  right-5 border-slate-100/10  border-2 rounded p-1" onClick={copyToClipboard}>
                {
                    !copied ? <ClipboardDocumentIcon className="h-6 w-6 text-white/70 cursor-pointer"/> : <ClipboardDocumentCheckIcon className="h-6 w-6 text-white/70 cursor-pointer"/>

                }
            </div>
            <Toaster position="top-right"/>
        </section>
    )
}

export default CodeDisplay
