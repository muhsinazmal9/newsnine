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
                            <Link href="/" >
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
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-7 gap-4 pb-12">
                        {/* TITLE */}
                        <div className="col-span-7">
                            <h1 className='text-3xl font-bold'>জানুয়ারিতে প্রধানমন্ত্রী আসবেন ঝালকাঠি</h1>
                        </div>


                        {/* Main Content */}
                        <div className="col-span-5 bg-white rounded-sm shadow-[0_2px_1px_0_rgba(0,0,0,0.1)] overflow-hidden">
                            <img src="https://placehold.co/300x200" alt="" className="w-full object-cover" />
                            <div className="p-6 space-y-4 text-stone-700 leading-8 text-[1.1rem]">
                                <p>ঝালকাঠি সংবাদদাতা: ঝালকাঠি জেলা আওয়ামী লীগের বর্ধিত সভা অনুষ্ঠিত হয়েছে। বুধবার বিকেলে জেলা আওয়ামী লীগ কার্যালয়ে এ সভার আয়োজন করা হয়। এতে প্রধান অতিথি ছিলেন আওয়ামী লীগের উপদেষ্টা পরিষদের সদস্য ও সাবেক শিল্পমন্ত্রী আমির হোসেন আমু। বর্ধিত সভায় জানানো হয় আগামী বছরের জানুয়ারি মাসে ঝালকাঠিতে আওয়ামী লীগের বিশাল সমাবেশ অনুষ্ঠিত হবে। এতে প্রধানমন্ত্রী শেখ হাসিনা প্রধান অতিথি হিসেবে যোগদা করার কথা রয়েছে। এ জন্য দলের নেতাকর্মীদের প্রস্তুতি নিতে বলা হয় বর্ধিত সভায়।</p>
                                <p>জেলা আওয়ামী লীগ সভাপতি সরদার মো. শাহ আলমের সভাপতিত্বে বর্ধিত সভায় বক্তব্য রাখেন জেলা আওয়ামী লীগের সাধারণ সম্পাদক অ্যাডভোকেট খান সাইফুল্লাহ পনিরসহ দলের নেতৃবৃন্দ।</p>
                                <p>প্রধান অতিথির বক্তব্যে আমির হোসেন আমু বলেন, রাজনৈতিক কর্মীর হাতিয়ার সেই হচ্ছে দলের আদর্শ বাস্তবায়ন করা। আওয়ামী লীগ ক্ষমতা থাকাকালীন অবস্থায় যে উন্নয়ন কাজগুলো করেছে, সেগুলো যুদ্ধক্ষেতের গোলা বারুদের চেয়েও বড় গোলা বারুদ। আওয়ামী লীগ ধংসাত্মক রাজনীত চাই না। বর্তমান সরকারের যে অর্জন তা-ই যথেষ্ঠ।</p>
                                <p>আমির হোসেন আমু আরো বলেন, প্রধানমন্ত্রীর আগমনের আগেই জেলা আওয়ামী লীগের সাংগঠনিক ভিত্তি তৃণমূলস্তর থেকে শক্তিশালী করার জন্য ইউনিয়ন পর্যায়ে আওয়ামী লীগ নেতা কর্মীদের নিয়ে ইউনিয়ন কমিটি ও ওয়ার্ড কমিটিগুলো গঠন করতে হবে। ইউনিয়ন পর্যায়ে কমিটি গঠন করে জাতীয় কাউন্সিলের পূর্বে স্থানীয় পর্যায়ে কমিটিগুলো চূড়ান্ত করার নির্দেশ প্রদান করেন আমু।</p>


                            </div>
                        </div>

                        {/* Another Sidebar */}
                        <div className="col-span-2 space-y-4">
                            {/* Ad area */}
                            <div className='bg-stone-200 h-48'></div>
                            <div className="bg-white rounded-sm overflow-hidden">
                                <div className="py-2 px-4 text-lg bg-teal-950 text-white text-center mb-4">অন্যান্য সংবাদ</div>
                                <div className="flex flex-col gap-4 mb-4">
                                    {[...mainNews].map((news, index) => (
                                        <>
                                            <div key={index} className="flex items-start space-x-4 px-4">
                                                <img src={news.image} alt={news.title} className="w-16 h-12 object-cover" />
                                                <div>
                                                    <a href="#">
                                                        <h3 className="font-semibold text-teal-900">{news.title}</h3>
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
