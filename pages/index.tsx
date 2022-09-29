import Head from 'next/head'
import { Fragment, useRef, useState} from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function Home() {

  const umurRef = useRef<any>(null);
  const [umur, setUmur] = useState("");
  const behaviours = [
    { id: 0, name: '(0) Sesuai' },
    { id: 1, name: '(+1) Tidak sesuai / diam' },
    { id: 2, name: '(+2) Gelisah' },
    { id: 3, name: '(+3) Lesu / bingung atau respon nyeri menurun' }
  ]
  const [behaviour, setBehaviour] = useState(behaviours[0]);
  const pulses = [
    { id: 0, name: "(0) Warna merah muda atau CRT 1-2 detik" },
    { id: 1, name: "(+1) Pucat atau CRT 3 detik atau tekanan darah sistolik 10 mmHg di atas atau di bawah batas usia yang sesuai" },
    { id: 2, name: "(+2) Sangat pucat atau CRT 4 detik atau takikardi diatas normal atau tekanan darah sistolik 20 mmHG di atas atau di bawah batas yang sesuai untuk usianya" },
    { id: 3, name: "(+3) Sianosis atau CRT {'>'} 5 detik atau takikardi di atas 30 kali nilai normal atau bradikardi" }
  ]
  const [pulse, setPulse] = useState(pulses[0]);
  const respiratory_rates = [
    { id: 0, name: "(0) Dalam batas normal tidak ada retraksi dada"},
    { id: 1, name: "(+1) Frekuensi napas >10 dari batasan normal menggunakan otot-otot tambahan"},
    { id: 2, name: "(+2) Frekuensi napas >20 dari batasan normal dengan retraksi"},
    { id: 3, name: "(+3) Frekuensi napas <5 di bawah nilai normal dengan retraksi dan atau merintih"}
  ]
  const [respiratory_rate, setRespiratory_rate] = useState(respiratory_rates[0]);
  const results = [
    {id: 0, skor:"", color:"none", name: ""},
    {id: 1, skor:"0-2", color:"bg-green-200 text-green-600", name: "Pasien dalam kondisi stabil. Monitor tanda-tanda vital setiap pergantian jaga/shift"},
    {id: 2, skor:"3", color:"bg-amber-200 text-amber-600", name: "Pengkajian ulang harus dilakukan oleh Perawat Primer/ Pj Shift. Jika skor pasien akurat maka perawat primer harus menentukan tindakan terhadap kondisi pasien dan melakukan pengkajian ulang setiap 2 jam oleh perawat pelaksana. Pastikan kondisi pasien tercatat dalam di catatan perkembangan pasien."},
    {id: 3, skor:"4", color:"bg-orange-200 text-orange-600", name: "Pengkajian ulang harus dilakukan oleh Perawat Primer/ Pj Shift dan diketahui oleh dokter jaga residen. Dokter jaga residen harus melaporkan ke DPJP dan memberikan instruksi tatalaksana pada pasien tersebut. Perawat Pelaksana harus memonitor tanda vital pasien setiap jam."},
    {id: 4, skor:">5", color:"bg-red-200 text-red-600", name: "Hubungi TRC dan melakukan tata laksana kegawatan pada pasien. Dokter jaga Residen hadir disamping pasien (dalam pemantauan/Lapor DPJP) dan berkolaborasi untuk menentukan rencana perawatan pasien selanjutnya. Perawat Pelaksana harus memonitor tanda vital pasien setiap jam."}
  ]
  const [result, setResult] = useState(results[0]);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  const calculate = () => {
    if(umur == undefined || umur==""){
        umurRef.current && umurRef.current.focus()
        return
    }else{
        //behaviour
        if(+umur < 1) "pulse"
        else if(+umur >=1 && +umur <=2) "behaviour"
        else if(+umur >=3 && +umur <=5) "behaviour"
        else if(+umur >=6 && +umur <=7) "behaviour"
        else if(+umur >=10 && +umur <=12) "behaviour"
        else if(+umur >=13 && +umur <=18) "behaviour"

        //pulse
        if(+umur < 1) "pulse"
        else if(+umur >=1 && +umur <=2) "pulse"
        else if(+umur >=3 && +umur <=5) "pulse"
        else if(+umur >=6 && +umur <=11) "pulse"
        else if(+umur >=12 && +umur <=18) "pulse"

        //respiratory_rate
        if(+umur < 1) "respiratory_rate"
        else if(+umur >=1 && +umur <=3) "respiratory_rate"
        else if(+umur >=4 && +umur <=5) "respiratory_rate"
        else if(+umur >=6 && +umur <=12) "respiratory_rate"
        else if(+umur >=13 && +umur <=18) "respiratory_rate"
    }

    let res = +respiratory_rate.id + +behaviour.id + +pulse.id
    if(res >=0 && res <=2) setResult(results[1])
    else if(res == 3) setResult(results[2])
    else if(res == 4) setResult(results[3])
    else if(res >= 5) setResult(results[4])
  }
  
  function onChangeTagInput(e: any) {
    let val = e.target.value.replace(/[^0-9\d]/ig, "")
    if(+val > 18) return ""
    else return e.target.value.replace(/[^0-9\d]/ig, "");
  }

  function resultElement(){
    if(result.id != 0){
        return <>
            <div>
                <span className="text-md font-bold inline-block py-1 px-2 uppercase rounded-full text-black bg-white last:mr-0 mr-1">
                    Hasil : 
                    <span className={'text-sm ml-3 font-bold inline-block py-1 px-2 uppercase rounded last:mr-0 mr-1 ' + result.color}>
                        {result.name}
                    </span>
                </span>
            </div>
        </>
    }
    return null
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
                                <a onClick={() => umurRef.current && umurRef.current.focus()} className="main-btn" href="#" id="get_started">Get Started</a>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
            <div className="header_shape hidden lg:block"></div>
            <div className="header_image flex items-center xs:h-screen">
                <div className="image 2xl:pl-25 relative">
                    <img src="images/header-image.svg" alt="Header Image" className='object-cover opacity-70'/>
                    <div className="absolute top-0 w-4full xs:w-full sm:w-full md:w-full lg:w-11/12 xl:w-4/6 2xl:w-4/6 mx-auto items-center shadow-lg">
                        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl opacity-90">
                            <h2 className="text-2xl font-bold text-gray-800 text-left mb-2">
                            {/* <div className="2xl:bg-amber-900 xl:bg-red-900 lg:bg-blue-900 md:bg-green-900 sm:bg-slate-900 xs:bg-cyan-900 bg-violet-900">
                                EUNOIA-CODE
                            </div> */}
                                PEWS CALCULATOR
                            </h2>
                            <form action="" id="pews-calculator" className="w-full relative opacity-100">                                
                                <div className="flex relative mb-2">
                                    <input 
                                      type="text" 
                                      id="crt" 
                                      className="block px-4 py-1 w-full text-sm text-black font-semibold bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-theme-color focus:outline-none focus:ring-0 focus:border-theme-color peer" 
                                      placeholder=" " 
                                      ref={umurRef} 
                                      value={umur}
                                      onChange={e => setUmur(onChangeTagInput(e))}
                                      required
                                    />
                                    <label htmlFor="crt" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Umur</label>
                                </div>
                                    
                                <div className="mb-2">
                                    <Listbox value={behaviour} onChange={setBehaviour}>
                                        {({ open }) => (
                                            <>
                                            <Listbox.Label className="block text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color">Tingkah Laku</Listbox.Label>
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border-2 border-black bg-white py-1 pr-10 text-left shadow-sm focus:border-theme-color focus:outline-none focus:ring-1 focus:ring-theme-color sm:text-sm">
                                                    <span className="flex items-center">
                                                        <span className="ml-3 block truncate">{behaviour.name}</span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {behaviours.map((b) => (
                                                    <Listbox.Option
                                                        key={b.id}
                                                        className={({ active }) =>
                                                            classNames(active ? 'text-white bg-theme-color' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pr-9')
                                                            }
                                                        value={b}
                                                    >
                                                        {({ selected, active }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                            {/* <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                                                            <span
                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {b.name}
                                                            </span>
                                                            </div>

                                                            {selected ? (
                                                            <span
                                                                className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                            ) : null}
                                                        </>
                                                        )}
                                                    </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                                </Transition>
                                            </div>
                                            </>
                                        )}
                                    </Listbox>
                                </div>
                                <div className="mb-2">
                                    <Listbox value={pulse} onChange={setPulse}>
                                        {({ open }) => (
                                            <>
                                            <Listbox.Label className="block text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color">Detak Jantung</Listbox.Label>
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border-2 border-black bg-white py-1 pr-10 text-left shadow-sm focus:border-theme-color focus:outline-none focus:ring-1 focus:ring-theme-color sm:text-sm">
                                                    <span className="flex items-center">
                                                        <span className="ml-3 block truncate">{pulse.name}</span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {pulses.map((b) => (
                                                    <Listbox.Option
                                                        key={b.id}
                                                        className={({ active }) =>
                                                            classNames(active ? 'text-white bg-theme-color' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pr-9')
                                                            }
                                                        value={b}
                                                    >
                                                        {({ selected, active }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                            {/* <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                                                            <span
                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {b.name}
                                                            </span>
                                                            </div>

                                                            {selected ? (
                                                            <span
                                                                className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                            ) : null}
                                                        </>
                                                        )}
                                                    </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                                </Transition>
                                            </div>
                                            </>
                                        )}
                                    </Listbox>
                                </div>
                                <div className="mb-2">
                                    <Listbox value={respiratory_rate} onChange={setRespiratory_rate}>
                                        {({ open }) => (
                                            <>
                                            <Listbox.Label className="block text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-theme-color peer-focus:dark:text-theme-color">Pernafasan</Listbox.Label>
                                            <div className="relative mt-1">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md border-2 border-black bg-white py-1 pr-10 text-left shadow-sm focus:border-theme-color focus:outline-none focus:ring-1 focus:ring-theme-color sm:text-sm">
                                                    <span className="flex items-center">
                                                        <span className="ml-3 block truncate">{respiratory_rate.name}</span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm whitespace-pre-line">
                                                    {respiratory_rates.map((b) => (
                                                    <Listbox.Option
                                                        key={b.id}
                                                        className={({ active }) =>
                                                            classNames(active ? 'text-white bg-theme-color' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pr-9')
                                                            }
                                                        value={b}
                                                    >
                                                        {({ selected, active }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                            {/* <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                                                            <span
                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {b.name}
                                                            </span>
                                                            </div>

                                                            {selected ? (
                                                            <span
                                                                className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                            ) : null}
                                                        </>
                                                        )}
                                                    </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                                </Transition>
                                            </div>
                                            </>
                                        )}
                                    </Listbox>
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
                                {resultElement()}
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
