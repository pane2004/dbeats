import { NFTStorage, File } from "nft.storage";
import dotenv from "dotenv";
import { deployContract } from "./deploy-contract.mjs";
dotenv.config();

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIxYTcyNGU2NjA0RUUwYTQzNTg5YTdBOGYxMTBhMzNkYjg2NTcxMmQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5NTQ5MzYyMjY5OCwibmFtZSI6ImRiZWF0cyJ9.ctg8UzzrgpWqL539IEDqD_BLf1uZ91e939VmlDjwgDQ";

async function storeasset(mp3File, pngFile, title, description) {
  const client = new NFTStorage({ token: API_KEY });
  const metadata = await client.store({
    name: title,
    description: description,
    image: new File([mp3File], "filename.mp3"), // replace "filename.mp3" with an appropriate name if available
    audio: new File([pngFile], "filename.png"), // replace "filename.png" with an appropriate name if available
  });
  console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);
  return metadata;
}

export async function storeAsset(mp3File, pngFile, title, description) {
  try {
    const data = await storeasset(mp3File, pngFile, title, description);
    console.log("Asset stored successfully!");
    return data;
  } catch (error) {
    console.error(error);
  }
}
