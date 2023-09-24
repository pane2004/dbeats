const { Core } = require('@quicknode/sdk')

const core = new Core({
  endpointUrl: "https://greatest-skilled-water.discover.quiknode.pro/6fd4d93fbb2e72ec50a67838f91dcd2732eaf8da/",
  config: {
    addOns: {
      nftTokenV2: true,
    },
  },
})

core.client
    .qn_fetchNFTsByCollection({
      collection: "0x95F1819B6a1DEf7b9e55603986c4999495d7b267",
      perPage: 100,
    })
    .then((res:any) => console.log(res));