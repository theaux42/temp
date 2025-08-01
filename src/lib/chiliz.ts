import { defineChain } from "viem";

export const chilizSpicyTestnet = defineChain({
  id: 88882, // Chiliz Spicy Testnet chainId
  name: "Chiliz Spicy Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Chiliz",
    symbol: "CHZ",
  },
  rpcUrls: {
    default: {
      http: ["https://spicy-rpc.chiliz.com"], // Chiliz Spicy Testnet RPC
    },
  },
  blockExplorers: {
    default: { name: "Chiliz Spicy Explorer", url: "https://spicy-explorer.chiliz.com/" },
  },
  testnet: true,
});
