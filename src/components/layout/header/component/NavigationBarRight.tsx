import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { VscHistory } from "react-icons/vsc";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../ui/hover-card";

export const NavigationBarRight = () => {
  return (
    <div className="flex items-center justify-center text-white text-xs font-medium">
      <span className="flex items-center justify-center">
        <HiOutlineShoppingCart className="text-2xl mr-1" />
        Giỏ hàng
      </span>
      <span className="flex items-center justify-center ml-3">
        <VscHistory className="text-2xl mr-1" />
        Tra cứu <br />
        đơn hàng
      </span>
      <span className="flex items-center justify-center mx-3">
        <RiAccountCircleLine className="text-2xl mr-1" />
        Tài khoản
      </span>
      <span className="flex items-center justify-center">
        <FiPhoneCall className="text-2xl mr-1" />
        <HoverCard>
          <HoverCardTrigger>
            Gọi mua: 037 3388 097 <br />
            (Miễn phí)
          </HoverCardTrigger>
          <HoverCardContent className="text-center w-48">
            Thời gian hoạt động <br /><span className="text-xl">8:00 - 20:00</span> 
          </HoverCardContent>
        </HoverCard>
      </span>
    </div>
  );
};
