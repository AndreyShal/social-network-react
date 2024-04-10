export const updateObjectInArray = (items: any[],itemId: number, objPropName: string, newObjProps: any) => {
    return items.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}