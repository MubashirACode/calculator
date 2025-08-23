import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const PrivacyPolicy = () => {
    return (
        <section className="min-h-screen  bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-6 justify-center">
                        <ShieldCheck className="w-8 h-8 text-green-500" aria-hidden="true" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
                        Last Updated: August 23, 2025
                    </p>

                    <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
                            <p>
                                Welcome to CalcHub ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and calculators, including Basic Calculator, Scientific Calculator, Currency Converter, Unit Converter, and BMI Calculator.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">2. Information We Collect</h2>
                            <p>
                                We may collect the following types of information:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Non-Personal Information</strong>: We collect anonymized data such as IP addresses, browser types, device information, and usage patterns through cookies and analytics tools (e.g., Google Analytics) to improve our services.
                                </li>
                                <li>
                                    <strong>Third-Party Data</strong>: Our site includes Google AdSense, which uses cookies to serve personalized ads. We do not directly collect or store personal information, but third-party providers may collect data as outlined in their policies.
                                </li>
                                <li>
                                    <strong>No Personal Data</strong>: Our calculators do not require registration or personal data input (e.g., names, emails) to function.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">3. How We Use Your Information</h2>
                            <p>
                                We use collected data to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Enhance user experience and optimize our website.</li>
                                <li>Analyze usage trends to improve calculator functionality.</li>
                                <li>Serve relevant advertisements via third-party services like Google AdSense.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">4. Cookies and Tracking</h2>
                            <p>
                                We use cookies for analytics and advertising. You can manage cookie preferences through your browser settings. See our <Link to="/cookie" className="text-green-500 hover:text-green-600">Cookie Policy</Link> for details.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">5. Data Sharing</h2>
                            <p>
                                We do not sell or share your personal data with third parties, except:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>With third-party providers (e.g., Google AdSense, Google Analytics) for ads and analytics.</li>
                                <li>As required by law or to protect our rights.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">6. Data Security</h2>
                            <p>
                                We implement reasonable security measures to protect your data, but no system is completely secure. We strive to safeguard your information but cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">7. Your Rights</h2>
                            <p>
                                Depending on your jurisdiction, you may have rights to access, correct, or delete your data. Since we collect minimal data, contact us at <a href="mailto:codezavox@gmail.com" className="text-green-500 hover:text-green-600">codezavox@gmail.com</a> for requests.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">8. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy periodically. Changes will be posted here with an updated "Last Updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">9. Contact Us</h2>
                            <p>
                                For questions about this Privacy Policy, contact us at <a href="mailto:codezavox@gmail.com" className="text-green-500 hover:text-green-600">codezavox@gmail.com</a>.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center text-green-500 hover:text-green-600 font-medium text-sm sm:text-base"
                            aria-label="Return to homepage"
                        >
                        <span className='flex items-center'><ArrowLeft size={20} className='items-center' /></span>    Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};