import { useState } from 'react';

const Chat = () => {
    const [message, setMessage] = useState('');
    return (
        <textarea
            value={message}
            onChange={e => {
                setMessage(e.target.value)
            }}
            onKeyPress={e=>{
                if(e.code === 'Enter'){
                    e.preventDefault();
                    window.socket.emit('nouveau-message', message);

                    setMessage('');
                }
            }}
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100vw',
                heigth: 120 
            }}
        >

        </textarea>
    );
};

export default Chat;