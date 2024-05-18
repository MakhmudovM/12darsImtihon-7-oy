import { NavLink } from "react-router-dom"

const links = [
    {
        id: 1,
        url: "/",
        text: "Home",
    },
    {
        id: 2,
        url: "/headphones",
        text: "Headphones",
    },
    {
        id: 3,
        url: "/speakers",
        text: "Speakers",
    },
    {
        id: 4,
        url: "/earphones",
        text: "Earphones",
    },
    
]

function NavLinks() {
  return (
    <>
    {links.map((link) => {
        return (
            <li  key={link.id}> <NavLink className="capitalize" to={link.url}>
            {link.text}
        </NavLink>
        </li>
        )
    })}
    </>
  )
}

export default NavLinks