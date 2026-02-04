import React from 'react'
import logo from '@/images/NewsNine.jpg'
import { Link, Head } from '@inertiajs/react';

const categories = [
    { name: 'প্রচ্ছদ', active: true, href: '/' },
    { name: 'জাতীয়', active: false, href: '/single-category' },
    { name: 'রাজনীতি', active: false, href: '/single-category' },
    { name: 'আন্তর্জাতিক', active: false, href: '/single-category' },
    { name: 'অর্থনীতি', active: false, href: '/single-category' },
    { name: 'খেলা', active: false, href: '/single-category' },
    { name: 'বিনোদন', active: false, href: '/single-category' },
    { name: 'লাইফ স্টাইল', active: false, href: '/single-category' },
    { name: 'মতামত', active: false, href: '/single-category' },
    { name: 'ভিডিও', active: false, href: '/single-category' }
];

const mainNews = [
    { title: 'অসৎ উদ্দেশে বাসা-বাড়িতে তল্লাশি করছে আইনশৃঙ্খলা বাহিনী: ইউট্যাব', image: 'https://placehold.co/300x200', category: 'জাতীয়' },
    { title: 'বাজারে নেই পেঁয়াজ আর কমেনি দাম, নেই যন্ত্রণাকার', image: 'https://placehold.co/300x200', category: 'জাতীয়' },
    { title: 'ইউক্রেনের সাথে আলোচনা নিয়ে ভ্যাটিকানের প্রস্তাব প্রত্যাখ্যান রাশিয়ার', image: 'https://placehold.co/300x200', category: 'আন্তর্জাতিক' },
    { title: 'মানবতাবিরোধী অপরাধ : সিএভির পর পুনঃশুনানি, ময়মনসিংহের পাঁচজনের রায় যেকোনো দিন', image: 'https://placehold.co/300x200', category: 'আন্তর্জাতিক' }
];

function Home() {
    return (
        <>
            <Head>
                <title>News Nine 24</title>
                <meta name="description" content="News Nine 24 | সত্যের সন্ধানে প্রতিক্ষণ" />

                {/* favicon */}
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="min-h-screen bg-stone-100">

                <header className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <Link href="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                            {/* Ad area */}
                            <div className="w-full h-24 bg-stone-200">
                                <p className="text-center text-stone-500"></p>
                            </div>
                        </div>
                    </div>
                </header>


                {/* Navigation */}
                <nav className="bg-teal-900 text-white font-tiro">
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
                        <ul className="flex h-12 space-x-0">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className={`
                                    flex items-center px-4
                                    cursor-pointer transition
                                    hover:bg-teal-800
                                    ${category.active ? 'bg-teal-950' : ''}
                                `}
                                >
                                    <Link href={category.href}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                            <li className='flex items-center px-4 cursor-pointer transition hover:bg-teal-800'>আরও</li>
                        </ul>
                        {/* search */}
                        <a href="#" className='h-12 px-4 border-l border-r border-white/10 hover:bg-teal-800 cursor-pointer transition flex items-center gap-2'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            অনুসন্ধান
                        </a>
                    </div>
                </nav>


                <main className='pt-6 font-tiro'>
                    {/* Hero Section */}
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-4 pb-12">
                        <div className="col-span-6">
                            <h1 className='text-2xl font-bold text-teal-900 border-b-2 border-teal-900'>জাতীয়</h1>
                        </div>

                        {/* News Grid */}
                        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Single Feature News */}
                            <div className="col-span-2">
                                <div className="relative h-100 rounded-sm overflow-hidden shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)] transition">

                                    {/* Background Image */}
                                    <img
                                        src={mainNews[0].image}
                                        alt={mainNews[0].title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col justify-end h-full p-4">
                                        <a href="news-detail">
                                            <h3 className="text-white text-2xl font-semibold leading-snug line-clamp-2">
                                                {mainNews[0].title}
                                            </h3>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            {mainNews.map((news, index) => (
                                <div key={index} className="bg-white rounded-sm shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_3px_1px_0_rgba(0,0,0,0.1)] transition">
                                    <div className="relative">
                                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <h3 className="font-semibold text-teal-900 mb-2 py-3 px-4">{news.title}</h3>
                                        </a>
                                        <div className="p-3 border-t border-stone-200">
                                            <a href="#" className="text-teal-700 text-sm hover:text-teal-900">{news.category}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* News Grid */}
                        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[...mainNews, ...mainNews].map((news, index) => (
                                <div key={index} className="bg-white rounded-sm shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_3px_1px_0_rgba(0,0,0,0.1)] transition">
                                    <div className="relative">
                                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <h3 className="font-semibold text-teal-900 mb-2 py-3 px-4">{news.title}</h3>
                                        </a>
                                        <div className="p-3 border-t border-stone-200">
                                            <a href="#" className="text-teal-700 text-sm hover:text-teal-900">{news.category}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                <footer className="bg-teal-950 text-teal-100">
                    <div className="max-w-7xl mx-auto px-4 pt-12 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Left: Publication Info */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-white">
                                    NewsNine24.com
                                </h3>

                                <p className="text-sm leading-relaxed text-stone-300 font-tiro">
                                    সম্পাদকঃ মুহম্মদ ইব্রাহিম সোহেল
                                    <br />
                                    ইমেইলঃ{" "}
                                    <a
                                        href="mailto:newsnine24@gmail.com"
                                        className="hover:underline text-blue-300"
                                    >
                                        info@newsnine24.com
                                    </a>
                                    <br />
                                    ৬/২ শান্তিবাগ, ঢাকা ১২১৭
                                </p>
                            </div>

                            {/* Right: Optional Links / Meta */}
                            <div className="md:text-right text-sm text-stone-300 font-tiro">
                                <ul className="space-y-2">
                                    <li className="hover:text-white cursor-pointer">
                                        আমাদের সম্পর্কে
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        যোগাযোগ
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        গোপনীয়তা নীতি
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-teal-900 my-4"></div>

                        {/* Bottom */}
                        <div className="text-center text-xs text-stone-400 font-tiro">
                            স্বত্ব © ২০১৬–২০২৬ নিউজনাইন২৪ ডটকম
                        </div>
                    </div>
                </footer>

                {/* Developed by */}
                <div className="text-center text-xs text-stone-300 bg-stone-950 py-2">
                    Developed with <span className="text-red-500">❤</span> by <a href="https://muhsinazmal.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-400">Muhsin</a>
                </div>


            </div>
        </>
    );
}

export default Home;
