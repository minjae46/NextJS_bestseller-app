import styles from "../../styles/layout.module.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      {children}
    </div>
  );
}
