const NavigationSidebar = (active) => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
      </a>

      <a class="list-group-item ${active === 'home' ? 'active':''}" href="../HomeScreen/index.html">
        <i class="fas fa-home"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Home</span>
      </a>

      <a class="list-group-item ${active === 'explore' ? 'active':''}" href="../explore/index.html">
        <i class="fas fa-hashtag"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Explore</span>
      </a>

      <a class="list-group-item ${active === 'notifications' ? 'active':''}" href="/">
        <i class="fas fa-bell"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Notifications</span>
      </a>

      <a class="list-group-item ${active === 'messages' ? 'active':''}" href="/">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Messages</span>
      </a>

      <a class="list-group-item ${active === 'bookmarks' ? 'active':''}" href="../bookmarks/index.html">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Bookmarks</span>
      </a>

      <a class="list-group-item ${active === 'lists' ? 'active':''}" href="/">
        <i class="fas fa-list"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Lists</span>
      </a>

      <a class="list-group-item ${active === 'profile' ? 'active':''}" href="/">
        <i class="fas fa-user"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">Profile</span>
      </a>

      <a class="list-group-item ${active === 'more' ? 'active':''}" href="/">
        <i class="fas fa-circle"></i>
        <span class="d-none d-l-inline-block d-xl-inline-block">More</span>
      </a>

   </div>


   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

$("#wd-navibar").append(NavigationSidebar());

export default NavigationSidebar;