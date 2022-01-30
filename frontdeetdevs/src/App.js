import react, {useState, useEffect} from "react"
import './App.css';
import Post from "./components/Post"
import ListOfPosts from "./components/ListOfPosts"
import Register from "./components/Register"
import Login from "./components/Login"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {Button} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


  

function App() {


  
  return (
    <div className="App">
      <section className="App-content">
        <Routes>
          <Route  path="/" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route  path="/listOfPosts" element={<ListOfPosts />} />
          {/* <Route path="/title/:id" exact render={() => <Movie />} />
          <Route path="/signin" exact render={() => <SingIn />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/userFavs" exact render={() => <UserFavs />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/findUser" exact render={() => <FindUser />} /> */}
        </Routes>
      </section>
    </div>
    
      // <div className="App">
      //   <section className="App-content">
      //     {
      //       <form onSubmit={(e) => handleRegisterLogin(e)}>

      //       <input onChange={(e) => handleUserInput(e.target.value)} type="text" placeholder= "email" name="email" />
      
      //       <input onChange={(e) => hanhandlePasswordInput(e.target.value)} type="password"  placeholder="password" name="password" />
            
      //       <input type="submit" value="register" onClick={() => {navigate.push("/")}}/>
      //       <Button type="submit" onClick={() => {
      //             navigate(`/asdasdsd`);
      //           }}>Register</Button>
            
      //     </form>
      //     }
      //     <nav>
      //       <ul>
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/about">About</Link>
      //         </li>
      //         <li>
      //           <Link to="/users">Users</Link>
      //         </li>
      //       </ul>
      //     </nav>

          /* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */
          /* <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes> */
        // </section>
      // </div>
  );
}


/*

function App() {
  // let p = [{
  //   content: "1"
  // }, {
  //   content: "2"
  // }, {
  //   content: "3"
  // }]
  // let p2= ["4","5"]
  // const [posts, setPosts] = useState([p])
 
    // setPosts(p)

  

  

  
  return (
    <div className="App">
      <section className="App-content">
        {
          <form onSubmit={(e) => handleRegisterLogin(e)}>

            <input onChange={(e) => handleUserInput(e.target.value)} type="text" placeholder= "email" name="email" />
      
            <input onChange={(e) => hanhandlePasswordInput(e.target.value)} type="password"  placeholder="password" name="password" />
            
            <input type="submit" value="register" onClick={() => {navigate.push("/")}}/>
            <Button type="submit" onClick={() => {
                  navigate(`/asdasdsd`);
                }}>Register</Button>
            
          </form>,
           <div>
              <button onClick={() => navigate(-1)}>go back</button>
              <Nav/>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
                <Route exact path="/record/:user" element={<Record/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
         </div>
          // <ListOfPosts posts={posts}></ListOfPosts>

        },
        {console.log(users)}
        
      </section>
    </div>
  );
}
*/

export default App
