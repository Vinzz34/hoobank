import { socialMedia,footerLinks } from "../constants"
import { logo } from "../assets"
import styles from "../styles"

const Footer = () => {
  return (
    <footer className={`pt-16 pb-[30px]`}>
      <div className="flex flex-col md:flex-row gap-10 pb-[30px] border-b border-b-[#3F3E45]">
        <div className="flex-1 flex flex-col text-center md:text-left items-center md:items-start ">
          <img src={logo} alt="logo" />
          <p className="text-lg text-dimWhite leading-[32px] max-w-[312px] mt-[30px]">A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="flex flex-[1.5] flex-wrap gap-6 justify-center ss:justify-between text-center ss:text-left">
          {footerLinks.map(footerLink => (
            <div key={footerLink.title}>
              <p className="text-lg font-medium text-white leading-[1.5] mb-6">{footerLink.title}</p>
              <div className="grid gap-3">
                {footerLink.links.map(link => (
                  <a className="text-dimWhite leading-[1.5] hover:text-secondary" key={link.name} href={link.link}>{link.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-[30px]">
        <p className="text-lg text-dimWhite leading-[1.5] text-center md:text-left">Copyright &#169; 2021 HooBank. All Rights Reserved.</p>
        <div className="flex gap-[30px]">
          {socialMedia.map(social => (
            <a key={social.id} href={social.link}>
              <img src={social.icon} alt={social.id} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer