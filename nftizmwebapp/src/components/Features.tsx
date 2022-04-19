import React from 'react'
import assets from '../assets'
import styles from '../styles/Globals'

const FeatureCard = ({ iconURL, iconText }: {iconURL : string, iconText: string}) => (
  <div className={styles.featureCard}>
    <img className={styles.featureImg} src={iconURL} alt="icon" />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)
const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            NFTIZM has been developed usiung a cross-platform technology, React Native.
          </p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconURL={assets.react} iconText="React Native" />
          <FeatureCard iconURL={assets.typescript} iconText="Typescript" />
        </div>
      </div>
    </div>
  )
}

export default Features