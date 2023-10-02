import Bun from 'bun'

import axios, { type AxiosInstance } from 'axios'
import { type ResponseAccountImages } from './types/AccountImages'

export class ImgurApi {
  #client: AxiosInstance
  #accessToken = Bun.env.ACESS_TOKEN

  constructor () {
    this.#client = axios.create({
      baseURL: 'https://api.imgur.com/3',
      headers: {
        Authorization: `Bearer ${this.#accessToken}`
      }
    })
  }

  async getAllAccountImages (): Promise<ResponseAccountImages> {
    const res: ResponseAccountImages = await this.#client.get('/account/me/images')
    return res
  }
}