import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {

    return (
        <div className='border-t-2 border-primary mt-2 '>
            <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                            {/* <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                            <rect x="3" y="1" width="7" height="12"></rect>
                            <rect x="3" y="17" width="7" height="6"></rect>
                            <rect x="14" y="1" width="7" height="6"></rect>
                            <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span> */}
                            <Image src={'/logo-rc.png'} width={180} height={65} alt='LOGO' />
                        </Link>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-gray-800 font-heading">
                                Shubhvastram is an Indian clothing brand with offices in Jamshedpur and Chakradharpur, Jharkhand, INDIA. We create ethnic and comfortable clothes with a pinch of traditional touch. We are a clothing label that specializes in Ethnic and customizable wear.
                            </p>
                            <p className="mt-4 text-sm text-gray-800 font-heading">
                                We also create western wear, including tops, dresses, jumpsuits, coordinated sets, etc.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                        <div className="flex">
                            <p className="mr-1 text-gray-800 font-bold font-heading">Phone:</p>
                            <Link href="tel:919667656804" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 font-heading text-sm">+919667656804</Link>
                        </div>
                        <div className="flex font-heading text-sm">
                            <p className="mr-1 text-gray-800 font-bold">Email:</p>
                            <Link href="mailto:shubhvastram.official@gmail.com" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">shubhvastram.official@gmail.com</Link>
                        </div>
                        <div className="flex flex-col">
                            <p className="mr-1 text-gray-800 font-bold font-heading">Address 1:</p>
                            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm font-heading">
                                Air Base Colony, Ramnagar, Kadma, Jamshedpur, Jharkhand 831005.
                            </Link>
                            <p className="mr-1 text-gray-800 font-bold font-heading mt-2">Address 2:</p>
                            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm font-heading">
                                Adarsh Nagar, ward no 6, near forest checkpost, Chakradharpur Jharkhand 833102
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
                        <div className="flex items-center mt-1 space-x-3">
                            <Link href="https://www.instagram.com/shubhvastram.official" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4"></circle>
                                    <path
                                        d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                                    ></path>
                                </svg>
                            </Link>
                            <Link href="https://www.facebook.com/shubhvastram.official" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path
                                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                    ></path>
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/company/shubhvastram/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.46c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.99h-3.56v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.37V9h3.41v1.56h.05c.47-.9 1.61-1.84 3.31-1.84 3.54 0 4.2 2.33 4.2 5.35v6.38z"
                                    />
                                </svg>

                            </Link>
                        </div>
                        {/* <p className="mt-4 text-sm text-gray-500">
                        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
                    </p> */}
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-gray-600">
                        © Copyright {new Date().getFullYear()} Shubhvastram Inc. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <Link href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    )
}
