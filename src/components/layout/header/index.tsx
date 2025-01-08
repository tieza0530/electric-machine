import { InputSearch } from "./component/InputSearch";
import { NavigationBarRight } from "./component/NavigationBarRight";

export const Header = () => {
  return (
    <div className="w-screen bg-background_red py-4 flex items-center justify-center ">
      <div>
        <img src="/image/Logo_NK.svg" alt="logo" />
      </div>
      <div className="mx-9"><InputSearch/></div>
      <div>
       <NavigationBarRight />
      </div>
    </div>
  );
};
