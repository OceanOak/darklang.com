/**
 * Header Component
 * This component renders the application header with navigation links.
 * It uses React Router for navigation and changes logo based on background color.
 */

import { Link } from 'react-router-dom';
import darkLangLogo from '../../assets/darklang-logo.png';
import darkLangLogoDark from '../../assets/darklang-logo-dbg.png';
import discordLogo from '../../assets/discord-logo.png';
import githubLogo from '../../assets/github-logo.png';
import githubLogoWhite from '../../assets/github-logo-white.png';
import Dropdown from '../ui/Dropdown';


type PageName = 'home' | 'about' | 'login' | 'signup' | 'roadmap' | 'cli' | string;

interface HeaderProps {
    currentPage: PageName;
}

const Header = ({ currentPage }: HeaderProps) => {
    // Define background colors for different pages
    const bgColors: Record<string, string> = {
        home: 'bg-white',
        about: 'bg-dark text-white',
        login: 'bg-white',
        signup: 'bg-white',
        roadmap: 'bg-white',
        cli: 'bg-dark text-white',
        // Default for any other page (like NotFound)
        default: 'bg-white',
    };

    // Get the color for the current page, or use default if not defined
    const bgColor = bgColors[currentPage] || bgColors.default;

    // Determine if we're using a dark background
    const isDarkBg = bgColor.includes('bg-dark');

    const logoSrc = isDarkBg ? darkLangLogoDark : darkLangLogo;
    const githubLogoSrc = isDarkBg ? githubLogoWhite : githubLogo;

    return (
        <header className={`${bgColor} py-4`} >
            <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={logoSrc} alt="Darklang Logo" className="h-11" />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className=" hover:text-blue-dbg text-sm font-medium">
                                Get Started
                            </Link>
                        </li>
                        <li>
                            <Link to="https://docs.darklang.com/next/introduction" target="_blank" className=" hover:text-blue-dbg text-sm font-medium">
                                Docs
                            </Link>
                        </li>
                        <li>
                            <Link to="/cli" className=" hover:text-blue-dbg text-sm font-medium">
                                CLI
                            </Link>
                        </li>
                        <li>
                            <Link to="/cloud" className=" hover:text-blue-dbg text-sm font-medium">
                                Cloud
                            </Link>
                        </li>
                        <li>
                            <Link to="/packages" className=" hover:text-blue-dbg text-sm font-medium">
                                Packages
                            </Link>
                        </li>
                        <li>
                            <Link to="/examples" className=" hover:text-blue-dbg text-sm font-medium">
                                Examples
                            </Link>
                        </li>
                        <li>
                            <Link to="/try" className=" hover:text-blue-dbg text-sm font-medium">
                                Try
                            </Link>
                        </li>
                        <li>
                            <Dropdown
                                label="Company"
                                items={[
                                    { text: 'Roadmap', href: '/roadmap' },
                                    { text: 'Blog', href: 'https://blog.darklang.com/', target: '_blank' },
                                    { text: 'Sponsor us', href: 'https://github.com/sponsors/darklang', target: '_blank' },
                                ]}
                            />
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-3">
                    <a href="https://darklang.com/discord" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-dbg">
                        {/* <img src={discordLogo} alt="Discord" className="h-10" /> */}
                        <img src={discordLogo} alt="Discord" className="h-10" />
                    </a>
                    <a href="https://github.com/darklang/dark" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-dbg">
                        <img src={githubLogoSrc} alt="GitHub" className="h-5" />
                    </a>
                    <div className="border-l border-gray-200 h-6 mx-3"></div>
                    <Dropdown
                        label="Darklang Classic"
                        labelColor=""
                        items={[
                            { text: 'About', href: '/about' },
                            { text: 'Log in', href: '/login' },
                            { text: 'Sign up', href: '/signup' },
                        ]}
                    />
                </div>
            </div>
        </header >
    );
};

export default Header;