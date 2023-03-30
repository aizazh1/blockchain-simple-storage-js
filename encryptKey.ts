import * as dotenv from "dotenv";
dotenv.config();
import { ethers } from "ethers";
import fs from "fs-extra";

const main = async () => {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD!,
    wallet.privateKey
  );
  fs.writeFileSync(".encryptedKey.json", encryptedJsonKey);
  console.log("Key encrypted!");
};

main();
