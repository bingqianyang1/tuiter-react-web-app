import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


const WhoToFollowList = () => {
  return(`
    <ul class="list-group">
      <li class="list-group-item"><b>Who to follow</b></li>
      ${who.map(who => {
        return (WhoToFollowListItem(who));
      }).join("")}


    </ul>


  `);

}



$("#wd-whoToFollow").append(WhoToFollowList());

export default WhoToFollowList;