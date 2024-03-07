import {_getAllPosts } from './PostsController.js';
import {Posts} from './Posts.js';
import {PostsController} from './PostsController.js';

lab11();
async function lab11(){
    const posts = new Posts(1,1);
    const iuserId = posts.userId;
    const ipostId = posts.postId;

    const postController = new PostsController();
    await _getAllPosts(iuserId);

    const postIdResult = postController.printTargetPost(iuserId, ipostId);
    const allPostsResultsByUserId = postController.printAllPosts(iuserId);
}