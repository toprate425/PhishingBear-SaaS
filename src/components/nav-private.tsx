import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { authServices } from '../../services'
import { setLogOut } from '../../redux/slices/session.slice'

const NavPrivate = () => {
  const dispatch = useDispatch()

  const { isLoggedIn } = useSelector((state: any) => state.session)
  const [meDetail, setMeDetail] = useState<any>({})

  useEffect(() => {
    if (isLoggedIn) {
      authServices.getMe().then((data: any) => {
        setMeDetail(data.data)
      })
    }
  }, [])

  const logOut = () => {
    dispatch(setLogOut())
  }

  const userName = `${meDetail?.first_name}+${meDetail?.last_name}`
  const matches = userName.match(/\b(\w)/g)
  const avtar = matches?.join('').toUpperCase();

  return (
    <ul className="nav justify-content-end align-items-center private-nav">
      <li className="nav-item me-5">
        <Link href="/dashboard">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/dashboard.svg" alt="Dashboard" /> Dashboard
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="#">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/handbook.svg" alt="Handbook" /> Handbook
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="#">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/faq.svg" alt="FAQ" />  FAQs
          </a>
        </Link>
      </li>
      <li className="nav-item me-5">
        <Link href="/community">
          <a className="nav-link text-dark fw-normal fs-3">
            <img src="/assets/images/community.svg" alt="Community" />  My community
          </a>
        </Link>
      </li>

      <li className="nav-item avtar">
        {meDetail?.first_name && meDetail?.last_name &&
          <Link href="/community">
            <button className="btn border-0 bg-primary  rounded-circle fs-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
              <span className="text-white "> {avtar}</span>
            </button>
          </Link>
        }
        <ul className="dropdown-menu rounded-0 p-0 border-0 shadow">
          <li className="py-2">
            <Link
              href={{ pathname: '/my-account' }}
            >
              <a className="dropdown-item py-3 px-4 fs-3">
                <img src="/assets/images/my-account.svg" alt="My account" className="img-fluid me-2" />  My account

              </a>
            </Link>
          </li>
          <li className="px-3">
            <Link href="/">
              <a className=" btn btn-link nav-link border border-dark text-dark fs-4 rounded-1 py-2" onClick={logOut} >
                Log out
              </a>
            </Link >
          </li>
          <li className="py-2 px-4 pt-4">
            <ul className="nav">
              <li className="nav-item pe-3">
                <Link href="#">
                  <a className="nav-link text-dark px-0 fs-5">
                    <img src="/assets/images/eng.svg" alt="England" className="" />&nbsp; EN

                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link text-dark px-0 fs-5">
                    <img src="/assets/images/swe.svg" alt="Sweden" className="img-fluid" /> &nbsp; SWE
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>

    </ul>

  )
}
export default NavPrivate;