"use client"

import { useState } from 'react';
import Link from 'next/link';
import "./style.css"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { usePathname } from 'next/navigation';

import { BsBox } from "react-icons/bs";
import { LuFileEdit } from "react-icons/lu";

import clsx from 'clsx';
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { SiOpslevel } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";


const Menu = () => {

  const [showRewardMenu, setShowRewardMenu] = useState(false)

  const pathname = usePathname()



  const toggleDepartMentMenu = () => {

   
    setShowRewardMenu(false)

  }



  const toggleRewardMenu = () => {
    setShowRewardMenu(!showRewardMenu)
   
  }





  return (
    <div className="w-full">



      <div className="w-full flex flex-col gap-5 ">

        <div
          className={
            clsx("w-full px-3 py-2 rounded-lg hover:ring-2 transition hover:text-[#2c76f9]  hover:bg-[#e7f1fe] cursor-pointer",
              pathname === '/users' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
            )
          }

        >
          <Link href="/users/">

            <div className='flex gap-2 items-center justify-start'>
              <BiHomeAlt
                size={25}
              />
              <h3 className="font-semibold text-base truncate mt-1">
                Thông tin

              </h3>

            </div>
          </Link>
        </div>


      

        


        {/* Department Item */}
        <div className="relative">
          <div
            className={
              clsx("w-full rounded-lg hover:ring-2 transition hover:text-[#2c76f9]  hover:bg-[#e7f1fe] cursor-pointer",
                pathname === '/users/departments' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
              )
            }

            onClick={toggleDepartMentMenu}
          >
            <Link href='/users/departments'>
              <div className='flex items-center justify-start gap-2 mr-2 text-while font-semibold px-3 py-2'>
                <BsBox size={25} className='font-semibold hover:text-[#9cc0fc]' />
                <h3 className="font-semibold text-base mt-1 truncate">
                  Phòng ban
                </h3>



              </div>
            </Link>
          </div>

        </div>
        <div className="relative">
          <div
            className={
              clsx("w-full rounded-lg hover:ring-2 transition hover:text-[#2c76f9]  hover:bg-[#e7f1fe] cursor-pointer",
                pathname.includes('/users/projects') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
              )
            }

            onClick={toggleDepartMentMenu}
          >
            <Link href='/users/projects'>
              <div className='flex items-center justify-start gap-2 mr-2 text-while font-semibold  px-3 py-2'>
                <FaProjectDiagram size={25} className='font-semibold hover:text-[#9cc0fc]' />
                <h3 className="font-semibold text-base mt-1 truncate">
                  Dự án

                </h3>



              </div>
            </Link>
          </div>

        </div>
       


        


        {/* Khen thưởng kỉ luật */}
        <div className="relative">
          <div
            className={clsx(
              'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] px-3 py-2 hover:ring-2 cursor-pointer',
              pathname.includes('/users/rewards') || pathname.includes('/admin/disciplines') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
            )}
            onClick={toggleRewardMenu}
          >
            <div className='flex flex-nowrap items-center justify-start gap-2 mr-2 text-while font-semibold'>
              <div className='flex items-center justify-start gap-2'>
                <FaRegStar
                  size={25}
                />
                <h3 className="font-semibold text-base truncate mt-1">
                  Khen thưởng <br /> kỉ luật
                </h3>
              </div>

              {showRewardMenu ? <IoIosArrowUp size={25} className='font-semibold hover:text-[#9cc0fc]' /> : <IoIosArrowDown size={25} className=' font-semibold hover:text-[#9cc0fc]' />}
            </div>
          </div>
          {showRewardMenu && (
            <div className="absolute flex flex-col gap-3 mt-2 w-full rounded-lg shadow-md animate-dropdown cursor-pointer z-50 bg-white">
              <div className='flex flex-col gap-2'>
                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname.includes('/users/rewards') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/users/rewards">
                    <div className='flex items-center justify-start gap-2 px-3 py-2'>
                      <FaRegDotCircle
                        size={25}
                      />
                      <h3 className="font-semibold text-base truncate mt-1">
                        Khen thưởng
                      </h3>

                    </div>


                  </Link>


                </div>


                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname.includes('/users/disciplines') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/users/disciplines">
                    <div className='flex items-center justify-start gap-2  px-3 py-2'>
                      <FaRegDotCircle
                        size={25}
                      />
                      <h3 className="font-semibold text-base truncate mt-1">
                        Kỉ luật
                      </h3>
                    </div>

                  </Link>
                </div>





              </div>
            </div>
          )}
        </div>


        









      </div>
    </div>
  );
};

export default Menu;
