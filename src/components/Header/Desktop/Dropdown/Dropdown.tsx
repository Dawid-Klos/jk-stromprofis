import Link from 'next/link';
import Image from 'next/image';
import {
    Dropdown as NextDropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    NavbarItem,
    Button
} from '@nextui-org/react';

import styles from './Dropdown.module.scss';
import chevron from '@assets/icons/chevron.svg';
import { servicesTypes } from '@config/services';


type Props = {
    title: string;
    list: servicesTypes;
};


export const Dropdown = ({ title, list }: Props) => {

    return (
        <NextDropdown classNames={{
            base: styles.dropdown,
        }}>
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className={styles.button}
                        endContent={<Image className={styles.chevron} src={chevron} alt="chevron" width={16} height={16} />}
                    >
                        {title}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>

            <DropdownMenu aria-label="">
                {list.map(({ title, href, icon }) => {
                    return (
                        <DropdownItem key={title} className={styles.item} startContent={
                            <Image className={styles.icon} src={icon} alt="chevron" width={20} height={20} />

                        }>
                            <Link className={styles.link} href={href}>
                                {title}
                            </Link>
                        </DropdownItem>
                    );
                })}
            </DropdownMenu>
        </NextDropdown>
    )

}