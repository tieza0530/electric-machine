import { LuSquareMenu } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

import { cn } from "../../../lib/utils";
import { MenuCrossBar } from "./component/MenuCrossBar";

export const CrossBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const goToPageWarrantyProcess = () => {
        navigate('/warranty-process')
    }
    return (
        <div className="flex justify-center items-center bg-white text-sm cursor-pointer">
            <div className="relative group w-60">
                <div className="flex items-center bg-background_gray text-white px-5 py-2 rounded-sm">
                    <LuSquareMenu className="text-2xl mr-2" />
                    <span>Danh mục sản phẩm</span>
                </div>
                <div className={cn("group-hover:block hidden absolute" ,location.pathname === '/' && 'block' )}>
                    {location.pathname === '/' ? <MenuCrossBar />: <MenuCrossBar />}
                </div>
            </div>
            <span className="mr-5"></span>
            <div className="flex items-center"> <img className="h-6 mr-2" src="/image/icon-camnang.webp" alt="camnang" /><span>Cẩm nang khuyến mãi</span></div>
            <span className="mx-5">|</span>
            <div className="flex items-center" onClick={goToPageWarrantyProcess}> <img className="h-6 mr-2" src="/image/icon free ship-do-01.webp" alt="freeship" /><span>Giao lắp, bảo hành chuyên nghiệp</span></div>
            <span className="mx-5">|</span>
            <div className="flex items-center"> <img className="h-6 mr-2" src="/image/icon-camnang.webp" alt="camnang" /><span>Tổng hợp khuyến mãi</span></div>
            <span className="mx-5">|</span>
            <div className="flex items-center"><img className="h-6 mr-2" src="/image/icon-gem.webp" alt="gem" /><span>Bán hàng doanh nghiệp</span></div>
        </div>
    )
}