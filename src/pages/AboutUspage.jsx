import { Calculator, Check, ShieldCheck, Smartphone, User, Globe, Clock, Star } from 'lucide-react';


export const AboutUspage = () => {
    return (
        <section id="About" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                            Why Choose <span className="text-green-500">CalcHub?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            At CalcHub, our mission is to empower everyone—students, professionals, and everyday users—with free, reliable, and accessible calculators. Whether you're solving complex equations, converting currencies, or calculating your BMI, our tools are designed to deliver precise results with simplicity and speed. Built by a team passionate about education and technology, our calculators are crafted to meet the needs of diverse users worldwide, from classrooms to offices. No registration, no fees, just powerful tools optimized for all devices, including mobile phones and tablets.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            We continuously update and expand our suite of calculators to ensure they remain accurate and relevant. From basic arithmetic to advanced graphing and financial planning, CalcHub is your go-to platform for all calculation needs, trusted by thousands daily.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                                    <Check color="#22c55e" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">100% Free</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">No hidden costs or subscriptions.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                                    <Smartphone color="#22c55e" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Mobile Friendly</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Seamless experience on all devices.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                                    <User color="#22c55e" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">No Registration</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Start calculating instantly.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                                    <ShieldCheck color="#22c55e" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Accurate Results</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Precision you can trust.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                                    <Globe color="#22c55e" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Wide Range</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">From basic math to financial tools.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                                    <Clock color="#22c55e" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">Regular Updates</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">New features and tools added frequently.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <div className="relative">
                            <img
                                src="https://readdy.ai/api/search-image?query=Professional%20person%20using%20calculator%20on%20modern%20laptop%20computer%2C%20clean%20workspace%20setup%2C%20natural%20lighting%2C%20focused%20on%20mathematical%20calculations%2C%20modern%20office%20environment%2C%20technology%20and%20productivity%2C%20realistic%20photography%20style%2C%20warm%20professional%20atmosphere&amp;width=600&amp;height=500&amp;seq=about-img-001&amp;orientation=landscape"
                                alt="Professional using calculator on laptop"
                                className="w-[80%] h-auto rounded-2xl shadow-2xl object-cover mx-auto"
                                loading="lazy"
                            />
                            <div className="absolute hidden lg:block xl:block md:block -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px] sm:max-w-xs">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0">
                                        <Calculator color="#ffffff" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-base sm:text-lg">500+</div>
                                        <div className="text-sm sm:text-base text-gray-600">Calculations Daily</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute hidden lg:block xl:block md:block -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px] sm:max-w-xs">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0">
                                        <Calculator color="#ffffff" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-base sm:text-lg">5+</div>
                                        <div className="text-sm sm:text-base text-gray-600">Calculators Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-12 sm:mt-16 lg:mt-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                            <Star className="w-8 h-8 text-yellow-400 mb-4" aria-hidden="true" />
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                "CalcHub's graphing calculator helped me visualize complex functions for my calculus class. It's intuitive and free!"
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">Sarah M., Student</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                            <Star className="w-8 h-8 text-yellow-400 mb-4" aria-hidden="true" />
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                "The financial calculator saved me hours planning my loan payments. Accurate and easy to use on my phone."
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">James L., Entrepreneur</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                            <Star className="w-8 h-8 text-yellow-400 mb-4" aria-hidden="true" />
                            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                "I use the unit converter daily for my engineering projects. It's reliable and works perfectly on any device."
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">Priya S., Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};