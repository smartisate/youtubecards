import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

const Navigation = () => {

  return (
    <div className="ycNavigationContainer">
      <Logo/>
      <Search />
      <User />
    </div>
  );
};

export default Navigation;
