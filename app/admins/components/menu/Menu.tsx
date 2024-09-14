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
  const [showEmployeeMenu, setShowEmployeeMenu] = useState(false);


  const [showInsuranceMenu, setShowInsuranceMenu] = useState(false);
  const [showSalaryMenu, setShowSalaryMenu] = useState(false);
  const [showRewardMenu, setShowRewardMenu] = useState(false)

  const pathname = usePathname()

  const toggleEmployeeMenu = () => {
    setShowEmployeeMenu(!showEmployeeMenu);

    setShowInsuranceMenu(false);
    setShowSalaryMenu(false)
    setShowRewardMenu(false)

  };



  const toggleDepartMentMenu = () => {

    setShowEmployeeMenu(false)
    setShowInsuranceMenu(false);
    setShowSalaryMenu(false)
    setShowRewardMenu(false)

  }


  const toggleSalaryMenu = () => {
    setShowSalaryMenu(!showSalaryMenu);
    setShowInsuranceMenu(false);

    setShowEmployeeMenu(false)
    setShowRewardMenu(false)

  }

  const toggleRewardMenu = () => {
    setShowRewardMenu(!showRewardMenu)
    setShowSalaryMenu(false);
    setShowInsuranceMenu(false);

    setShowEmployeeMenu(false)
  }





  return (
    <div className="w-full">



      <div className="w-full flex flex-col gap-5 ">

        <div
          className={
            clsx("w-full px-3 py-2 rounded-lg hover:ring-2 transition hover:text-[#2c76f9]  hover:bg-[#e7f1fe] cursor-pointer",
              pathname === '/admins' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
            )
          }

        >
          <Link href="/admins/">

            <div className='flex gap-2 items-center justify-start'>
              <BiHomeAlt
                size={25}
              />
              <h3 className="font-semibold text-base truncate mt-1">
                Tổng quan

              </h3>

            </div>
          </Link>
        </div>


        {/* Employee Item */}

        <div className="relative">
          <div
            className={clsx(
              'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] px-3 py-2 hover:ring-2 cursor-pointer',
              pathname.includes('/admins/employees') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
            )}
            onClick={toggleEmployeeMenu}
          >
            <div className='flex items-center justify-between gap-2 mr-2 text-while font-semibold'>


              <div className='flex items-center justify-start gap-2'>
                <FaUserGroup
                  size={25}
                />
                <h3 className="font-semibold text-base truncate mt-1">
                  Nhân viên
                </h3>
              </div>

              {showEmployeeMenu ? <IoIosArrowUp size={25} className='font-semibold hover:text-[#9cc0fc]' /> : <IoIosArrowDown size={25} className=' font-semibold hover:text-[#9cc0fc]' />}




            </div>
          </div>
          {showEmployeeMenu && (
            <div className="absolute flex flex-col gap-3 mt-2 w-full rounded-lg shadow-md bg-white animate-dropdown cursor-pointer z-50">
              <div className='flex flex-col gap-2'>
                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname === '/admins/employees' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >

                  <Link href="/admins/employees">

                    <div className='flex gap-2 px-3 py-2 items-center justify-start'>
                      <FaRegDotCircle
                        size={25}
                      />
                      <h3 className="font-semibold text-base truncate mt-1">
                        Xem nhân viên

                      </h3>

                    </div>
                  </Link>

                </div>


                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname === '/admins/employees/add' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/admins/employees/add">

                    <div className='flex gap-2 px-3 py-2 items-center justify-start'>
                      <FaRegDotCircle
                        size={25}
                      />

                      <h3 className="font-semibold text-base truncate mt-1">
                        Thêm nhân viên

                      </h3>

                    </div>
                  </Link>
                </div>

                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname === '/admins/employees/nations' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/admins/employees/nations">

                    <div className='flex gap-2 px-3 py-2 items-center justify-start'>
                      <FaRegDotCircle
                        size={25}
                      />

                      <h3 className="font-semibold text-base truncate mt-1">
                        Dân tộc

                      </h3>

                    </div>
                  </Link>
                </div>
                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9]  hover:ring-2',
                    pathname === '/admins/employees/degrees' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >

                  <Link href="/admins/employees/degrees">

                    <div className='flex gap-2 px-3 py-2 items-center justify-start'>
                      <FaRegDotCircle
                        size={25}
                      />
                      <h3 className="font-semibold text-base truncate mt-1">
                        Bằng cấp

                      </h3>

                    </div>
                  </Link>

                </div>





              </div>
            </div>
          )}
        </div>





        {/* Department Item */}
        <div className="relative">
          <div
            className={
              clsx("w-full rounded-lg hover:ring-2 transition hover:text-[#2c76f9]  hover:bg-[#e7f1fe] cursor-pointer",
                pathname === '/admins/departments' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
              )
            }

            onClick={toggleDepartMentMenu}
          >
            <Link href='/admins/departments'>
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
                pathname.includes('/admins/projects') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
              )
            }

            onClick={toggleDepartMentMenu}
          >
            <Link href='/admins/projects'>
              <div className='flex items-center justify-start gap-2 mr-2 text-while font-semibold  px-3 py-2'>
                <FaProjectDiagram size={25} className='font-semibold hover:text-[#9cc0fc]' />
                <h3 className="font-semibold text-base mt-1 truncate">
                  Dự án

                </h3>



              </div>
            </Link>
          </div>

        </div>
        {/* Positions */}
        <div className="relative">
          <div
            className={
              clsx("w-full rounded-lg hover:ring-2 transition hover:text-[#2c76f9]  hover:bg-[#e7f1fe] cursor-pointer",
                pathname === '/admins/positions' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
              )
            }

            onClick={toggleDepartMentMenu}
          >
            <Link href='/admins/positions'>
              <div className='flex items-center justify-start gap-2 mr-2 text-while font-semibold px-3 py-2'>
                <SiOpslevel size={25} className='font-semibold hover:text-[#9cc0fc]' />
                <h3 className="font-semibold text-base truncate mt-1">
                  Chức vụ
                </h3>


              </div>
            </Link>
          </div>

        </div>


        {/* Salary Item */}
        <div className="relative">
          <div
            className={clsx(
              'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] px-3 py-2 hover:ring-2 cursor-pointer',
              pathname.includes('/admins/salaries') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
            )}
            onClick={toggleSalaryMenu}
          >

            <div className='flex items-center justify-between gap-2 mr-2 text-while font-semibold'>


              <div className='flex items-center justify-start gap-2'>
                <CiMoneyCheck1
                  size={25}
                />
                <h3 className="font-semibold text-base truncate mt-1">
                  Lương
                </h3>
              </div>

              {showSalaryMenu ? <IoIosArrowUp size={25} className='font-semibold hover:text-[#9cc0fc]' /> : <IoIosArrowDown size={25} className=' font-semibold hover:text-[#9cc0fc]' />}




            </div>



          </div>
          {showSalaryMenu && (
            <div className="absolute flex flex-col gap-3 mt-2 w-full rounded-lg shadow-md animate-dropdown cursor-pointer z-50 bg-white">
              <div className='flex flex-col gap-2'>
                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname === '/admins/salaries/board' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/admins/salaries/board">
                    <div className='flex items-center justify-start gap-2 w-full h-full px-3 py-2'>
                      <FaRegDotCircle
                        size={25}
                      />
                      <h3 className="font-semibold text-base truncate mt-1">
                        Tính lương
                      </h3>
                    </div>

                  </Link>
                </div>


                <div
                  className={clsx(
                    'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
                    pathname === '/admins/salaries' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/admins/salaries">
                    <div className='flex items-center justify-start gap-2 px-3 py-2'>
                      <FaRegDotCircle
                        size={25}
                      />
                      <h3 className="font-semibold text-base truncate mt-1">
                        Xem lương
                      </h3>
                    </div>

                  </Link>
                </div>





              </div>
            </div>
          )}
        </div>


        {/* Khen thưởng kỉ luật */}
        <div className="relative">
          <div
            className={clsx(
              'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] px-3 py-2 hover:ring-2 cursor-pointer',
              pathname.includes('/admins/rewards') || pathname.includes('/admin/disciplines') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
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
                    pathname.includes('/admins/rewards') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/admins/rewards">
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
                    pathname.includes('/admins/disciplines') ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
                  )}
                >
                  <Link href="/admins/disciplines">
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


        {/* Account */}
        <div className="relative">
          <div
            className={clsx(
              'rounded-md hover:bg-[#e7f1fe] font-semibold  hover:text-[#2c76f9] hover:ring-2',
              pathname === '/admins/accounts' ? 'bg-[#e7f1fe] text-[#2c76f9] ring-2' : 'bg-transparent text-[#c4c7cc]'
            )}

          >
            <div className='flex items-center justify-start gap-2 mr-2 text-while font-semibold'>

              <Link href="/admins/accounts">
                <div className='flex items-center justify-start gap-2 px-3 py-2'>
                  <MdOutlineManageAccounts
                    size={25}
                  />
                  <h3 className='text-base truncate'>
                    Tài khoản
                  </h3>

                </div>
              </Link>
            </div>
          </div>


        </div>










      </div>
    </div>
  );
};

export default Menu;
