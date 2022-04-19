import React from "react"
import styles from "../styles/Globals"

const Button = ({ assetURL, Link }: {assetURL:any, Link:any}) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(Link, "/")}>
      <img className={styles.btnIcon} src={assetURL} alt="expo_icon" />     
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo store</p>
      </div>
    </div>
  )
}
  
export default Button