class productService {
  getAllProducts = async () => {
    const res = await fetch(`${process.env.API_URL}/product/get-all`);
    const data = await res.json();

    return data;
  };

  getSingleProduct = async slug => {
    const res = await fetch(`${process.env.API_URL}/product/get-single/${slug}`);
    const data = await res.json();
    return data;
  };
}

export default productService;
