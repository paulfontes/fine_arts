import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ArtsServices {
    async getArt() {
        const response = await api.get('api/artworks')
        logger.log(response.data)
        return response.data
    }

}

export const artsServices = new ArtsServices()