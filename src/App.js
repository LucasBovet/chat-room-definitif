import ChatLayout from './components/ChatLayout'
import Login from './components/Login'
import store from './store'
import { Provider, useSelector } from 'react-redux'



function App() {


  const { user } = useSelector(state => state.app)

  return (

    <>
      {user === null ? (
        <Login />

      ) : (

        <ChatLayout />
      )}
    </>


  );
}

function AppContainer() {
  return (

    <Provider store={store}>

      <App />

    </Provider>

  )
}

export default AppContainer;
