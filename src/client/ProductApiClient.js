import axios from "axios";


export const updateProduct = async (product) => {
    return (await axios.put(`/product/${product.id}`, product))
}

export const getAllProducts = async () => {
    return (await axios.get(`/product`)).data
}

export const getProductById = async (id) => {
    return (await axios.get(`/product/${id}`)).data
}

export const deleteProductById = async (id) => {
    return (await axios.delete(`/product/${id}`)).data
}