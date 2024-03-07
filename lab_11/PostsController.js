const baseURL = 'https://jsonplaceholder.typicode.com';
const trailing = '/posts';
const url = baseURL.concat(trailing);

export class PostsController {
    async printTargetPost(iuserId, ipostId){
        const filteredAllPosts = await _getAllPosts(iuserId);
        const findPostContentBy = filteredAllPosts.find(({userId, id}) => userId === iuserId && id === ipostId);
        console.log(`\nContent body is: "${findPostContentBy.body}"`);
    }

    async printAllPosts(iuserId){
        const filteredAllPosts = await _getAllPosts(iuserId);
        const allPostsByUserId = filteredAllPosts.filter((element, index, array) => element.userId === iuserId);
        console.log(`All posts from your userId "${iuserId}" as below:`);
        console.log(allPostsByUserId);
    }
}

async function sendRequest(url){
    return fetch(url).then(response => response.json());
}

export async function _getAllPosts(iuserId){
    const posts = await sendRequest(url);
    return posts.filter(post => post.userId === iuserId);
}

