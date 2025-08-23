import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export const TermsOfService = () => {
    return (
        <section className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-6 justify-center">
                        <FileText className="w-8 h-8 text-green-500" aria-hidden="true" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Terms of Service
                        </h1>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 mb-8 text-center leading-relaxed">
                        Last Updated: August 23, 2025
                    </p>

                    <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using CalcHub ("we," "our," or "us"), including our calculators (Basic Calculator, Scientific Calculator, Currency Converter, Unit Converter, BMI Calculator), you agree to these Terms of Service ("Terms"). If you do not agree, please do not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">2. Use of Services</h2>
                            <p>
                                You agree to use CalcHub for lawful purposes only. You may not:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Use our services to harm others or violate laws.</li>
                                <li>Attempt to reverse-engineer, hack, or disrupt our website.</li>
                                <li>Use automated scripts to scrape or misuse our calculators.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">3. Intellectual Property</h2>
                            <p>
                                All content, code, and designs on CalcHub are our property or licensed to us. You may not copy, modify, or distribute our content without permission.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">4. Third-Party Services</h2>
                            <p>
                                CalcHub uses third-party services like Google AdSense for advertisements. These services are subject to their own terms and privacy policies, which you should review.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
                            <p>
                                Our calculators are provided "as is" for informational purposes. We are not liable for errors, inaccuracies, or damages resulting from your use of our services. See our <Link to="/disclamir" className="text-green-500 hover:text-green-600">Disclaimer</Link> for details.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">6. Termination</h2>
                            <p>
                                We may suspend or terminate your access to CalcHub if you violate these Terms or engage in harmful behavior.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">7. Changes to Terms</h2>
                            <p>
                                We may update these Terms periodically. Changes will be posted here with an updated "Last Updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
                            <p>
                                For questions about these Terms, contact us at <a href="mailto:codezavox@gmail.com" className="text-green-500 hover:text-green-600">codezavox@gmail.com</a>.
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