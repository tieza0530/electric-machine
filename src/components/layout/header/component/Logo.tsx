import { CiLocationOn } from "react-icons/ci";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../../../ui/hover-card"
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/')
    }
    return (
        <div className="flex items-center justify-center">
            <img src="/image/Logo_NK.svg" alt="logo" onClick={backHome}/>
            <div className="ml-10 text-white text-sm">
                <HoverCard>
                    <HoverCardTrigger className="flex  items-center justify-center"><CiLocationOn className="text-2xl mr-1" />Địa chỉ <br /> cửa hàng</HoverCardTrigger>
                    <HoverCardContent className='font-medium'>
                        <a href="https://maps.app.goo.gl/af5drEXQA7BikZYR6" target="_blank" >CS1: Đại Tảo - Xuân Giang - Sóc Sơn - Hà nội</a>
                        <br />
                        <a href="https://maps.app.goo.gl/PAzm5A8VpH3coQH57" target="_blank">CS2: Lương Nỗ - Tiên Dương - Đông Anh - Hà nội</a>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}