export const getCategoryNames = (categories , ids) => {
    const result = [];
    ids.forEach(item => {
        const category = categories.find(c=>c.id===item);
        if(category){
            result.push(category.name);
        }
    })
    return result ;
}