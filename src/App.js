import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import ExercisesList from "./components/exercises-list.component";
import UsersList from "./components/user-list.component";
import EditExercise from "./components/edit-exercise.component";
import EditUser from "./components/edit-user.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
   <Router>
      <Navbar />
      <Header />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/run" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/userlist" exact component={UsersList} />
      <Route path="/edituser/:id" component={EditUser} />
      <br/>
      <Signup />
      <Contact />
      <Footer />
     
   </Router> 
  );
}

export default App;
