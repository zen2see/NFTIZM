import { Download, Features, SectionWrapper } from "./components"
import assets from './assets'
import styles from './styles/Globals'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing!"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using the NFTIZM Marketplace!"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
     />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a butter-smooth UI of the NFTIZM NFT Marketplace. Fluently colorful UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="NFTIZM is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative ways to showcase the Marketplace"
        description="The app contains two screens. The first lists all NFTs while the secon one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4  py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>An April 2022 build by {" "}
          <span className="bold">zen2see LLC</span>
        </p>
      </div>
    </>
  )
}

export default App 