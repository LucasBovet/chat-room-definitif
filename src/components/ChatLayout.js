import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {useSelector} from 'react-redux';
import WebSocketProvider from '../WebSocketContext';


const ChatLayout = () => {
    const token = localStorage.getItem('chat-room')
    const username = useSelector(state=>state.app.user)
    return (
        <>



            <div style={
                {
                    overflow: 'hidden'
                }
            }>


                <Header />
                <WebSocketProvider username={username} token={token}>

                    <Body />


                    <Footer />
                </WebSocketProvider>
            </div>


        </>


    )
}

export default ChatLayout