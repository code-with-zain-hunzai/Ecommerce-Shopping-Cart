export function addtocart(id, title, price, rating, image) {
    return {
        type: "Add_item_to_cart",
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image
    };
}

export function removefromcart(id) {
    return {
        type: "Remove_item_from_cart",
        id
    };
}
