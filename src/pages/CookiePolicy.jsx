import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';

export const CookiePolicy = () => {
    return (
        <section className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-6 justify-center">
                        <Cookie className="w-8 h-8 text-green-500" aria-hidden="true" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Cookie Policy
                        </h1>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
                        Last Updated: August 23, 2025
                    </p>

                    <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
                            <p>
                                CalcHub ("we," "our," or "us") uses cookies to enhance your experience on our website. This Cookie Policy explains what cookies are, how we use them, and how you can manage them.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">2. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device when you visit our website. They help us analyze site usage, serve ads, and improve functionality.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">3. Types of Cookies We Use</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Analytics Cookies</strong>: We use tools like Google Analytics to collect anonymized data on how users interact with our calculators.
                                </li>
                                <li>
                                    <strong>Advertising Cookies</strong>: Google AdSense uses cookies to serve relevant ads based on your browsing behavior.
                                </li>
                                <li>
                                    <strong>Essential Cookies</strong>: Necessary for basic site functionality, such as navigation and performance.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">4. Managing Cookies</h2>
                            <p>
                                You can control cookies through your browser settings. Disabling cookies may limit some features, such as personalized ads. For more information, visit your browser's help section.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">5. Third-Party Cookies</h2>
                            <p>
                                Third-party services like Google AdSense and Google Analytics set their own cookies. Review their privacy policies for details on their data practices.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">6. Changes to This Policy</h2>
                            <p>
                                We may update this Cookie Policy periodically. Changes will be posted here with an updated "Last Updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">7. Contact Us</h2>
                            <p>
                                For questions about our Cookie Policy, contact us at <a href="mailto:codezavox@gmail.com" className="text-green-500 hover:text-green-600">codezavox@gmail.com</a>.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center text-green-500 hover:text-green-600 font-medium text-sm sm:text-base"
                            aria-label="Return to homepage"
                        >
                            <span className='flex items-center'><ArrowLeft size={20} className='items-center' /></span>     Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};