import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useDispatch } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { authServices } from '../../../services'
import { setLogOut } from '../../../redux/slices/session.slice'
import { PrivateLayout, LinkButton, InputField, Button, SEO, Alert } from '@components'

const ChangePassword = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  const logOut = () => {
    dispatch(setLogOut())
  }

  const formik = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
      confirm_password: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      old_password: Yup.string().required('Current password is required'),
      new_password: Yup.string().required('New password is required').matches(
        /^(?=.*)(?=.{6,})/,
        'At least 6 characters long'
      ),
      confirm_password: Yup.string().required('Confirm password is required')
        .test('passwords-match', 'Passwords must match ', function (value) {
          return this.parent.new_password === value
        })
    }),

    onSubmit: async (values: any) => {
      console.log('values', values);
      setLoading(true)
      authServices.updateUserProfilePassword(values).then((data: any) => {
        setAlert(data)
        setLoading(false)
        setTimeout(() => {
          router.push('/community')
        }, 1000);
      })
    },
  })

  return (
    <>
      <SEO />
      <PrivateLayout>
        <section className="my-account">
          <div className="container shadow rounded-1">
            <div className="row">
              <div className="col-3 sidebar border-end border-dark pt-5 px-0">
                <h4 className="ms-3 ps-1">My Account</h4>
                <ul className="nav flex-column">
                  <li className="nav-items">
                    <Link href="/my-account">
                      <a className="btn nav-link text-start rounded-0 text-dark border-0 ps-3"><i className="fa-solid fa-house me-2"></i> Account</a>
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link href="/my-account/change-password">
                      <a className="btn nav-link text-start rounded-0 text-dark border-0 ps-3">
                        <i className="fa-solid fa-key me-3"></i>Password
                      </a>
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link href="/my-account/friends">
                      <a className="btn nav-link text-start rounded-0 text-dark border-0 ps-3">
                        <i className="fa-solid fa-user me-3"></i> Friends
                      </a>
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link href="http://newsite.phishingbear.com/">
                      <a className="btn nav-link text-start rounded-0 text-dark border-0 ps-3" onClick={logOut} >
                        <i className="fa-solid fa-right-from-bracket me-3"></i>  Logout
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-9 p-5">

                <form onSubmit={formik.handleSubmit}>
                  <div className="col-md-12 col-lg-6 position-relative">
                    <InputField
                      type={showPassword ? 'text' : 'password'}
                      name="old_password"
                      placeholder="Enter old password"
                      label="Old Password"
                      required={true}
                      value={formik.values.old_password}
                      onChange={formik.handleChange}
                      error={formik?.touched.old_password && formik.errors.old_password && formik.errors.old_password}
                    />
                    {showPassword === false && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-off" onClick={() => setShowPassword(showPassword ? false : true)}>
                      <i className="fa-solid fa-eye-slash" ></i>
                    </button>}

                    {showPassword === true && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-on" onClick={() => setShowPassword(showPassword ? false : true)}>

                      <i className="fa-solid fa-eye" ></i>
                    </button>}
                  </div>

                  <div className="col-md-12 col-lg-6 position-relative">

                    <InputField
                      type={showPassword ? 'text' : 'password'}
                      name="new_password"
                      placeholder="Enter new password"
                      label="New Password"
                      required={true}
                      value={formik.values.new_password}
                      onChange={formik.handleChange}
                      error={formik?.touched.new_password && formik.errors.new_password && formik.errors.new_password}
                    />
                    {showPassword === false && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-off" onClick={() => setShowPassword(showPassword ? false : true)}>
                      <i className="fa-solid fa-eye-slash" ></i>
                    </button>}

                    {showPassword === true && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-on" onClick={() => setShowPassword(showPassword ? false : true)}>

                      <i className="fa-solid fa-eye" ></i>
                    </button>}
                  </div>

                  <div className="col-md-12 col-lg-6 position-relative">
                    <InputField
                      type={showPassword ? 'text' : 'password'}
                      name="confirm_password"
                      placeholder="Enter confirm password"
                      label="Confirm Password"
                      required={true}
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      error={formik?.touched.confirm_password && formik.errors.confirm_password && formik.errors.confirm_password}
                    />
                    {showPassword === false && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-off" onClick={() => setShowPassword(showPassword ? false : true)}>
                      <i className="fa-solid fa-eye-slash" ></i>
                    </button>}

                    {showPassword === true && <button type="button" className="btn border-0 p-0 position-absolute m-auto eye-on" onClick={() => setShowPassword(showPassword ? false : true)}>
                      <i className="fa-solid fa-eye" ></i>
                    </button>}
                  </div>
                  {alert && <Alert alerts={alert} />}
                  <Button type="submit" name="Update" className="text-white rounded-1 fs-5 me-2" loading={loading} />
                  <LinkButton path="/community" name="Cancel" className="border border-dark text-dark fs-5 rounded-1 text-decoration-none mx-2" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </PrivateLayout>
    </>
  )
}
export default ChangePassword;
