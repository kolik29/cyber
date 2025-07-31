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
          <a href="">
            <IconPhones></IconPhones>
            <span>Phones</span>
          </a>
          <div className={styles['subnav-divider']}></div>
          <a href="">
            <IconComputers></IconComputers>
            <span>Computers</span>
          </a>
          <div className={styles['subnav-divider']}></div>
          <a href="">
            <IconSmartWatches></IconSmartWatches>
            <span>Smart Watches</span>
          </a>
          <div className={styles['subnav-divider']}></div>
          <a href="">
            <IconCameras></IconCameras>
            <span>Cameras</span>
          </a>
          <div className={styles['subnav-divider']}></div>
          <a href="">
            <IconHeadphones></IconHeadphones>
            <span>Headphones</span>
          </a>
          <div className={styles['subnav-divider']}></div>
          <a href="">
            <IconGaming></IconGaming>
            <span>Gaming</span>
          </a>
        </div>
      </div>
    </div>
  );
}