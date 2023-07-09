import { Stack, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import { logo } from "./utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <div direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Link to="/user/dashboard">
    <Avatar />
    </Link>
    
  </div>
);

export default Navbar;
