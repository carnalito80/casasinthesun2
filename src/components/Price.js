const Price = (price) => {
    return (
        <span>{nc(price.price)} €</span>
    )
    function nc(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
}

export default Price