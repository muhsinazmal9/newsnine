import React, { useState } from 'react'
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
    const [searchOpen, setSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchOpen(true);
    };

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
                <nav className="bg-teal-900 text-white font-tiro overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 relative">
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
                                    <Link href={category.href}>{category.name}</Link>
                                </li>
                            ))}
                            <li className='flex items-center px-4 cursor-pointer transition hover:bg-teal-800'>আরও</li>
                        </ul>
                        {/* search */}
                        <div
                            className={`
                                h-12
                                flex items-center gap-3
                                transition-all duration-300 ease-in-out
                                cursor-pointer
                                ${searchOpen
                                    ? 'absolute left-0 top-0 w-full bg-teal-900 z-30 px-4'
                                    : 'px-4 border-l border-r border-white/10 hover:bg-teal-800'}
                                `}
                            onClick={!searchOpen ? handleSearchClick : undefined}
                        >
                            {!searchOpen ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    অনুসন্ধান
                                </>
                            ) : (
                                <>
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="খুঁজুন..."
                                        className="flex-1 h-9 px-3 rounded text-white outline-none"
                                    />

                                    <Link href="/search-result" className="px-3 py-1 bg-teal-700 rounded cursor-pointer">
                                        অনুসন্ধান
                                    </Link>

                                    <button
                                        onClick={() => setSearchOpen(false)}
                                        className="px-3 py-1 bg-red-600 rounded cursor-pointer"
                                    >
                                        বাতিল
                                    </button>
                                </>
                            )}
                        </div>

                    </div>
                </nav>


                <main className='pt-6 font-tiro'>
                    {/* Hero Section */}
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-7 gap-4 pb-12">

                        {/* News Grid */}
                        <div className="col-span-3">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
                                                <h3 className="text-white text-2xl font-bold leading-snug">
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
                                                <h3 className="font-bold text-stone-800 hover:text-teal-900 mb-2 py-3 px-4 transition">{news.title}</h3>
                                            </a>
                                            <div className="p-3 border-t border-stone-200">
                                                <a href="#" className="text-teal-700 text-sm hover:text-teal-900">{news.category}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-span-2">
                            <div className="bg-white rounded-sm shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] overflow-hidden">
                                <div className="p-4">
                                    <div className="flex flex-col gap-4">
                                        {[...mainNews, ...mainNews, ...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-200 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Another Sidebar */}
                        <div className="col-span-2 space-y-4">
                            {/* Ad area */}
                            <div className='bg-stone-200 h-48'></div>
                            <div className="bg-white rounded-sm shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] overflow-hidden">
                                <div className="p-4">
                                    <div className="flex flex-col gap-4">
                                        {[...mainNews, ...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-200 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Section */}
                    <div className="py-20 bg-teal-950">
                        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
                            {mainNews.map((news, index) => (
                                <div key={index} className="bg-white rounded-sm shadow-[0_2px_1px_0_rgba(0,0,0,0.2)] overflow-hidden hover:shadow-[0_3px_1px_0_rgba(0,0,0,0.2)] transition">
                                    <div className="relative">
                                        <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <h3 className="font-bold text-stone-800 hover:text-teal-900 mb-2 py-3 px-4 transition">{news.title}</h3>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* National Section */}
                    <div className="py-20 bg-white">
                        <div className='max-w-7xl mx-auto px-4'>
                            <h2 className="text-2xl font-bold text-teal-900 mb-4 border-l-4 border-teal-900/20 pl-2">জাতীয়</h2>

                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                                <div className='col-span-2'>
                                    <img src={mainNews[0].image} alt={mainNews[0].title} className="w-full object-cover mb-4" />
                                    <a href="#" className="bg-white rounded-sm overflow-hidden pt-5 space-y-3 group">
                                        <h3 className="font-bold text-teal-900 mb-2 text-2xl group-hover:text-teal-800 transition">জানুয়ারিতে প্রধানমন্ত্রী আসবেন ঝালকাঠি</h3>
                                        <p className="text-stone-500 leading-7 group-hover:text-stone-600 transition">ঝালকাঠি সংবাদদাতা: ঝালকাঠি জেলা আওয়ামী লীগের বর্ধিত সভা অনুষ্ঠিত হয়েছে। বুধবার বিকেলে জেলা আওয়ামী লীগ কার্যালয়ে এ সভার আয়োজন করা হয়। এতে প্রধান অতিথি ছিলেন আওয়ামী লীগের উপদেষ্টা পরিষদের সদস্য ও সাবেক শিল্পমন্ত্রী আমির হোসেন আমু। বর্ধিত সভায় জানানো হয় আগামী বছরের জানুয়ারি মাসে ঝালকাঠিতে আওয়ামী লীগের বিশাল সমাবেশ অনুষ্ঠিত</p>
                                    </a>
                                </div>

                                <div className="bg-stone-100 rounded-sm overflow-hidden">
                                    <div className="py-4">
                                        <div className="flex flex-col gap-4">
                                            {[...mainNews].map((news, index) => (
                                                <>
                                                    <div key={index} className="flex items-start space-x-4 px-4">
                                                        <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                        <div>
                                                            <a href="#">
                                                                <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <hr className="border-stone-300 last:hidden" />
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">অর্থনীতি</div>
                                    <div className="flex flex-col gap-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* International Section */}
                    <div className="py-20 bg-stone-100">
                        <div className='max-w-7xl mx-auto px-4'>
                            <h2 className="text-2xl font-bold text-teal-900 mb-4 border-l-4 border-teal-900/20 pl-2">আন্তর্জাতিক</h2>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                                <div className='col-span-2'>
                                    <img src={mainNews[0].image} alt={mainNews[0].title} className="w-full object-cover" />
                                    <div className="rounded-sm overflow-hidden pt-5 space-y-3">
                                        <a href="#">
                                            <h3 className="font-bold text-teal-900 mb-2 text-2xl">জানুয়ারিতে প্রধানমন্ত্রী আসবেন ঝালকাঠি</h3>
                                        </a>
                                        <p className="text-stone-600 leading-7">ঝালকাঠি সংবাদদাতা: ঝালকাঠি জেলা আওয়ামী লীগের বর্ধিত সভা অনুষ্ঠিত হয়েছে। বুধবার বিকেলে জেলা আওয়ামী লীগ কার্যালয়ে এ সভার আয়োজন করা হয়। এতে প্রধান অতিথি ছিলেন আওয়ামী লীগের উপদেষ্টা পরিষদের সদস্য ও সাবেক শিল্পমন্ত্রী আমির হোসেন আমু। বর্ধিত সভায় জানানো হয় আগামী বছরের জানুয়ারি মাসে ঝালকাঠিতে আওয়ামী লীগের বিশাল সমাবেশ অনুষ্ঠিত</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-sm overflow-hidden">
                                    <div className="py-4">
                                        <div className="flex flex-col gap-4">
                                            {[...mainNews].map((news, index) => (
                                                <>
                                                    <div key={index} className="flex items-start space-x-4 px-4">
                                                        <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                        <div>
                                                            <a href="#">
                                                                <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <hr className="border-stone-300 last:hidden" />
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-stone-100 overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">বিশ্ব অর্থনীতি</div>
                                    <div className="flex flex-col gap-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Another News Section */}
                    <div className="py-20 bg-white">
                        <div className='max-w-7xl mx-auto px-4'>
                            {/* Ad area */}
                            <div className="w-full h-32 bg-stone-200 mb-4">
                                <p className="text-center text-stone-500"></p>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                                <div className="bg-stone-100 rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">বিশ্ব অর্থনীতি</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-stone-100 rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">বিশ্ব অর্থনীতি</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-stone-100 rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">বিশ্ব অর্থনীতি</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-stone-100 rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">বিশ্ব অর্থনীতি</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Another News Section */}
                    <div className="py-20 bg-stone-100">
                        <div className='max-w-7xl mx-auto px-4'>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                                <div className="bg-white rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">পাঁচমিশালি</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">প্রবাস</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">পজেটিভ বাংলাদেশ</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-sm overflow-hidden">
                                    <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">আইন আদালত</div>
                                    <div className="flex flex-col gap-4 mb-4">
                                        {[...mainNews].map((news, index) => (
                                            <>
                                                <div key={index} className="flex items-start space-x-4 px-4">
                                                    <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                    <div>
                                                        <a href="#">
                                                            <h3 className="text-stone-800 font-bold">{news.title}</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr className="border-stone-300 last:hidden" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-teal-950 text-teal-100">
                    <div className="max-w-7xl mx-auto px-4 pt-12 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Left: Publication Info */}
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-white">
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
