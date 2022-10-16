
const PostSummaryItem = (post) => {
  return(`
    <li class="list-group-item">

      <img src="${post.image}" width="80px" class="float-end rounded"/>
      <div class="text-secondary">${post.topic}</div>
      <div class="d-flex">
        <div class="fw-bold">${post.userName}</div>
        <i class="fas fa-check-circle p-1"></i>
        <div class="text-secondary">– ${post.time}</div>
      </div>
      <div class="fw-bold">
        ${post.title}
      </div>

    </li>

  `);
}


export default PostSummaryItem;