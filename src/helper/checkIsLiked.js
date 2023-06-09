export const checkIsLiked = (dataFavourite, id) => {
    const filter = dataFavourite?.some((data) => data.pokemon_id === id)
    return filter
}
