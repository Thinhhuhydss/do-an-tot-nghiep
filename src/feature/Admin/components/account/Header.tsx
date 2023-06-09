import React, { useState } from "react"
import Link from "next/link"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Modal from "./Modal"

type Props = { onChange: (status: string) => void }

const Header = (props: Props) => {
  const [modal, setModal] = useState(false)
  const [action, setAction] = useState("")
  const [userInfo, setUserInfo] = useState(Object)

  const handleOnClose = (mess: String) => {
    setModal(false)
    if (mess !== "close") {
      switch (mess) {
        case "success":
          toast.success("Thêm mới tài khoản thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          break
        case "error":
          toast.error("Thêm mới tài khoản thất bại!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          break
        default:
          toast("Đang thực hiện...", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          toast.success("Thêm mới tài khoản thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
      }
    }
  }

  return (
    <div className="bg-white flex flex-col gap-2 w-full border p-4 mt-4 md:flex-row sm:justify-between rounded-lg">
      <div className="flex flex-row items-center">
        <Link href={"/admin/account/"}>
          <span className="text-gray-900 font-medium text-xl mr-4 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:bg-slate-900 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
            Người dùng
          </span>
        </Link>
        {/* <Link href={"/admin/account/"}>
          <span className="text-gray-500 hover:text-gray-900 font-medium text-xl cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:bg-slate-900 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
            Cửa hàng
          </span>
        </Link> */}
      </div>
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={() => {
            setAction("add")
            setModal(true)
          }}
          className="min-w-fit text-white bg-[rgb(34,197,94)] hover:bg-green-600 hover:text-gray-100 rounded-lg text-sm p-1.5 sm:p-2.5 cursor-pointer"
        >
          <span className="text-xs uppercase font-normal ">
            Tạo tài khoản mới{" "}
          </span>
        </button>
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => {
            props.onChange(e.target.value)
          }}
          className="bg-gray-300 outline-none flex items-center  text-gray-900 text-sm rounded-lg focus:ring-blue-500  w-full p-1.5 sm:p-2.5 "
        >
          <option value="">Chọn trạng thái</option>
          <option value="active">Bình thường</option>
          <option value="block">Khóa</option>
        </select>
        <ToastContainer />
      </div>
      {modal && (
        <Modal
          onClose={handleOnClose}
          visible={modal}
          action={action}
          userData={userInfo}
        />
      )}
    </div>
  )
}

export default Header
