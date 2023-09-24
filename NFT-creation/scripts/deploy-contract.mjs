import { mintNFT } from "./mint-nft.mjs"

async function deploycontract() {
    const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
    const exampleNFT = await ExampleNFT.deploy()
    await exampleNFT.deployed()
    // This solves the bug in Mumbai network where the contract address is not the real one
    const txHash = exampleNFT.deployTransaction.hash
    console.log(txHash)
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contract deployed to address:", contractAddress)
   }

export async function deployContract(){
  try{
    await deploycontract();
    console.log("Asset contract deployed successfully!");
    await mintNFT();
  }catch(error){
    console.error(error);
  }

}
   
   
