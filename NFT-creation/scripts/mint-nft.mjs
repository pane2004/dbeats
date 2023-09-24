const META_DATA_URL = "ipfs://bafyreibue5zps7ecuqjwd5izzwhhxg4hcloagbdwxiqao2v4i7dvlsim4i/metadata.json"
const CONTRACT_ADDRESS = "0x95F1819B6a1DEf7b9e55603986c4999495d7b267"
//0x95F1819B6a1DEf7b9e55603986c4999495d7b267
async function mint_NFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

export function mintNFT(){
   
   mint_NFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => {
      console.log("Asset stored successfully!");
      // Maybe set some state here to notify the user of success
  })
  .catch((error) => {
      console.error(error);
      // Handle the error gracefully. For example, show an error message to the user.
  });
}


