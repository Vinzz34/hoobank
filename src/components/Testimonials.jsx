import styles from "../styles"
import { feedback } from "../constants"
import { quotes } from "../assets"

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} space-y-20 relative`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center text-center md:text-left z-[1] relative">
        <h2 className={`${styles.heading2}`}>What people are <br className="sm:block hidden"/> saying about us</h2>
        <div className="w-full">
          <p className={`${styles.paragraph} max-w-[450px] mx-auto md:mx-0`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-between gap-4 z-[1] relative">
        {feedback.map(feed => (
          <div className="max-w-[370px] feedback-card cursor-pointer px-10 py-[60px] rounded-[20px] space-y-9" key={feed.id}>
            <img src={quotes} alt="quotes" />
            <p className="text-lg text-white leading-[1.8] min-h-32">{feed.content}</p>
            <div className="flex gap-4">
              <img className="w-12 h-12" src={feed.img} alt="profile-picture" />
              <div className="">
                <h6 className="text-[20px] text-white leading-[1.6]">{feed.name}</h6>
                <p className="text-dimWhite">{feed.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] bottom-40 rounded-full blue__gradient"></div>
    </section>
  )
}

export default Testimonials