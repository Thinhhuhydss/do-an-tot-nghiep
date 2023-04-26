import React, { useState } from "react"
import Link from "next/link"

import { BiEdit, BiTrashAlt } from "react-icons/bi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import AddModal from "../post/AddModal"
import { useQuery, useQueryClient } from "react-query"
import { getPost, deletePost } from "@/lib/helper"
import ViewModal from "./ViewModal"
import EditModal from "./EditModal"
// import ViewModal from "./ViewModal"
// import EditModel from "./EditModal"

type Props = {}
type Post = {
  _id: string
  title: string
  category: string
  content: string
  description: string
  userCreate: string
  status: string
}

const Table = (props: Props) => {
  const { isLoading, isError, data, error } = useQuery("post", getPost)
  const queryClient = useQueryClient()
  const [addModal, setAddModal] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [postIdDelete, setPostIdDelete] = useState(String)
  const [showModalEdit, setShowModalEdit] = useState(false)

  const onDelete = async (postId: string) => {
    await deletePost(postId)
    await queryClient.prefetchQuery("post", getPost)
  }

  const [postInfo, setPostInfo] = useState(Object)
  const [viewModal, setViewModal] = useState(false)

  const handleOnClose = (mess: String) => {
    console.log(mess)
    setAddModal(false)
    if (mess !== "close") {
      switch (mess) {
        case "success":
          toast.success("Add New Account Success!", {
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
          toast.error("Add New Account False!", {
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
          toast("Is Loading!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          toast.success("Add New Account Success!", {
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
  const handleOnClose1 = (mess: String, modal: String) => {
    setShowModalEdit(false)
    if (mess !== "close") {
      switch (mess) {
        case "success":
          toast.success(`${modal} Success!`, {
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
          toast.error(`${modal} False!`, {
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
          toast("Is Loading!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          toast.success("Add New Account Success!", {
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
  const handleOnViewClose = () => {
    setViewModal(false)
  }

  if (isLoading) return <div>Employee is Loading...</div>
  if (isError) return <div>Got Error {`${error}`}</div>
  return (
    <div className="bg-white w-full border p-4 mt-4  rounded-lg h-[84vh] xl:h-[82vh] overflow-y-auto scrollbar-style">
      <div className="mb-4">
        <button
          className="bg-white py-2 px-6 border-green-600 text-green-600 border-2 rounded-lg hover:bg-green-600 hover:text-white"
          onClick={() => setAddModal(true)}
        >
          <span className="font-medium">Add New Post</span>
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-300 uppercase bg-gray-900">
          <tr>
            <th scope="col" className="px-4 py-3 xl:text-lg">
              Title
            </th>
            <th scope="col" className="px-4 py-3 xl:text-lg">
              Category
            </th>
            <th scope="col" className="px-4 py-3 xl:text-lg">
              Description
            </th>
            <th scope="col" className="px-4 py-3 xl:text-lg">
              UserCreate
            </th>
            <th scope="col" className="px-4 py-3 xl:text-lg">
              Status
            </th>
            <th scope="col" className="px-4 py-3 xl:text-lg">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((post: Post) => (
            <tr
              className="bg-gray-200 border-b text-gray-900 hover:bg-gray-300"
              key={post._id}
            >
              <th
                scope="row"
                className="px-4 py-4 font-medium  whitespace-nowrap text-lg"
                onClick={() => {
                  setPostInfo(post)
                  setViewModal(true)
                }}
              >
                {post.title}
              </th>
              <td
                className="px-4 py-4 text-lg"
                onClick={() => {
                  setPostInfo(post)
                  setViewModal(true)
                }}
              >
                {post.category}
              </td>
              <td
                className="px-4 py-4 text-lg"
                onClick={() => {
                  setPostInfo(post)
                  setViewModal(true)
                }}
              >
                {post.description}
              </td>
              <td
                className="px-4 py-4 text-lg"
                onClick={() => {
                  setPostInfo(post)
                  setViewModal(true)
                }}
              >
                {post.userCreate}
              </td>
              <td
                className="px-4 py-4 text-lg"
                onClick={() => {
                  setPostInfo(post)
                  setViewModal(true)
                }}
              >
                <span
                  className={`${
                    post.status === "active" ? "bg-green-500" : "bg-red-500"
                  } text-white px-6 py-2.5 rounded-xl text-lg`}
                >
                  {post.status === "active" ? "Active" : "Block"}
                </span>
              </td>
              <td className="flex items-center px-4 py-4 space-x-3 relative">
                <button
                  className="cursor"
                  onClick={() => {
                    setPostInfo(post)
                    setShowModalEdit(true)
                  }}
                >
                  <BiEdit size={25} color="rgb(34,197,94)" />
                </button>
                <button
                  className="cursor"
                  onClick={() => {
                    setPostIdDelete(post._id)
                    setModalDelete(true)
                  }}
                >
                  <BiTrashAlt size={25} color="rgb(244,63,94)" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-7 w-full h-fit flex flex-row sm:justify-end justify-center">
        <nav className="">
          <ul className="inline-flex -space-x-px">
            <li>
              <Link
                href={"/admin/document"}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/document"}
                className="px-3 py-2 text-gray-600 border border-gray-300 bg-gray-200 hover:bg-gray-300 hover:text-blue-700"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/document"}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                ...
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/document"}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                10
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/document"}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`${
          !modalDelete ? "hidden" : "block "
        } fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-20`}
      >
        <div
          className={`bg-white p-8 bottom-0 border-4 border-green-600  rounded-lg flex flex-col items-center transition ease-in-out delay-150 duration-1000`}
        >
          <span className="font-medium text-3xl text-gray-950">
            Do you want delete?
          </span>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                if (postIdDelete.length > 0) onDelete(postIdDelete)
                setModalDelete(false)
                setPostIdDelete("")
              }}
              className="bg-white border-2 border-red-600 text-red-600 px-6 py-0 rounded-lg hover:bg-red-600 hover:text-white"
            >
              <span className="text-xl font-medium uppercase  ">yes</span>
            </button>
            <button
              onClick={() => setModalDelete(false)}
              className="bg-white border-2 border-gray-600 text-gray-600 px-6 py-0 rounded-lg hover:bg-gray-600 hover:text-white"
            >
              <span className="text-xl font-medium uppercase">no</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <AddModal onClose={handleOnClose} visible={addModal} />
      <EditModal
        onClose={handleOnClose1}
        visible={showModalEdit}
        postInfo={postInfo}
      />
      <ViewModal
        onViewClose={handleOnViewClose}
        visible={viewModal}
        postInfo={postInfo}
      />
    </div>
  )
}

export default Table