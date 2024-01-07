import { GithubLogo, InstagramLogo, LinkedinLogo } from "@/assets"

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/home"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },
    {
        id: 3,
        name: "Tech Stack",
        link: "/tech-stack"
    },
    {
        id: 4,
        name: "Projects",
        link: "/projects"
    },
    {
        id: 5,
        name: "Contact",
        link: "/contact"
    },
]

const NavLogos = [
    {
        id: 1,
        logo: GithubLogo,
        name: "Github",
        link: "https://github.com/Amitonhub"
    },
    {
        id: 2,
        logo: InstagramLogo,
        name: "Instagram",
        link: "https://www.instagram.com/infinity.thakur/"
    },
    {
        id: 3,
        logo: LinkedinLogo,
        name: "linkedIn",
        link: "https://www.linkedin.com/in/amit-thakur-6821851b6/"
    },
]

export { NavLinks, NavLogos }