import { Flashes } from "./data/flashcards/Flashes"
// import { Summaries } from "./data/summaries/Summaries";


export const InfoCategories = {
    getCategories: async () => {
        const names: string[] = Flashes.map(flash => flash.name)
        return names;
    },

    getFlashCardsByCategory: async (category: string) => {
        const categoryInfo = Flashes.filter(flash => flash.name === category);
        return categoryInfo[0]
    },

    // getSummariesByCategory: async (category: string) => {
    //     const summaryInfo = Summaries.filter(summary => summary.name === category);
    //     return summaryInfo[0]
    // }
}
