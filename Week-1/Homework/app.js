import axios from "axios";

export async function getData(id){
        const user = await axios("https://jsonplaceholder.typicode.com/users/"+id);
    
        const post = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id);
        
        const finalUser = user.data;
        finalUser.posts = post.data;

        console.log(finalUser);

    }
    