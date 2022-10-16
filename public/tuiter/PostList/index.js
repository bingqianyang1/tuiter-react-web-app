import PostItem from "./PostItem.js";
import posts from "./homePosts.js"


const PostList = () => {
    return (`
      <ul class="list-group">
        ${posts.map(post => {
          return(PostItem(post));
        }).join('')}
      </ul>
    `);

}


$("#wd-postList").append(PostList());
export default PostList;

