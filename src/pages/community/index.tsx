import { Menu } from "@/components/menu";
import { LensProvider } from "@lens-protocol/react-web";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import { LensConfig, development } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { CommunityPosts } from "./community";

export default function Community() {
  const { publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai, polygon],
    [publicProvider()]
  );

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [
      new InjectedConnector({
        options: {
          shimDisconnect: false, // see https://github.com/wagmi-dev/wagmi/issues/2511
        },
      }),
    ],
  });

  const lensConfig: LensConfig = {
    bindings: wagmiBindings(),
    environment: development,
  };
  return (
    <div className="min-h-screen flex">
      <Menu />
      <WagmiConfig config={config}>
        <LensProvider config={lensConfig}>
          <CommunityPosts />
        </LensProvider>
      </WagmiConfig>
    </div>
  );
}
