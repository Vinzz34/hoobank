import { bill,apple,google } from "../assets"
import styles from "../styles"

const Billing = () => {
  return (
    <section id="product" className={`flex flex-col gap-6 md:gap-10 items-center md:flex-row-reverse ${styles.paddingY}`}>
      <div className="flex-1 text-center md:text-left">
        <h2 className={`${styles.heading2} mb-6`}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mb-12`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex gap-8 justify-center md:justify-normal">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
      <div className="flex-1 relative">
        <img className="z-[5] relative" src={bill} alt="bill" />
        <div className="absolute top-0 -left-1/2 z-[3] w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute bottom-0 -left-1/2 z-[0] w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
    </section>
  )
}

export default Billing