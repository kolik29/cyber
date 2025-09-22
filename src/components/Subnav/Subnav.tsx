import { Link } from 'react-router-dom';
import { IconCameras } from '../Icons/24/IconCameras';
import { IconComputers } from '../Icons/24/IconComputers';
import { IconGaming } from '../Icons/24/IconGaming';
import { IconHeadphones } from '../Icons/24/IconHeadphones';
import { IconPhones } from '../Icons/24/IconPhones';
import { IconSmartWatches } from '../Icons/24/IconSmartWatches';
import styles from './Subnav.module.sass';

export function Subnav() {
  return (
    <div className={styles.subnav}>
      <div className="container">
        <div className={styles['subnav-inner']}>
          <Link to="">
            <IconPhones></IconPhones>
            <span>Phones</span>
          </Link>
          <div className={styles['subnav-divider']}></div>
          <Link to="">
            <IconComputers></IconComputers>
            <span>Computers</span>
          </Link>
          <div className={styles['subnav-divider']}></div>
          <Link to="">
            <IconSmartWatches></IconSmartWatches>
            <span>Smart Watches</span>
          </Link>
          <div className={styles['subnav-divider']}></div>
          <Link to="">
            <IconCameras></IconCameras>
            <span>Cameras</span>
          </Link>
          <div className={styles['subnav-divider']}></div>
          <Link to="">
            <IconHeadphones></IconHeadphones>
            <span>Headphones</span>
          </Link>
          <div className={styles['subnav-divider']}></div>
          <Link to="">
            <IconGaming></IconGaming>
            <span>Gaming</span>
          </Link>
        </div>
      </div>
    </div>
  );
}