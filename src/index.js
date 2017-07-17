import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { firebaseApp } from './firebase'
// import history from './history'
import { logUser } from './actions'
import reducer from './reducers'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


const store = createStore(reducer)



firebaseApp.auth().onAuthStateChanged(user =>{
    if(user){
        console.log('user signed in', user)
        const {email} = user
        store.dispatch(logUser(email))
        // history.push('/app')
    }
    else{
        console.log('user signed out or needs to be in')
    }
})


ReactDom.render(
    <Provider store={store}>   
    <BrowserRouter  >
        <div>
            {/* <ul>
                <li> <Link to='/app'>Home</Link> </li>
                <li> <Link to='/signin'>SignIn</Link> </li>
                <li> <Link to='/signup'>SignUp</Link> </li>
            </ul>

            <hr/> */}

        <Route path='/app' component={App} />
        <Route exact path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />

       

        </div>
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)