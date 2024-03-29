import styles from "../../styles/about.module.css";

export const metadata = {
  title: "ABOUT US",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        Explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </div>
  );
}
