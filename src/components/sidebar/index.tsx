import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ChatIcon from '@mui/icons-material/Chat';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import '../../sass/_sidebar.scss';

const sidebarEntries = {
    'Home': HomeIcon,
    'About': PermIdentityIcon,
    'Research': BusinessCenterIcon,
    'Projects': AssignmentTurnedInIcon,
    'Blog': DriveFileRenameOutlineIcon,
    'Contact': ChatIcon
};

export const SidebarView = () => {
    return (
        <>
            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar"
                    aria-controls="cta-button-sidebar" type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                <span className="sr-only" style={{ border: '2px solid red' }}>Open sidebar</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="cta-button-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 sidebar">
                    <h1 className={'relative ml-3 text-white text-2xl font-sans font-extrabold cursor-pointer'}>Nadya<span className={'nav-point'}>.</span></h1>

                    <ul className="space-y-2 font-medium sidebar-entries">
                        {Object.entries(sidebarEntries).map(([menu, IconElement]) => (
                            // eslint-disable-next-line react/jsx-key
                            <li key={menu}>
                                <a href={`#${menu}`} onClick={(event)=>{
                                    event?.preventDefault();
                                    document?.getElementById(menu)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                   className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-gray-700 group">
                                    {<IconElement
                                        className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 22 21"/>}
                                    <span className="ms-3 mt-1 tracking-wide">{menu}
                                        {menu === 'Blog' &&
                                            <span
                                                className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                                1
                                            </span>
                                        }
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>                

                    <div className={'absolute bottom-2 left-12 text-gray-400 text-xs tracking-widest text-center'}>
                        <p>&copy; {new Date().getFullYear()} Nadya Fakhirah</p>
                    </div>
                </div>
            </aside>
        </>
    );
}