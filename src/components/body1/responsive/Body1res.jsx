import Image from 'next/image'
import React from 'react'
import styles from "./body1res.module.css";

const Body1res = () => {
  return (
    <>
        <div className={styles.body1}>


            <div className={styles.body1left} >
                <h1>We are now live on <br />
                    Playstore and Appstore!</h1>
                <p className={styles.mb}>Tracking your investments got <br />
                    a whole lot easier!</p>

                    <div className={styles.btn}>


                <button > <Image width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/google-play.png" alt="google-play"/> Coming Soon ...</button>
                <button> <Image width="30" height="30" src="https://img.icons8.com/sf-black/64/FFFFFF/mac-os.png" alt="mac-os"/> Coming Soon ...</button>
                    </div>
            </div>
                

            <div className={styles.right} >
                <Image src="https://aasthy.com/static/media/aasthy-app-props-desktop.c5e1c3c6.png" alt='mobile logo' width={100} height={200}  />
            </div>

        </div>
        </>
  )
}

export default Body1res