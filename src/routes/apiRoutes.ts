import express from 'express'

import { ImgurApiController } from 'controllers/ImgurApiController'

const { getAllAccoutImagesList } = new ImgurApiController()

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/account-images', getAllAccoutImagesList)

export default router
