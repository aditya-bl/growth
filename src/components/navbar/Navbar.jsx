"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import Logo from "public/logo.png";
import sign from "./signin.module.css";
import { auth, provider } from "@/app/firebase";
import { signInWithPopup } from 'firebase/auth';
import Link from 'next/link';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const [value, setValue] = useState("");
    const [signin, setsignin] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 882) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
            setShowDrawer(false); // Close the drawer on resize
        };
        
        handleResize(); // Check initial screen size
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    const toggleMenu = () => {
        // setShowMenu(!showMenu);
        setShowDrawer(!showDrawer);
    };

    const handleSignIn  = () => {
        setsignin(true);
      }

    const handleclose = () => {
        setsignin(false);
    }


    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <Link href="/">
                <Image src={Logo} width={120} height={50} alt="growth" />
                    </Link>
            </div>
            {showMenu ? (
                <div className={styles.menuButton} onClick={toggleMenu}>
                    <Image width="20" height="20" src="https://img.icons8.com/ios-filled/50/4E0668/menu--v1.png" alt="menu--v1"/>
                </div>
            ) : (
                <ul className={styles.navbarItems}>
                    <Link href="/">
                    <li className={styles.navbarItem}>Home</li>
                        </Link>
                        <Link href="/properties">
                            
                    <li className={styles.navbarItem}>Investments</li>
                            </Link>
                        <Link href="/faq">
                    <li className={styles.navbarItem}>FAQ</li>
                        </Link>
                        <Link href="/about">
                    <li className={styles.navbarItem}>About Us</li>
                        </Link>
                    <li className={styles.navbarItem}>
                        <button className={styles.navbtn1}>Refer and Earn</button>
                    </li>
                    <li className={styles.navbarItem}>
                        <Image src="https://img.icons8.com/ios/90/000000/headset--v1.png" width={30} height={30} alt='customer care' />
                    </li>
                    <li className={styles.navbarItem}>
                        <button className={styles.navbtn} onClick={handleSignIn}>Sign In</button>
                    </li>
                </ul>
            )}
            {showDrawer && (
                <div className={styles.drawer}>
                    <div className={styles.close} onClick={toggleMenu}>
                        <Image style={{cursor: "pointer"}} src="https://img.icons8.com/ios/90/000000/multiply.png" width={30} height={30} alt="close" />
                    </div>
                    <ul className={styles.drawerItems}>
                        <Link href="/">
                        <li className={styles.drawerItem}>Home</li>
                            </Link>
                        <li className={styles.drawerItem}>Investments</li>
                        <li className={styles.drawerItem}>FAQ</li>
                        <li className={styles.drawerItem}>About Us</li>
                        <li className={styles.drawerItem}>
                            <button className={styles.drawerbtn1}>Refer and Earn</button>
                        </li>
                        <li className={styles.drawerItem}>
                            <Image src="https://img.icons8.com/ios/90/4E0668/headset--v1.png" width={30} height={30} alt='customer care' />
                        </li>
                        <li className={styles.drawerItem}>
                            <button className={styles.drawerbtn} onClick={handleSignIn}>Sign In</button>
                        </li>
                    </ul>
                </div>
            )}
            {signin && (
                    <div className={sign.signin} >
                    <p><Image onClick={handleclose} width="40" height="40" src="https://img.icons8.com/ios-filled/50/multiply.png" alt="multiply"/></p>
                    <div className={sign.left}>
                            <h1>You are seconds away from <br /> diversifying your portfolio!</h1>
                    </div>
                    <div className={sign.right} >
                        <p>Lets begin your high returns journey</p>
                        <h3>Sign in with just a click!</h3>
                        <div className={sign.log}>
                            <button className={sign.google} onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</button>
                            <button className={sign.number}>Sign in Phone Number</button>
                        </div>
                    </div>
            </div>
            )}
        </div>
    );
};

export default Navbar;
