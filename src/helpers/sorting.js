export function sorting(direction, sortType) {
    return function sort(itemA, itemB) {
        if (itemA[sortType] < itemB[sortType]){
            return -direction;
        }
        if (itemA[sortType] > itemB[sortType]){
            return direction;
        }
        return 0;
    }
}

export default sorting