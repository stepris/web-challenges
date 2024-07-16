// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

// console.log(dbConnect, Product);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    // console.log("Hello from connection");
    const products = await Product.find();
    // console.log(products);
    return res.status(200).json(products);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
