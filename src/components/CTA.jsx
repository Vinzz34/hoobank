import styles from "../styles"
import Button from "./Button"

const CTA = () => {
  return (
    <section className={`${styles.padding} ${styles.marginY} flex flex-col gap-8 md:flex-row items-center justify-between bg-black-gradient-2 rounded-[20px]`}>
      <div className="text-center md:text-left">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} mt-6 max-w-[445px] mx-auto md:mx-0`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <Button />
    </section>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA