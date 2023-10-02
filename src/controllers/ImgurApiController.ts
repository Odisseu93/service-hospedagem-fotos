import { ImgurApi } from 'imgur'

import { type Request, type Response } from 'express'

export class ImgurApiController {
  async getAllAccoutImagesList (req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const apiRes = await new ImgurApi().getAllAccountImages()

    try {
      return res.status(apiRes.status).json(apiRes.data)
    } catch (err) {
      return res.status(500).json({ message: err })
    }
  }
}
