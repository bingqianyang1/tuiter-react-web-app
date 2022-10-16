const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
      <div class="row">
        <div class="col-2">
          <img src="${who.avatarIcon}" width="50px" class="float-start rounded-circle"/>
        </div>

        <div class="col-6">

          <b>${who.userName}</b>
          <i class="fas fa-check-circle"></i>
          <br />
          @${who.userName}
        </div>


        <div class="col-4">
          <button type="button" class="btn btn-primary rounded-pill float-end mt-2">Follow</button>
        </div>

      </div>
    </li>



  `);



}


export default WhoToFollowListItem;