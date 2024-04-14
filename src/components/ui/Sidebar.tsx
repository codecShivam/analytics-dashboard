import React, { useState } from "react";
import logo from "../../assets/logo.png";
import credentialsIcon from "../../assets/sidebar/credentials.png";
import walletIcon from "../../assets/sidebar/walletIcon.png";
import graphsIcon from "../../assets/sidebar/profileIcon.png";
import supportIcon from "../../assets/sidebar/tech support icon.png";
import repoIcon from "../../assets/sidebar/repo_icon.png";
import analyticsIcon from "../../assets/sidebar/analytics.png";

type SidebarSection = 'credentials' | 'wallets' | 'profile' | 'graphs' | 'support' | 'repo';

const Sidebar: React.FC = () => {
    const [active, setActive] = useState<SidebarSection>('graphs');

    const handleButtonClick = (section: SidebarSection) => {
        setActive(section);
    };

    return (
        <aside className="flex fixed flex-col items-center px-5  top-0 pt-8 w-24 h-screen bg-[#0F123F] max-md:pl-5">
            <button>
                <img
                    loading="eager"
                    src={logo}
                    alt="Logo"
                    className="aspect-[1.59] w-[75px]"
                />
            </button>
            <button onClick={() => handleButtonClick('credentials')} className={`${active === 'credentials' ? "rounded-lg bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] " : ""} max-md:mt-2 mt-10 p-[18px]`}>
                <img
                    loading="eager"
                    src={credentialsIcon}
                    alt="credentials"
                />
            </button>
            <button onClick={() => handleButtonClick('wallets')} className={`${active === 'wallets' ? "rounded-lg bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] " : ""} max-md:mt-2 mt-6 p-[18px]`}>
                <img
                    loading="eager"
                    src={walletIcon}
                    alt="wallets"
                />
            </button>
            <button onClick={() => handleButtonClick('profile')} className={`${active === 'profile' ? "rounded-lg bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] " : ""} max-md:mt-2 mt-6 p-4 px-[21px]`}>
                <img
                    loading="eager"
                    src={graphsIcon}
                    alt="profile"
                />
            </button>
            <button onClick={() => handleButtonClick('graphs')} className={`${active === 'graphs' ? "rounded-lg bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] " : ""} max-md:mt-2 mt-6 p-4`}>
                <img
                    loading="eager"
                    src={analyticsIcon}
                    alt="graphs"
                    className="border-[3px] rounded-sm p-1"
                />
            </button>
            <div className="flex flex-col  h-full justify-end pb-16">
                <button onClick={() => handleButtonClick('support')} className={`${active === 'support' ? "rounded-lg bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] " : ""}  mt-6  max-md:mt-2 p-3`}>
                    <img
                        loading="eager"
                        src={supportIcon}
                        alt="technical support"
                    />
                </button>
                <button onClick={() => handleButtonClick('repo')} className={`${active === 'repo' ? "rounded-lg bg-gradient-to-br from-[#F57E07] to-[#F8DC7A] " : ""} max-md:mt-2 mt-6 p-[14px]`}>
                    <img
                        loading="eager"
                        src={repoIcon}
                        alt="repo"
                    />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;