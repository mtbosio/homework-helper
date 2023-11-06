const Navbar = () => {
  return (
    <nav>
      <div class="table">
        <div class="tr">
          <div class="topnav">
            <div class="d1">
              <a class="active" href="">
                Homework Help
              </a>
            </div>
            <div class="d2">
              <input type="text" placeholder="Search"></input>
            </div>
            <div class="d3">
              <button class="newpost">New Post</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
