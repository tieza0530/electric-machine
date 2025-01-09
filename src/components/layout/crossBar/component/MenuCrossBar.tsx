import { SlScreenDesktop } from "react-icons/sl";
import { GrFormNext } from "react-icons/gr";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BiSolidWasher } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";
import { RiHeartAddLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";

export const MenuCrossBar = () => {
    return (
        <div>
            <ul className="w-60 bg-white">
                <li className="my-1 relative group">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <SlScreenDesktop className="mr-1 text-lg" />
                            <a href="">Tivi ,</a>
                            <a href="">Loa ,</a>
                            <a href="">Dàn Karaoke ,</a>
                            <a href="">Cameras</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                        <div className="group-hover:block hidden absolute right-0 top-0">
                                12312
                    </div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <CgSmartHomeRefrigerator className="mr-1 text-lg" />
                            <a href="">Tủ lạnh ,</a>
                            <a href="">Tủ đông/Mát ,</a>
                            <a href="">Rửa chén</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <BiSolidWasher className="mr-1 text-lg" />
                            <a href="">Máy giặt ,</a>
                            <a href="">Máy sấy ,</a>
                            <a href="">Nước nóng</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <LuAirVent className="mr-1 text-lg" />
                            <a href="">Máy lạnh ,</a>
                            <a href="">Quạt ,</a>
                            <a href="">Lọc khí</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <img src="/image/noi chien-01.webp" className="mr-1 h-4" />
                            <a href="">Điện dân dụng ,</a>
                            <a href="">Hút bụi ,</a>
                            <a href="">Nồi chiên</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <img src="/image/noi com-01.webp" className="mr-1 h-4" />
                            <a href="">Đồ dùng bếp ,</a>
                            <a href="">Bếp điện ,</a>
                            <a href="">Nồi cơm</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <img src="/image/may-loc-nuoc.webp" className="mr-1 h-4" />
                            <a href="">Lọc nước ,</a>
                            <a href="">Sinh tố ,</a>
                            <a href="">Xay ép</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <RiHeartAddLine className="mr-1 text-lg" />
                            <a href="">Sức khoẻ ,</a>
                            <a href="">Làm đẹp ,</a>
                            <a href="">Đồ em bé</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <MdOutlinePhoneAndroid className="mr-1 text-lg" />
                            <a href="">Điện thoại ,</a>
                            <a href="">Phụ kiện ,</a>
                            <a href="">Talet</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <IoIosLaptop className="mr-1 text-lg" />
                            <a href="">Laptop ,</a>
                            <a href="">PC ,</a>
                            <a href="">Thiết bị văn phòng</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <MdOutlineSettingsSuggest className="mr-1 text-lg" />
                            <a href="">Dịch vụ ,</a>
                            <a href="">Hỗ trợ ,</a>
                            <a href="">Hệ thống siêu thị</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <MdOutlineTipsAndUpdates className="mr-1 text-lg" />
                            <a href="">Thông tin hữu ích</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
                <li className="my-1">
                    <div className="flex items-center text-xs justify-between">
                        <div className="flex">
                            <SlDiamond className="mr-1 text-lg" />
                            <a href="">Bán hàng doanh nghiệp</a>
                        </div>
                        <div><GrFormNext className="text-xl" /></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}