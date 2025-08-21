import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import SEO from '../components/SEO';
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

// Local Data
import data from "../data/portfolio.json";

export default function InuaHub() {
  // Refs for animations
  const headerRef = useRef();
  const introRef = useRef();
  const quoteRef = useRef();
  const impactRef = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [headerRef.current, introRef.current, quoteRef.current, impactRef.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      <SEO />
      <div className="relative">
        <Head>
          <title>Inua Hub - {data.name}</title>
          <meta name="description" content="Inua Hub: Empowering youth, women, and small businesses with digital skills and tools. Founded by Johnas Chami to uplift communities across Tanzania and Portugal." />
        </Head>

        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>

        <div className="container mx-auto mb-10">
          <Header isBlog={true} />
          
          {/* Hero Section */}
          <div className="laptop:mt-20 mt-10 px-4 laptop:px-0">
            <div className="text-center mb-16">
              <h1
                ref={headerRef}
                className="text-4xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
              >
                Inua Hub: Uplifting the Next Generation
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            {/* Introduction Section */}
            <div ref={introRef} className="max-w-4xl mx-auto mb-20">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 laptop:p-12 border border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl laptop:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  What is Inua Hub?
                </h2>
                <p className="text-lg laptop:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Inua Hub is a youth-led nonprofit I founded to empower youth, women, and small businesses with digital skills, tools, and opportunities. <span className="font-semibold text-blue-600 dark:text-blue-400">"Inua"</span> means <span className="font-semibold">"to empower"</span> or <span className="font-semibold">"to uplift"</span> in Swahili.
                </p>
                <p className="text-lg laptop:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                  We believe that in today's digital economy, access to technology and digital literacy isn't just an advantage, it's essential. That's why we're building bridges to opportunity, one skill at a time.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div ref={quoteRef} className="mb-20">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 laptop:p-12 border-l-4 border-blue-600">
                <blockquote className="text-xl laptop:text-2xl font-medium text-gray-800 dark:text-white leading-relaxed mb-6 italic">
                  "Helping people isn't just about providing for today, it's about equipping them for tomorrow. That's why I believe skills are the greatest gift we can give. I dedicated my life to empowering the next generation of dreamers, so they can create opportunities where none existed before."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mr-4"></div>
                  <cite className="text-lg font-semibold text-gray-700 dark:text-gray-300 not-italic">
                    Johnas Chami, Founder of Inua Hub
                  </cite>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 ml-4"></div>
                </div>
              </div>
            </div>

            {/* Impact Focus Section */}
            <div ref={impactRef} className="mb-20">
              <h2 className="text-3xl laptop:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Our Impact Focus
              </h2>
              <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
                {/* Impact Cards */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Digital Skills Training</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Equips youth with cutting-edge digital and entrepreneurial skills, preparing them for the future economy with hands-on training and real-world projects.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Women Empowerment</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Empowers women to lead in tech and business through mentorship, leadership training, and access to networks that break barriers and create opportunities.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Business Transformation</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Supports small businesses and NGOs with digital transformation strategies, helping them leverage technology to scale impact and improve efficiency.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Global Communities</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Builds tech-driven communities across Tanzania and Portugal, creating cross-cultural collaboration and knowledge sharing opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 laptop:p-12 text-white">
                <h2 className="text-2xl laptop:text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
                <div className="grid grid-cols-2 laptop:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl laptop:text-4xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Youth Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl laptop:text-4xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Programs Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl laptop:text-4xl font-bold mb-2">2</div>
                    <div className="text-blue-100">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl laptop:text-4xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Transparency</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center">
              <h2 className="text-3xl laptop:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
                Join the Movement
              </h2>
              <p className="text-lg laptop:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Together, we can create a world where everyone has the tools and opportunities to thrive in the digital economy.
              </p>
              
              <div className="flex flex-col tablet:flex-row gap-6 justify-center items-center">
                <Button
                  onClick={() => window.open("https://www.inuahub.org/", "_blank")}
                  type="primary"
                  classes="px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Learn More →
                </Button>
                
                <Button
                  onClick={() => window.open("https://www.inuahub.org/donate", "_blank")}
                  classes="px-6 py-3 text-lg font-semibold border-2 border-current shadow-lg hover:shadow-xl"
                >
                  Donate & Support →
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
                Every contribution helps us empower more lives and build stronger communities.
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </>
  );
}
