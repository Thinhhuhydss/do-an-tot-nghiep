import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { RiAlertFill } from "react-icons/ri"
import { FaThList } from "react-icons/fa"
import {
  BsArrowLeftShort,
  BsSearch,
  BsPerson,
  BsPersonLinesFill,
  BsPostcardFill,
} from "react-icons/bs"
import {
  AiOutlineBarChart,
  AiOutlineSetting,
  AiOutlineLogout,
  AiFillFileText,
  AiFillReconciliation,
} from "react-icons/ai"

const Menus = [
  { title: "statistical", link: "/admin" },
  {
    title: "account",
    icon: <BsPersonLinesFill />,
    spacing: true,
    link: "/admin/account",
  },
  {
    title: "inspection",
    icon: <AiFillReconciliation />,
    // submenu: true,
    // submenuItems: [
    //   { title: "submenu 1" },
    //   { title: "submenu 2" },
    //   { title: "submenu 3" },
    // ],
    link: "/admin/inspection",
  },
  { title: "post", icon: <BsPostcardFill />, link: "/admin/post" },
  { title: "category", icon: <FaThList />, link: "/admin/category" },
  { title: "document", icon: <AiFillFileText />, link: "/admin/document" },
  { title: "report", icon: <RiAlertFill />, link: "/admin/report" },
  {
    title: "profile",
    icon: <BsPerson />,
    spacing: true,
    link: "/admin/profile",
  },
  { title: "setting", icon: <AiOutlineSetting />, link: "/admin/setting" },
  { title: "logout", icon: <AiOutlineLogout />, link: "/admin/logout" },
]

type Props = {}

const SideBar = (props: Props) => {
  const [open, setOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(true)

  const { pathname } = useRouter()

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1280) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={`bg-dark-green h-screen p-5 pt-8 ${
        open ? "w-72 absolute z-10" : "w-20 relative"
      } duration-300 sm:relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 
      border-dark-green cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex items-center">
        <img
          src="/assets/images/logo3.png"
          className={`h-9 w-9 text-4xl rounded-full cursor-pointer block float-left mr-2 duration-500 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium sm:text-2xl text-base duration-300 ${
            !open && "scale-0"
          }`}
        >
          DaNangFA
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md bg-light-while mt-6 ${
          open ? "px-4" : "px-2.5"
        } py-2`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && "mr-2"
          }`}
        />
        <input
          type={"search"}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white
        focus:outline-none ${!open && "hidden"}`}
        />
      </div>

      <ul className="pt-2">
        {Menus.map((menu) => (
          <Link href={menu.link} className="relative" key={menu.title}>
            <li
              className={`text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-green-700 rounded-md ${
                menu.spacing ? "mt-9 after:h-[53%]" : "mt-2 after:h-[83%]"
              }
                 ${
                   pathname === menu.link &&
                   "bg-green-700 after:absolute after:-left-5 after:bg-green-700 after:w-1.5 after:rounded-lg after:transition-all"
                 } `}
              // onClick={() => {
              //   if (menu.submenuItems) {
              //     setSubmenuOpen(!submenuOpen)
              //   }
              // }}
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <AiOutlineBarChart />}
              </span>
              <span
                className={`text-base capitalize font-medium flex-1 ${
                  !open && "hidden"
                } duration-300`}
              >
                {menu.title}
              </span>
              {/* {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} />
                )} */}
            </li>
            {/* {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-200 text-sm flex item-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-while rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )} */}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar