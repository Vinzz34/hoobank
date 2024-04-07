import styles from "../styles"
import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer">
      <div className={`w-full h-full bg-primary rounded-full flex-col ${styles.flexCenter}`}>
        <div className="flex gap-1">
          <p className="text-lg font-medium text-gradient">Get</p>
          <img src={arrowUp} alt="arrowUp" />
        </div>
        <p className="text-lg font-medium text-gradient">Started</p>
      </div>
    </div>
  )
}

export default GetStarted