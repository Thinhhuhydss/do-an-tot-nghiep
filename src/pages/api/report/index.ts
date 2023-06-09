import type { NextApiRequest, NextApiResponse } from "next"

import connectMongo from "@/database/conn"
import {
  getReport,
  postReport,
  putReport,
  deleteReport,
} from "@/database/reportController"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  )

  //Type of request
  const { method } = req

  switch (method) {
    case "GET":
      getReport(req, res)
      break
    case "POST":
      postReport(req, res)
      break
    case "PUT":
      putReport(req, res)
      break
    case "DELETE":
      deleteReport(req, res)
      break
    default:
      // res.setHeader("Allowd", ["GET", "POST", "PUT", "DELETE"])
      res.status(405).end(`Method ${method} Not Allowd`)
  }
}
