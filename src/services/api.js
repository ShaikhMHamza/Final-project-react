const API_BASE_URL = "https://fakestoreapi.com"

const productDetails = (apiProduct) => ({
  id: apiProduct.id,
  name: apiProduct.title,
  price: Math.round(apiProduct.price),
  image: apiProduct.image,
  category: apiProduct.category.charAt(0).toUpperCase() + apiProduct.category.slice(1),
  description: apiProduct.description,
})

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }
    const data = await response.json()
    return data.map(productDetails)
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch products for category: ${category}`)
    }
    const data = await response.json()
    return data.map(productDetails)
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error)
    throw error
  }
}

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`)
    if (!response.ok) {
      throw new Error("Failed to fetch categories")
    }
    const data = await response.json()
    const transformedCategories = data.map((cat) => cat.charAt(0).toUpperCase() + cat.slice(1))
    return ["All", ...transformedCategories]
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}