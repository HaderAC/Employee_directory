import axios from "axios";

const userSearch = async () =>{
    const data = await axios("https://randomuser.me/api/");
    return data;
    
}

export default userSearch;
