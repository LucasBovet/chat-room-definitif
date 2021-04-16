import {configureStore} from '@reduxjs/toolkit';
import app from './AppSlice';





export default configureStore({
    reducer: {
        app
    }
})