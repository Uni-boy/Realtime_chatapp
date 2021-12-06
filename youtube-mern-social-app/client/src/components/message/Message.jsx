import "./message.css"

export default function Message({own}){
    return(
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="" alt="" />
            </div>
            <p className="messageText">sdfjksldfjdk jksdlfjaksldjf asdklfjadsfajsdlkfwjioefjd.</p>
            <div className="messageBottom">
            1 hour ago
            </div>
        </div>
    )
}