import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Artwork.js"

class ArtsServices {
    async getArt() {
        const response = await api.get('api/artworks')
        const artData = response.data.artworks.map((pojo) => new Artwork(pojo))


        AppState.artworks = artData

    }
    async changePage(pageNumber) {
        const response = await api.get(`api/artworks?page=${pageNumber}`)
    }

}

export const artsServices = new ArtsServices()