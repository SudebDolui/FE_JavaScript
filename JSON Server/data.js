module.exports = () => {
    const data = {
        products: []
    }
    for (let index = 0; index < 1001; index++) {
        data.products.push({
            ex,
            title: `product${index}`
        })
    }
    return data;
};
