import './Login.css'
import { useState } from 'react';
import ChatLogo from '../images/chat-logo.png';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch} from 'react-redux';
import {LoginUser} from '../store/AppSlice';




const useStyle = makeStyles({
    root: {
        padding: 20,
        width: 320,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    button: {
        backgroundColor: 'black',
        color: 'white'
    }
});



const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')

    const handleSubmit = async () => {
        const req = await fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body: JSON.stringify({
                username

            })
        });
        const res = await req.json();

        localStorage.setItem('chat-room', res.token);
        dispatch(LoginUser(res.user));
    };

    const classes = useStyle()

    return (
        <>

            <img src={ChatLogo} className='logo' alt="Logo" />

            <Paper className={classes.root} elevation={4} variant='outlined'>
                <Box mb={3}>
                    <TextField
                        onChange={event => setUsername(event.target.value)}
                        label="Nom d'utilisateur"
                        value={username}
                        fullWidth={true}
                        autoFocus={true}
                    />
                </Box>
                <Box mb={3}>

                </Box>


                <Button
                    className={classes.button}
                    variant='contained'
                    onClick={handleSubmit}
                >
                    Se connecter
            </Button>
            </Paper>

        </>
    )
}

export default Login;