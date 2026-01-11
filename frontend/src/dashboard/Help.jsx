import React from 'react';
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent, Button, Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail, HiQuestionMarkCircle, HiExternalLink } from 'react-icons/hi';

const Help = () => {
    return (
        <div className="p-4 md:p-6 min-h-screen text-gray-100 font-sans">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <HiQuestionMarkCircle className="text-blue-500" />
                    Help & Support Center
                </h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Find answers to common questions or get in touch with our support team.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left Column: FAQ Accordion */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
                        Frequently Asked Questions
                    </h2>

                    <Accordion collapseAll className="border-none bg-gray-800 rounded-xl shadow-lg">
                        <AccordionPanel>
                            <AccordionTitle className="text-gray-200 hover:bg-gray-700 focus:ring-0 bg-gray-800">
                                How do I add a new book to the inventory?
                            </AccordionTitle>
                            <AccordionContent className="bg-gray-700/50 text-gray-300">
                                <p className="mb-2">
                                    Navigate to the <strong>Upload Book</strong> page from the sidebar. Fill in the required details including the book title, author, image URL, category, description, and price. Click "Upload Book" to save it.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel>
                            <AccordionTitle className="text-gray-200 hover:bg-gray-700 focus:ring-0 bg-gray-800">
                                How can I edit or delete an existing book?
                            </AccordionTitle>
                            <AccordionContent className="bg-gray-700/50 text-gray-300">
                                <p className="mb-2">
                                    Go to the <strong>Manage Books</strong> page. You will see a list of all your books.
                                </p>
                                <ul className="list-disc pl-5 text-gray-400">
                                    <li>To <strong>Edit</strong>: Click the pencil icon <span className="text-cyan-400">(Edit)</span>.</li>
                                    <li>To <strong>Delete</strong>: Click the trash icon <span className="text-red-400">(Delete)</span>. You will be asked to confirm.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel>
                            <AccordionTitle className="text-gray-200 hover:bg-gray-700 focus:ring-0 bg-gray-800">
                                Is the Dashboard mobile-friendly?
                            </AccordionTitle>
                            <AccordionContent className="bg-gray-700/50 text-gray-300">
                                <p className="mb-2">
                                    Yes! The dashboard is fully responsive. On mobile devices, the sidebar is accessible via the menu icon at the top, and the book management table converts into a card view for better readability.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel>
                            <AccordionTitle className="text-gray-200 hover:bg-gray-700 focus:ring-0 bg-gray-800">
                                How do I log out securely?
                            </AccordionTitle>
                            <AccordionContent className="bg-gray-700/50 text-gray-300">
                                <p className="mb-2">
                                    Click the <strong>Logout</strong> button in the sidebar or the "Sign Out" option in your profile dropdown. A confirmation dialog will appear to ensure you don't log out accidentally.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                    {/* Documentation Link Box */}
                    <div className="bg-blue-900/30 border border-blue-800 p-6 rounded-xl mt-8">
                        <h3 className="font-bold text-blue-400 mb-2">Need more documentation?</h3>
                        <p className="text-sm text-gray-300 mb-4">Check out our comprehensive guide for advanced features and API references.</p>
                        <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2 transition-colors">
                            Read Documentation <HiExternalLink />
                        </a>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div>
                    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <HiMail className="text-gray-400" />
                            Contact Support
                        </h2>
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your Email" className="text-gray-300" />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    required
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="subject" value="Subject" className="text-gray-300" />
                                </div>
                                <TextInput
                                    id="subject"
                                    type="text"
                                    placeholder="How can we help?"
                                    required
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="message" value="Message" className="text-gray-300" />
                                </div>
                                <Textarea
                                    id="message"
                                    placeholder="Describe your issue..."
                                    required
                                    rows={4}
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <Button type="submit" className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
