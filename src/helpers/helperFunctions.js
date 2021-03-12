export const sortIngredients = (arr) => {
    return arr.sort((a, b) => {
        let currkey = a.name;
        let nextKey = b.name;

        if (currkey < nextKey) return -1;
        if (currkey > nextKey) return 1;
        return 0;
    });
}