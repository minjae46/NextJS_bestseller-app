import styles from "../../styles/layout.module.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>About Us</h1>
      {children}
    </div>
  );
}
