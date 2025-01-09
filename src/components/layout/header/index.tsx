import { InputSearch } from "./component/InputSearch";
import { Logo } from "./component/Logo";
import { NavigationBarRight } from "./component/NavigationBarRight";

export const Header = () => {
  return (
    <div className="w-screen bg-background_red py-4 flex items-center justify-center ">
      <div>
        <Logo />
      </div>
      <div className="mx-9"><InputSearch/></div>
      <div>
       <NavigationBarRight />
      </div>
    </div>
  );
};
