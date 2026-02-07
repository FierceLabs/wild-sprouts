"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import useScroll from "../hooks/useScroll"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"
import UniversalLink from "./UniversalLink"

const Header = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false)
  const scrolled = useScroll("visible-header", "hidden-header", 10, true)
  const pathname = usePathname()
  const navbarToggle = () => {
    setToggleNavBar(!toggleNavBar)
    document.body.classList.toggle("menu-open")
  }

  useEffect(() => {
    document.body.classList.remove("menu-open")
  }, [])

  return (
    <>
      <section
        className={`linear-gradient menu-mobile font-header shadow-md fixed w-full top-0 z-50 bg-beige-b1 ${
          toggleNavBar ? "open" : ""
        } ${scrolled}`}
      >
        <div className="mx-auto px-10 py-2">
          <nav className="max-w-[1200px] mx-[auto]">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <button className="lg:hidden" onClick={() => navbarToggle()}>
                <div
                  id="toggle-icon"
                  className={`${toggleNavBar ? " open block" : ""}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <div className="flex my-2 lg:hidden">
                <Link className="flex items-center justify-center" href="/">
                  <img
                    src="/wild-sprouts-logo.png"
                    alt="Wild Sprouts Homestead School Logo"
                    style={{ width: "120px", height: "auto", maxWidth: "none" }}
                  />
                </Link>
              </div>
              <div className="hidden lg:flex md:mx-0 my-2">
                <Link className="flex items-center justify-center" href="/">
                  <img
                    src="/wild-sprouts-logo.png"
                    alt="Wild Sprouts Homestead School Logo"
                    style={{ width: "120px", height: "auto", maxWidth: "none" }}
                  />
                </Link>
              </div>
              <div
                className={`navbar-default header hidden w-full lg:flex lg:w-auto animate-fade-in-down ${
                  toggleNavBar ? " open !block" : ""
                }`}
              >
                <div className="nav-list">
                  <ul className="z-50 flex flex-col px-4 mt-12 lg:flex-row lg:mt-0 gap-x-0 gap-y-6 lg:gap-y-0">
                    <li className="font-serif text-gray-g1 hover:text-green-g1 active:text-green-g1 focus:text-green-g1 duration-500">
                      <Link
                        href="/"
                        className={`!text-18 !font-thin md:!text-18 leading-4 pb-1 ${
                          pathname === "/" ? "border-b border-green-g1" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="font-serif text-gray-g1 hover:text-green-g1 active:text-green-g1 focus:text-green-g1 duration-500">
                      <Link
                        href="/about"
                        className={`!text-18 !font-thin lg:!text-18 leading-4 pb-1 ${
                          pathname === "/about"
                            ? "border-b border-green-g1"
                            : ""
                        }`}
                      >
                        About & Philosophy
                      </Link>
                    </li>
                    <li className="font-serif text-gray-g1 hover:text-green-g1 active:text-green-g1 focus:text-green-g1 duration-500">
                      <Link
                        href="/programs"
                        className={`!text-18 !font-thin lg:!text-18 leading-4 pb-1 ${
                          pathname === "/programs"
                            ? "border-b border-green-g1"
                            : ""
                        }`}
                      >
                        Our Day
                      </Link>
                    </li>
                    <li className="font-serif text-gray-g1 hover:text-green-g1 active:text-green-g1 focus:text-green-g1 duration-500">
                      <Link
                        href="/staff"
                        className={`!text-18 !font-thin lg:!text-18 leading-4 pb-1 ${
                          pathname === "/staff"
                            ? "border-b border-green-g1"
                            : ""
                        }`}
                      >
                        Staff
                      </Link>
                    </li>

                    <li className="font-serif text-gray-g1 hover:text-green-g1 active:text-green-g1 focus:text-green-g1 duration-500">
                      <Link
                        href="/contact"
                        className={`!text-18 !font-thin lg:!text-18 leading-4 pb-1 ${
                          pathname === "/contact"
                            ? "border-b border-green-g1"
                            : ""
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className={`lg:hidden`}>
                      <UniversalLink
                        id="facebook"
                        alt="facebook"
                        to="https://www.facebook.com/wildsproutshomesteadschool"
                        className="hover:bg-orange-o1 duration-500 rounded-lg"
                      >
                        <Facebook fill={"#46594D"} width="24px" />
                      </UniversalLink>
                      <UniversalLink
                        id="instagram"
                        alt="instagram"
                        to="https://www.instagram.com/wildsproutshomesteadschool/"
                        className="hover:bg-orange-o1 duration-500 rounded-lg"
                      >
                        <Instagram fill={"#46594D"} width="24px" />
                      </UniversalLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-[177px] justify-end animate-fade-in-down hidden lg:flex items-center">
                <UniversalLink to="https://www.facebook.com/wildsproutshomesteadschool">
                  <Facebook
                    fill={"#46594D"}
                    width="24px"
                    className="hover:bg-orange-o1 duration-500 rounded-lg"
                  />
                </UniversalLink>
                <UniversalLink to="https://www.instagram.com/wildsproutshomesteadschool/">
                  <Instagram
                    className="ml-[18px] hover:bg-orange-o1 duration-500 rounded-lg"
                    fill={"#46594D"}
                    width="24px"
                  />
                </UniversalLink>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Header
