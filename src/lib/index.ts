import { Flashes } from "./data/flashcards/Flashes"


export const InfoCategories = {
    getCategories: async () => {
        const names: string[] = Flashes.map(flash => flash.name)
        return names;
    },

    getFlashCardsByCategory: async (category: string) => {
        const categoryInfo = Flashes.filter(flash => flash.name === category);
        return categoryInfo[0]
    }
}
