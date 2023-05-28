interface UserMessage {
    role: string,
    content: string
    }
    
    interface MessagesDisplayProps {
        message: UserMessage
    }
    
    function MessageDisplay({message}: MessagesDisplayProps) {
        return (
        <div className="flex items-center gap-2 py-2  w-full  rounded-sm box-border  bg-slate-300/10 my-1  ">
            <p id="icon" className="text-xs ml-2">⊚</p>
            <p className="text-lg">{message.content}</p>
        </div>
        );
}
    
export default MessageDisplay;
    