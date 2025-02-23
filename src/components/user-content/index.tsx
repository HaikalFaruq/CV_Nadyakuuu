import React from 'react'
import '../../sass/_header.scss';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

export const UserContent = () => {

    return (
        <div className="user-content">
            <h2><span className={'font-bold text-yellow-400 text-5xl'}>{'{'}</span> Nadya Fakhirah <span className={'font-bold text-yellow-400 text-5xl'}>{'}'}</span></h2>
            <div className='type-writer'>
                <Typewriter
                    options={{
                        strings: ["Infromation System Student 🤓💻", "Nanad ❤️ Programming"],
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Halo Teman-Teman 👋😄!')
                            .pauseFor(1500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
            <div className='social-icons'>
                <GitHubIcon className='fab'/>
                <LinkedInIcon className='fab' />
                <TerminalIcon className='fab'/>
            </div>
            <button className={'hack-me'}>My Creative Portofolio <TerminalIcon /> </button>
            <div className='scroll-me'>
                <a href="#thanks"><span></span>Scroll Me</a>
            </div>
        </div>
    );
}
