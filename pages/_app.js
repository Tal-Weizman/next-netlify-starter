import '@styles/globals.css'
import { ThirdwebProvider,ChainId } from "@thirdweb-dev/react";


function Application({ Component, pageProps }) {
  return <ThirdwebProvider desi
  redChainId={ChainId.Rinkeby} >
   <Component {...pageProps} />
   </ThirdwebProvider>
}

export default Application
