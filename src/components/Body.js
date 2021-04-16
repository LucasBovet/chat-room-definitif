import { useState, useEffect, useContext } from 'react';
import { WebSocketContext } from '../WebSocketContext';
import './Body.css'



const Body = () => {

    const { socket, ready } = useContext(WebSocketContext);

    const [messages, setMessages] = useState([])

    console.log(messages)

    useEffect(() => {
        if (ready) {
            socket.on('message-recu', (data) => {
                console.log(data)
                setMessages(state => {
                    const tmp = [...state];
                    tmp.push(JSON.parse(data));
                    return tmp;
                })
            });
        }
    }, [socket, ready])


    return (
        <div className='body'

            style={{
                overflow: 'auto'
            }}

        >
            
            {messages.map((message, index) => (
                <div
                    key={index}
                    style={{
                        fontFamily: 'Helvetica',
                        background: '#BFBFBF',
                        width: 200,
                        height: 'auto',
                        color: 'black',
                        padding: 10,
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 10,
                        borderRadius: 20,
                        wordBreak:"break-word"
                    }}
                >
                    {message.msg}
                    <br />
                    
                    {message.user.username}

                </div>

            ))}
        </div>
    )



};

const BodyContainer = () => {




    return (

        <Body />

    )
}



export default BodyContainer;