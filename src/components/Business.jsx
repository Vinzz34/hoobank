import styles from "../styles";
import Button from "./Button";
import { features } from "../constants";

const Business = () => {
  return (
    <section id="features" className={`flex flex-col gap-6 md:gap-10 items-center md:flex-row ${styles.paddingY}`}>
      <div className="flex-1 text-center md:text-left">
        <h2 className={`${styles.heading2} mb-6`}>You do the business, <br className="sm:block hidden"/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[570px] mb-12`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />
      </div>
      <div className="flex-1 flex flex-col space-y-5">
       {features.map(feature => (
        <div key={feature.id} className="flex gap-5 items-center p-5 feature-card cursor-pointer rounded-[20px]">
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-dimBlue">
            <img src={feature.icon} alt="icon" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-white text-lg font-semibold">{feature.title}</h3>
            <p className="text-dimWhite ">{feature.content}</p>
          </div>
        </div>
       ))} 
      </div>
    </section>
  )
}

export default Business