import { discount,robot } from "../assets"
import styles from "../styles"
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row gap-10 md:gap-0 items-center sm:items-start md:items-center ${styles.paddingY}`}>
      <div className={`flex-1 w-full flex flex-col items-center ss:items-start ${styles.paddingX} xl:px-0 text-center ss:text-left`}>
        <div className="flex items-center gap-2 px-[10px] py-1 bg-discount-gradient rounded-[10px] mb-3">
          <img src={discount} alt="discount" />
          <p className="text-lg text-dimWhite"><span className="text-white">20%</span> DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT</p>
        </div>
        <div className="mb-6 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-[52px] ss:text-[72px] text-white font-semibold leading-[1.4]">The Next <br className="sm:block hidden" /><span className="text-gradient">Generation</span></h1>
            <div className="ss:block hidden">
              <GetStarted />
            </div>
          </div>
          <h1 className="text-[52px] ss:text-[68px] text-white font-semibold leading-[1.4]">Payment Method.</h1>
        </div>
        <div className={`${styles.paragraph} max-w-[480px]`}>
          <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.</p>
          <p>We examine annual percentage rates, annual fees.</p>
        </div>
      </div>
      <div className={`flex-1 ${styles.flexCenter} relative`}>
        <img className="w-full h-full z-[5] relative" src={robot} alt="robot" />

        <div className="absolute top-0 w-[40%] h-[35%] z-[0] pink__gradient"></div>
        <div className="absolute bottom-40 w-[80%] h-[80%] z-[1] white__gradient rounded-full"></div>
        <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-[0] blue__gradient"></div>

      </div>
      <div className="block ss:hidden">
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero