import {useMemo} from "react";

export const useSearch = (cards, search) => {
    const searchCard = useMemo(() => {
        if (search) {
            return cards.filter((card) => card.name.toLowerCase().includes(search.toLowerCase()))
        } else {
            return cards
        }
    }, [search, cards]);
    return searchCard
};
