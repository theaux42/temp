"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { chilizSpicyTestnet } from "@/lib/chiliz";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "clmg6vf2q01avmm0fdcb2h1x6"}
      config={{
        // Add Chiliz Spicy Testnet to the list of supported chains
        supportedChains: [chilizSpicyTestnet],
        // Set Chiliz Spicy Testnet as the default chain
        defaultChain: chilizSpicyTestnet,
        // Customize Privy's appearance to match the Arena theme
        appearance: {
          theme: "dark",
          accentColor: "#C8102E", // Chiliz red
          logo: "/logo.png",
          landingHeader: "ENTER THE ARENA",
          showWalletLoginFirst: false,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        // Configure login methods
        loginMethods: ["email", "wallet"],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
