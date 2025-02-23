import React, { useContext } from 'react'
import '../../sass/_about.scss';
import { ResponsivenessContext } from '@/contexts/breakpoint-context';

export const AboutText = () => {

    const { styles } = useContext(ResponsivenessContext);

    const skillsSection = [
        {
            title: 'Programming',
            percentage: '80%',
            subscription: '80 %',
            colorClass: 'bg-yellow-400'
        },
        {
            title: 'Public Speaking',
            percentage: '98%',
            subscription: '98 %',
            colorClass: 'bg-green-600'
        },
        {
            title: 'Diplomation',
            percentage: '90%',
            subscription: '90 %',
            colorClass: 'bg-red-600'
        }
    ];

    return (
        <div className="about-text shadow-dark" style={ styles?.aboutText }>
            <div className={'paragraph'} style={  styles?.paragraph }>
                <p>
                    Mahasiswa sistem informasi tahun kedua di Telkom University Purwokerto. Sebagai pribadi yang suka
                    berorganisasi kini saya aktif di Eksekutif Muda di kementrian Dalam Negeri. Saya memiliki keterampilan
                    dalam organisasi, public speaking yang baik, bekerja dalam tim, strategi acara, serta mampu menjalin
                    hubungan yang baik dengan berbagai pihak.
                </p>
                <a href={'#download'} className={'button'}>My Short Description</a>
            </div>
            <div className={'about-skills'} style={ styles?.aboutSkills }>
                {skillsSection.map((skill) => (
                    <div className={'skill-element'} key={skill.title}>
                        <div className={'skill-title'}>
                            <h3>{skill.title}</h3><span>{skill.subscription}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div
                                className={`${skill.colorClass} h-2.5 rounded-full`}
                                style={{width: skill.percentage}}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
