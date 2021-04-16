import './Footer.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { useState, useContext } from 'react';
import {WebSocketContext} from '../WebSocketContext';




const useStyle = makeStyles({

    button: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: '20px'
    },
    text: {
        width: '1000px',
        height: '50px'
    }
});

const Footer = () => {
    const { socket } = useContext(WebSocketContext)
    const classes = useStyle()
    const [message, setMessage] = useState('');
    return (
        <>


            <div className="footer">

                <TextField
                    id="outlined-full-width"
                    className={classes.text}
                    multiline={true}
                    style={{ margin: 10 }}
                    placeholder="Votre message..."
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={message}
                    onChange={e => {
                        setMessage(e.target.value)
                    }}
                    onKeyPress={e => {
                        if (e.code === 'Enter') {
                            e.preventDefault();
                            socket.emit('nouveau-message', message);

                            setMessage('');
                        }
                    }}
                />

                <Button
                    onClick={e => {
                        e.preventDefault();
                        socket.emit('nouveau-message', message);

                        setMessage('');
                    }}
                    className={classes.button}
                    variant='contained'
                >
                    Envoyer
            </Button>



            </div>

        </>

    );
}

export default Footer;