import React from "react";
import { Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Signup from "./components/Signup.jsx";
import Profile from "./components/Profile";
import ProfileEdit from "./components/ProfileEdit.jsx";
import SponsorNew from "./components/SponsorNew.jsx";
// import Beers from "./components/Beers";
// import DetailBeer from "./components/DetailBeer";
// import DetailRandomBeer from "./components/DetailRandomBeer";
// import NewBeer from "./components/NewBeer";


export default ({isLogged, logIn, logOut, user})=>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={(props=>isLogged?<Redirect to={'/'}/>:<Login {...props} logIn={logIn}/>)} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" render={(props=>isLogged? <Logout {...props} logOut={logOut}/>:<Redirect to ={'/'}/>)} />
       
       
        <Route path="/sponsornew" render={props=> <SponsorNew {...props} user={user} /> }/>


        <Route exact path="/profile" render={(props => <Profile {...props} user={user} />)} />
        <Route path="/profile/edit" render={(props => <ProfileEdit {...props} user={user} />)} />

        <Route component={()=>{
            return <h2>Página no existe</h2>
        }} />

    </Switch>

)