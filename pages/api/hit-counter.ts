import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../mongodb";

export default async function incrementHitCounter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("hit-counter");

    const document = await collection.findOneAndUpdate(
      { id: "hit-counter" },
      { $inc: { value: 1 } },
      { returnDocument: "after" }
    );
    //@ts-ignore
    return res.status(200).json({ value: document.value.value });
  } catch (e) {
    console.log("error", e);
    res.json({ error: "yes", value: "too hard to count..." });
  }
}
