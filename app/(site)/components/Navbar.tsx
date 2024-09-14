

import Link from "next/link";

const Navbar = () => {
    

    const handleScrollToSection = (sectionId:any) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-[#670ED8] text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Công ty CyberSoft</div>
                <ul className="flex space-x-4">
                    <li>
                        <div className=" transition-all cursor-pointer hover:text-white hover:bg-purple-900 border px-4 py-2 rounded-md">
                            <Link href="/">
                                Trang chủ
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className=" transition-all cursor-pointer hover:text-white hover:bg-purple-900 border px-4 py-2 rounded-md" onClick={() => handleScrollToSection('introduce')}>
                            Giới thiệu
                        </div>
                    </li>
                    <li>
                        <div className=" transition-all cursor-pointer hover:text-white hover:bg-purple-900 border px-4 py-2 rounded-md" onClick={() => handleScrollToSection('contact')}>
                            Liên hệ
                        </div>
                    </li>
                    <li>
                        <div className=" transition-all cursor-pointer hover:text-white hover:bg-purple-900 border px-4 py-2 rounded-md" onClick={() => handleScrollToSection('recruitment')}>
                            Tuyển dụng
                        </div>
                    </li>
                    <li>
                        <div className=" transition-all cursor-pointer hover:text-white hover:bg-purple-900 border px-4 py-2 rounded-md" >
                            <Link href="/authentication">
                                Login
                            
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
