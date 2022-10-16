import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
      <div class="row">

        <!-- search field and cog -->
        <div class="d-flex">
          <div class="input-group mb-3 bg-white border rounded-pill">
            <span class="input-group-text bg-transparent border-0">
              <i class="text-black fas fa-search"></i>
            </span>
            <input type="text" placeholder="Search Tuiter" class="form-control  border-0 rounded-right"/>
          </div>

          <div class="col-2 d-flex justify-content-end">
            <i class="text-primary fas fa-cog fa-2x"></i>
          </div>
        </div>
      </div>

      <ul class="nav mb-2 nav-tabs">

        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>

      </ul>

      <!-- image with overlaid text -->
      <div class="card border-0">
        <img src="starship.webp" class="card-img rounded-0"/>
        <div class="card-img-overlay flex-column d-flex justify-content-end px-2 pb-0">
          <h2 class="card-title text-black fw-bold">SpaceX's Starship</h2>
        </div>
      </div>


      ${PostSummaryList()}
    `);
}

export default ExploreComponent;
