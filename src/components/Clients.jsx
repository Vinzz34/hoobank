import { clients } from "../constants"

const Clients = () => {
  return (
    <section className="flex flex-row flex-wrap gap-8 justify-center md:justify-between items-center py-8">
      {clients.map(client => (
        <img className="w-[100px] sm:w-48" src={client.logo} alt="logo" key={client.id}></img>
      ))}
    </section>
  )
}

export default Clients