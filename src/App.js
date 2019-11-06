import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component'
import { SignInAndSignup } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { Header } from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util'


class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      
      if(userAuth) {

          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
            console.log(this.state)
          })
      }
      this.setState({currentUser : userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path ='/' component= {HomePage}/>
        <Route  path ='/shop' component= {ShopPage}/>
        <Route  path ='/signin' component= {SignInAndSignup}/>
      </Switch>
      </div>
     );
  }
}

export default App;
