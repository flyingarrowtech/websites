
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, MapPin, ArrowRight, Shield, Code2, CreditCard, Star } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/30">
                                A
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                Agency<span className="text-violet-500">.</span>
                            </span>
                        </Link>
                        <p className="mb-6 text-zinc-500 leading-relaxed">
                            We help ambitious startups design, develop, and scale SaaS products using modern web technologies and AI integration.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-violet-600 hover:text-white transition-all text-zinc-500">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-violet-600 hover:text-white transition-all text-zinc-500">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-violet-600 hover:text-white transition-all text-zinc-500">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-2 md:col-span-4">
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="hover:text-violet-400 transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-violet-400 transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-violet-400 transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-violet-400 transition-colors">Contact</Link></li>
                            <li><Link to="/partners" className="hover:text-violet-400 transition-colors">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2 md:col-span-4">
                        <h4 className="font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/mvp-development" className="hover:text-violet-400 transition-colors">MVP Development</Link></li>
                            <li><Link to="/services/saas-development" className="hover:text-violet-400 transition-colors">SaaS Scale-up</Link></li>
                            <li><Link to="/services/ai-integration" className="hover:text-violet-400 transition-colors">AI Integration</Link></li>
                            <li><Link to="/services/react-native-apps" className="hover:text-violet-400 transition-colors">React Native App</Link></li>
                            <li><Link to="/services/mern-stack-development" className="hover:text-violet-400 transition-colors">MERN Stack Dev</Link></li>
                            <li><Link to="/services/dedicated-teams" className="hover:text-violet-400 transition-colors">Dedicated Teams</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Widget */}
                    <div className="lg:col-span-4 md:col-span-6">
                        <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
                        <p className="text-zinc-500 mb-4 text-sm">
                            Join 5,000+ founders receiving our weekly insights on SaaS growth and AI trends.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                            />
                            <button
                                type="button"
                                className="px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-violet-500/20"
                                aria-label="Subscribe"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                        <div className="mt-8 flex items-start gap-3 text-sm text-zinc-500">
                            <MapPin className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                            <p>Serving clients globally.</p>
                        </div>
                        <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
                            <Mail className="w-5 h-5 text-violet-500 shrink-0" />
                            <a href="mailto:hello@agency.com" className="hover:text-white transition-colors">hello@agency.com</a>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-zinc-900 py-8 mb-8">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium text-zinc-500">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-900/20 flex items-center justify-center border border-green-900/30">
                                <Shield className="w-4 h-4 text-green-500" />
                            </div>
                            <span>NDA Protected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-900/20 flex items-center justify-center border border-blue-900/30">
                                <Code2 className="w-4 h-4 text-blue-500" />
                            </div>
                            <span>100% Code Ownership</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-900/20 flex items-center justify-center border border-purple-900/30">
                                <CreditCard className="w-4 h-4 text-purple-500" />
                            </div>
                            <span>Secure Payments (Stripe/Wire)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-amber-900/20 flex items-center justify-center border border-amber-900/30">
                                <Star className="w-4 h-4 text-amber-500" />
                            </div>
                            <span>5-Star Google Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
                    <p>&copy; {currentYear} Agency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
