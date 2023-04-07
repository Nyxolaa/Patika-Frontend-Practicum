import axios from "axios";

export async function getData(id){
        // FETCHING USER DATA !!!
        
        const user = await axios("https://jsonplaceholder.typicode.com/users/"+id);
        
        // FETCHING USER'S POST DATA  !!!        
        const post = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id);
        
        // EXTRACTING USER INFORMATION        
        const finalUser = user.data;
        
        // COMBINE        
        finalUser.posts = post.data;

        console.log(finalUser);
    }
    
