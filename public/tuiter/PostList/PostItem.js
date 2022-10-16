const PostItem = (post) => {
    return(`
      <li class="list-group-item bg-black">
        <div class="row">

          <div class="col ">
            <img src=${post.avatarImg} class="rounded-circle" style="width: 60px;" />
          </div>

          <div class="col-10">

            <span class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i></span>
            <span class="text-secondary">${post.handle}</span>
            <span class="text-secondary"> · ${post.time}</span>
            <i class="fas fa-ellipsis-h float-end text-secondary"></i>
            </br>
            ${post.topic}

            <div class="card border border-secondary mt-3">
                ${post.title && post.content ?
                `
                <img class="card-img-top" src=${post.image}>
                <div class="card-body">
                    <span class="card-title"> ${post.title} </span>
                    <p class="text-secondary"> ${post.content} </p>
                </div>` :
                `<img class="card-img-top" src=${post.image}>`
                }
            </div>

            <div class="row mt-3 mb-2 text-secondary">
              <div class="col-3">
                <i class="far fa-comment"></i>
                ${post.comments}
              </div>

              <div class="col-3">
                <i class="fa fa-retweet"></i>
                ${post.retuits}
              </div>

              <div class="col-3">
                <i class="far fa-heart"></i>
                ${post.likes}
              </div>

              <div class="col-3">
                <i class="fa fa-share"></i>
              </div>

            </div>

          </div>

        </div>

      </li>


    `);
}

export default PostItem;