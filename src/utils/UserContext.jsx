import { createContext } from "react";

const UserContext = createContext ({
    user:{
    name: "dummyName",
    email: "dummyEmail",
}, 
});

export default UserContext;