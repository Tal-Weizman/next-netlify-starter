import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import hashlipsLogo from "./logo.png";
import legoCards from "./cards.gif";
import legoCards2 from "./cards2.gif";
import twiterLogo from "./twiter.png";
import ethLogo from "./ethscan.png";
import DISCORDLOGO from "./discord.png";
import { useNFTDrop, useContractMetadata,useClaimedNFTSupply,useUnclaimedNFTSupply ,useAddress,useAccount,useMetamask,useWalletConnect} from "@thirdweb-dev/react";
const contractAddress = "0x3e40dF17853892a619eD1dCf97B9720ae2146042";


export default function Home() {

  const contract = useNFTDrop(contractAddress);
  const address = useAddress();
  const connectMetamask = useMetamask();
  const { data : contractMetadata} = useContractMetadata(contractAddress);
  const { data : claimedNFTSupply} =  useClaimedNFTSupply(contract);
  const { data : unclaimedNFTSupply} =  useUnclaimedNFTSupply(contract);

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
      <header className="flex flex-col items-center justify-center p-6 md:p-12">
        <img className="" src={hashlipsLogo} />
        <br />
        <p >Let The Minting Begin 111222 </p>

        <br />
        <p>{contractMetadata?.description}</p>
      </header>
      <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-3 md:p-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-2xl font-bold text-secondary">
          <img className="" src={legoCards2} />
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-sm flex-col space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-md">
              <img className="aspect-square object-cover" src={contractMetadata?.image} />
            </div>

            <div className="flex justify-center">
            <p>Total Minted</p>
              
          

            </div>
            
            <div className="flex justify-center">

              
              <p>{claimedNFTSupply?.toNumber()} / {unclaimedNFTSupply?.toNumber()}</p>
           

            </div>


            <div className="flex justify-center">
              <button onClick={connectMetamask} className="rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-75">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-2xl font-bold text-secondary">
          <img className="" src={legoCards} />
  
          </h1>
        </div>


      </main>
      <footer className="flex items-center justify-center space-x-2 p-6">
        <p className="text-sm">Find out More:</p>


<div className="grid gap-6 rounded-md p-6 md:grid-cols-3 md:p-12">

<div className="flex flex-col items-center">
<img className="h-14 md:h-16  " src={DISCORDLOGO} />
        </div>
        <div className="flex flex-col items-center">
        <img className="h-12 md:h-14" src={twiterLogo} />
        </div>
        <div className="flex flex-col items-center">
        <img className="h-12 md:h-14" src={ethLogo} />

        </div>
</div>



      </footer>
    </div>
  );
}
