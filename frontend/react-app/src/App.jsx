import UserProfile from "./UserProfile";
import { useState, useEffect } from "react";

const users = [
    {
    name: "Jamila",
    age: 22,
    gender: "FEMALE"
    },
    {
    name: "Marco",
    age: 35,
    gender: "MALE",
    },
    {name: "Nesa",
    age: 22,
    gender: "FEMALE"
    }, 
    {
    name: "Ana",
    age: 32,
    gender: "FEMALE"
    },
    {
        name: "Alex",
    age: 18,
    gender: "MALE"
    },
    {name: "Alexa",
    age: 42,
    gender: "FEMALE"
    }  
]

const UserProfiles = ({users}) => (
    <div>
    {
       users.map((user,index) => 
       <UserProfile name={user.name} age={user.age} gender={user.gender} imageNumber={index}/>)
    }
   </div>
)

function App() {

const [counter,setCounter] = useState(0);
const [isLoading,setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
   setTimeout(() => {
        setLoading(false)
   }, 2000);
},[]); //array of dependencies

if(isLoading) {
    return <h1>Loading...</h1>
}

 return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>Increment</button>
        <UserProfiles users={users}></UserProfiles>
    </div>
 )

}

export default App
