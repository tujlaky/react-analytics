// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  { body }: NextApiRequest,
  res: NextApiResponse<{
    id: number;
  }>
) {
  res.status(201).json({
    id: 1,
  });
}
