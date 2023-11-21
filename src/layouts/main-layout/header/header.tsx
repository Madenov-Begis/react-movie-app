import styles from './header.module.css'

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <img src="/logo.png" alt="" />
      </div>

      <div className={styles.burgerMenu}></div>
    </header>
  )
}
