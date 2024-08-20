require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xb282a1888101b0d8d26153819726096c367b14ee996135b3626df8534d576f6b"],
    },
  },
};
