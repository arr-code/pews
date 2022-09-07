import Head from 'next/head'
import {useRef, useState} from 'react'

function Home() {
  const crtRef = useRef(null);
  const [crt, setCrt] = useState(0);
  const [respiratory_rate, setRespiratory_rate] = useState(0);
  const [behaviour, setBehaviour] = useState(0);
  const [blood_pressure, setBlood_pressure] = useState(0);
  const [pulse, setPulse] = useState(0);

  const get_started = () => {
    if(crtRef.current !== null)
      crtRef.current.focus()
  }

  const calculate = () => {
    console.log(crt, respiratory_rate, behaviour, blood_pressure, pulse);
  }

  return <>
    <Head>
      <title>PEWS | WIDYA</title>
    </Head>
    <div className="preloader">
        <div className="loader">
            <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                    <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="header_area">
        <div className="navbar-area bg-white">
            <div className="container relative">
                <div className="row items-center">
                    <div className="w-full">
                        <nav className="flex items-center justify-between py-2 navbar navbar-expand-lg">
                            <a className="navbar-brand mr-5" href="#">
                                <img src="images/logo.svg" alt="Logo" />
                            </a>
                            <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="text-theme-color font-semibold">Widya Septiani</span>
                            </button>

                            <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                                <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <a className="page-scroll active" href="#">Widya Septiani</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
            <div className="hero_shape shape_1">
                <img src="images/shape/shape-1.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_2">
                <img src="images/shape/shape-2.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_3">
                <img src="images/shape/shape-3.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_4">
                <img src="images/shape/shape-4.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_6">
                <img src="images/shape/shape-1.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_7">
                <img src="images/shape/shape-4.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_8">
                <img src="images/shape/shape-3.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_9">
                <img src="images/shape/shape-2.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_10">
                <img src="images/shape/shape-4.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_11">
                <img src="images/shape/shape-1.svg" alt="shape" />
            </div>
            <div className="hero_shape shape_12">
                <img src="images/shape/shape-2.svg" alt="shape" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="w-full lg:w-1/2">
                        <div className="header_hero_content pt-110 lg:pt-0">
                            <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Pediatric Early Warning Score (<span className="text-theme-color">PEWS</span>)</h2>
                            <p className="mt-2 lg:mr-8">Pews merupakan salah satu alat atau sistem skoring menggunakan karakteristik pasien yang dapat mendeteksi perburukan klinis pada anak di ruang rawat inap saat ini belum ada konsensus dan juga bukti sistem PEW yang paling berguna atau optimal untuk kasus anak.</p>
                            <div className="hero_btn mt-6">
                                <a onClick={get_started} className="main-btn" href="#" id="get_started">Get Started</a>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
            <div className="header_shape hidden lg:block"></div>
            <div className="header_image flex items-center xs:h-screen">
                <div className="image 2xl:pl-25 relative">
                    <img src="images/header-image.svg" alt="Header Image" className='object-cover opacity-70'/>
                    <div className="absolute top-0 w-4/6 xs:w-full sm:w-full md:w-full lg:w-11/12 xl:w-4/6 2xl:w-4/6 mx-auto items-center shadow-lg">
                        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl opacity-90">
                            {/* <div className="2xl:bg-amber-900 xl:bg-red-900 lg:bg-blue-900 md:bg-green-900 sm:bg-slate-900 xs:bg-cyan-900 bg-violet-900">
                                EUNOIA-CODE
                            </div> */}
                            <h2 className="text-2xl font-bold text-gray-800 text-left mb-2">
                                PEWS CALCULATOR
                            </h2>
                            <form action="" id="pews-calculator" className="w-full relative opacity-100">
                                <div className="relative mb-2">
                                    <input 
                                      type="text" 
                                      id="crt" 
                                      className="block px-4 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-theme-color focus:outline-none focus:ring-0 focus:border-theme-color peer" 
                                      placeholder=" " 
                                      ref={crtRef} 
                                      value={crt}
                                      onChange={e => setCrt(+e.target.value)}
                                    />
                                    <label htmlFor="crt" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">CRT</label>
                                </div>
                                <div className="relative mb-2">
                                    <input 
                                      type="text" 
                                      id="respiratory_rate" 
                                      className="block px-4 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-theme-color focus:outline-none focus:ring-0 focus:border-theme-color peer" 
                                      placeholder=" " 
                                      value={respiratory_rate}
                                      onChange={e => setRespiratory_rate(+e.target.value)}
                                    />
                                    <label htmlFor="respiratory_rate" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Respiratory Rate</label>
                                </div>
                                <div className="relative mb-2">
                                    <input 
                                      type="text" 
                                      id="behaviour" 
                                      className="block px-4 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-theme-color focus:outline-none focus:ring-0 focus:border-theme-color peer" 
                                      placeholder=" " 
                                      value={behaviour}
                                      onChange={e => setBehaviour(+e.target.value)}
                                    />
                                    <label htmlFor="behaviour" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Behaviour</label>
                                </div>
                                <div className="relative mb-2">
                                    <input 
                                      type="text" 
                                      id="blood_pressure" 
                                      className="block px-4 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-theme-color focus:outline-none focus:ring-0 focus:border-theme-color peer" 
                                      placeholder=" " 
                                      value={blood_pressure}
                                      onChange={e => setBlood_pressure(+e.target.value)}
                                    />
                                    <label htmlFor="blood_pressure" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Blood Pressure</label>
                                </div>
                                <div className="relative mb-2">
                                    <input 
                                      type="text" 
                                      id="pulse" 
                                      className="block px-4 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-theme-color focus:outline-none focus:ring-0 focus:border-theme-color peer" 
                                      placeholder=" " 
                                      value={pulse}
                                      onChange={e => setPulse(+e.target.value)}
                                    />
                                    <label htmlFor="pulse" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Pulse</label>
                                </div>
                                <div id="button" className="flex flex-col w-full my-3">
                                    <button 
                                      type="button" 
                                      className="w-full py-2 bg-theme-color rounded-lg text-white"
                                      onClick={calculate}
                                    >
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="font-bold">Calculate</div>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <span className="text-md font-bold inline-block py-1 px-2 uppercase rounded-full text-black bg-white last:mr-0 mr-1">
                                        Hasil : 
                                        <span className="text-md ml-3 font-bold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 last:mr-0 mr-1">
                                            100
                                        </span>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  </>
}

export default Home
