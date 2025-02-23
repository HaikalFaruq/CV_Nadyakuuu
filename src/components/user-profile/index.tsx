import React, { useContext } from 'react'
import ProfileImg from '../../assets/images/nanadcans.svg';
import '../../sass/_header.scss';
import { UserContent } from "../user-content";
import Image from "next/image";
import { ResponsivenessContext } from '@/contexts/breakpoint-context';

export const UserProfile = ({}) => {

    const { styles } = useContext(ResponsivenessContext);

    return (
        <div className={'header-profile'} style={styles?.headerProfile}>
            <div className={'flex justify-center relative'}>
                <Image
                    src={ProfileImg}
                    alt={'header-profile'}
                    className='user-profile'
                    width={500}
                    height={500}
                />            
            </div>
            <UserContent />
        </div>
    );
}
