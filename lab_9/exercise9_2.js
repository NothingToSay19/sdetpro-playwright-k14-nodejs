import { sendRequest, getUserInput } from '../Utilities/Utilities.js';

const baseURL = 'https://jsonplaceholder.typicode.com';
const trailing = '/posts';
const url = baseURL.concat(trailing);

printLayout();
const iuserId = getUserInput("Please input your userId: ");
const ipostId = getUserInput("Please input your postId: ");

function printLayout() {
    console.log("===Welcome to JSON Placeholder===\nFind your content by enter user Id and post Id as below");
};

printTargetPost(iuserId, ipostId);
printAllPosts(iuserId);
// isUserIdExisting(iuserId);

async function printTargetPost(iuserId, ipostId){
    const filteredAllPosts = await _getAllPosts(iuserId);
    const findPostContentBy = filteredAllPosts.find(({userId, id}) => {return (userId === iuserId && id === ipostId)})
    console.log(`\nContent body is: "${findPostContentBy.body}"`); 
}

async function printAllPosts(iuserId){
    const filteredAllPosts = await _getAllPosts(iuserId);
    const allPostsByUserId = filteredAllPosts.filter((element, index, array) => {return element.userId === iuserId})
    console.log(`All posts from your userId "${iuserId}" as below:`); 
    console.log(allPostsByUserId);
}

async function _getAllPosts(iuserId){
    const posts = await sendRequest(url);
    return posts.filter((post) => {
        return (post.userId === iuserId)
  })
}




