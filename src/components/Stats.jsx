import { stats } from "../constants"


const Stats = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 sm:mb-20 mb-6">
      {stats.map((stat) => (
        <div className="flex items-center gap-6" key={stat.id}>
          <h4 className="text-white text-[30px] xs:text-[40px] font-semibold">{stat.value}</h4>
          <p className="text-gradient text-[15px] xs:text-[20px] uppercase">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats