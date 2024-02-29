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

function printTargetPost(iuserId, ipostId){
 _getAllPosts(iuserId).then((filteredPosts) => 
  {
    const findPostContentBy = filteredPosts.find(({userId, id}) => {return (userId === iuserId && id === ipostId)})
    console.log(`\nContent body is: "${findPostContentBy.body}"`); 
  })
}

function printAllPosts(iuserId){
  _getAllPosts(iuserId).then((filteredPosts) => {
    const allPostsByUserId = filteredPosts.filter((element, index, array) => {return element.userId === iuserId})
    console.log(`All posts from your userId "${iuserId}" as below:`); 
    console.log(allPostsByUserId);
  }) 
}

function _getAllPosts(iuserId){
  return sendRequest(url).then((post) => {
    return post.filter((post) => {
      return post.userId === iuserId
    });
  })
}

// function isUserIdExisting(iuserId){
//   _getAllPosts(iuserId).then((filteredPosts) => {
//     const isUIdExisting = filteredPosts.every((value, index, array) => {return (value.userId === iuserId)})
//     console.log(isUIdExisting);
//   })
// }




