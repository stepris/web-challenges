import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).json({ error: "Invalid product ID" });
  }

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
