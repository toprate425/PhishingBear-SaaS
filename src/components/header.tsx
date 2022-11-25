import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { LinkButton } from './form-inputs'
import { NavPrivate, NavPublic } from './index'

const Header = () => {
  const { isLoggedIn } = useSelector((state: any) => state.session)

  return (
    <header className="border-bottom border-dark py-4 px-5" >
      <div className="container-fluid">
        <div className="row align-items-center">
          {isLoggedIn ? <>
            <div className="col-9 col-sm-9 col-md-9 col-lg-2">
              <Link href="/">
                <a className="d-inline-block">
                  <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                </a>
              </Link>
            </div>

            <div className="col-10  d-none d-lg-block d-xl-block">
              <NavPrivate />
            </div>
          </> : <>
            <div className="col-9 col-sm-9 col-md-9 col-lg-2">
              <Link href="/">
                <a className="d-inline-block">
                  <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                </a>
              </Link>
            </div>

            <div className="col-10  d-none d-lg-block d-xl-block">
              <NavPublic />
            </div>
          </>}

          <div className="col-3 col-sm-3 col-md-3 col-lg-8 d-block d-lg-none d-xl-none">
            <button className="btn border-0 float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <img src="/assets/images/toggle-btn.svg" alt="Toggle button" />
            </button>

            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header border-bottom">
                <Link href="#">
                  <a className="d-inline-block">
                    <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                  </a>
                </Link>
                <button type="button" className="btn p-0" data-bs-dismiss="offcanvas" aria-label="Close">
                  <img src="/assets/images/close-btn.svg" alt="Logo" className="img-fluid" />
                </button>
              </div>
              <div className="offcanvas-body">
                <img src="/assets/images/offcanvas-bg.png" alt="Offcanvas Background" className="img-fluid offcanavas-img" />

                {isLoggedIn ? <>
                  <ul className="nav flex-column">
                    <li className="nav-item mx-2">
                      <Link href="/dashboard">
                        <a className="nav-link text-white fs-3 pb-3">
                          Dashboard
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link href="#">
                        <a className="nav-link text-white fs-3 pb-3">
                          Handbook
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link href="#">
                        <a className="nav-link text-white fs-3 pb-3">
                          FAQs
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link href="#">
                        <a className="nav-link text-white fs-3 pb-3">
                          My community
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link href="/my-account">
                        <a className="nav-link text-white fs-3 pb-3">
                          My account
                        </a>
                      </Link>
                    </li>
                    <ul className="nav  pb-3">
                      <li className="nav-item">
                        <Link href="#" >
                          <a className="nav-link text-white fs-3">
                            <img src="/assets/images/circle-eng.svg" alt="Sweden" className="img-fluid" />  en
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#">
                          <a className="nav-link text-white fs-3">
                            <img src="/assets/images/circle-sw.svg" alt="Sweden" className="img-fluid" />  swe
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </> :
                  <>
                    <ul className="nav flex-column">
                      <li className="nav-item mx-2">
                        <Link href="/about">
                          <a className="nav-link text-white fs-3 pb-3">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            About us
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            Pricing
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            Enterprise solutions
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item mx-2">
                        <Link href="#">
                          <a className="nav-link text-white fs-3 pb-3">
                            Private solutions
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item mx-2 pb-3 position-relative">
                        <Link href="#">
                          <a className="nav-link btn btn-warning btn-pill text-white fs-4 fw-bold">
                            Try it for free
                          </a>
                        </Link>
                      </li>

                      <ul className="nav  pb-3">
                        <li className="nav-item">
                          <Link href="#" >
                            <a className="nav-link text-white fs-3">
                              <img src="/assets/images/circle-eng.svg" alt="Sweden" className="img-fluid" />  en
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="#">
                            <a className="nav-link text-white fs-3">
                              <img src="/assets/images/circle-sw.svg" alt="Sweden" className="img-fluid" />  swe
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </>
                }

              </div>
              <div className="offcanvas-footer py-3 px-2 border-top position-relative">
                <img src="/assets/images/logout.svg" alt="" className="img-fluid position-absolute top-0 bottom-0 my-auto ms-3" />
                <LinkButton path="/login" className="nav-link border btn-pill fs-2 text-white " name="Log out" />
              </div>
            </div>
          </div>
        </div>
      </div >
    </header >
  )
}

export default Header
