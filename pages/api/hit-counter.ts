import type { NextApiRequest, NextApiResponse } from "next";
import faunadb from "faunadb";

const secret = process.env.FAUNA_DB_SECRET || "<dummy_secret>";
const domain = process.env.FAUNA_DB_DOMAIN || "db.eu.fauna.com";
const collection = process.env.FAUNA_DB_COLLECTION || "<collection-name>";
const docID = process.env.FAUNA_DB_DOC_ID || "<doc-ref-id>";

export default async function incrementHitCounter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { Add, Update, Select, query, Ref } = faunadb;
    const client = new faunadb.Client({
      secret,
      domain,
    });

    const docRef = Ref(faunadb.Collection(collection), docID);
    const doc = query.Get(docRef);
    // Fetch the document for-real
    const document = await client.query(
      Update(docRef, {
        data: {
          value: Add(Select(["data", "value"], doc), 1),
        },
      })
    );
    //@ts-ignore
    return res.status(200).json({ value: document.data.value });
  } catch (e) {
    res.json({ error: "yes", value: "too hard to count..." });
  }
}
