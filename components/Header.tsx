import styles from "../styles/Header.module.css"

interface props {
  title: string;
}

const Header = ({ title }: props) => {
  return (
    <div className={styles.header}>
      { title }
    </div>
  )
}

export default Header;