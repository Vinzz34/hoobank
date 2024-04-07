import styles from "../styles"
import { card } from "../assets"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${styles.paddingY}`}>
      <div className="flex-1 text-center md:text-left">
        <h2 className={`${styles.heading2} mb-6`}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[500px] mb-12`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button /> 
      </div>
      <div className="flex-1">
        <img src={card} alt="card" />
      </div>
    </section>
  )
}

export default CardDeal