import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Artwork.js"

class ArtsServices {
    async getArt() {
        const response = await api.get('api/artworks')
        this.handleArtResponse(response)

    }
    async changePage(pageNumber) {
        const response = await api.get(`api/artworks?page=${pageNumber}`)
        this.handleArtResponse(response)
    }

    handleArtResponse(response) {
        const artData = response.data.artworks.map((pojo) => new Artwork(pojo))
        AppState.artworks = artData
        AppState.currentPage = response.data.page
        AppState.totalPage = response.data.pages
    }

}

export const artsServices = new ArtsServices()