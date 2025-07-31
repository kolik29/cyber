import { Header } from "../../comonents/Header/Header";
import { IconFacebook } from "../../comonents/Icons/16/IconFacebook";
import { IconInstagram } from "../../comonents/Icons/16/IconInstagram";
import { IconTikTok } from "../../comonents/Icons/16/IconTikTok";
import { IconTwitter } from "../../comonents/Icons/16/IconTwitter";
import { IconAdd } from "../../comonents/Icons/24/IconAdd";
import { IconArrowDown } from "../../comonents/Icons/24/IconArrowDown";
import { IconArrowRight } from "../../comonents/Icons/24/IconArrowRight";
import { IconBattery } from "../../comonents/Icons/24/IconBattery";
import { IconCameras } from "../../comonents/Icons/24/IconCameras";
import { IconClose } from "../../comonents/Icons/24/IconClose";
import { IconComputers } from "../../comonents/Icons/24/IconComputers";
import { IconCores } from "../../comonents/Icons/24/IconCores";
import { IconCPU } from "../../comonents/Icons/24/IconCPU";
import { IconDelete } from "../../comonents/Icons/24/IconDelete";
import { IconEdit } from "../../comonents/Icons/24/IconEdit";
import { IconFrontCamera } from "../../comonents/Icons/24/IconFrontCamera";
import { IconGaming } from "../../comonents/Icons/24/IconGaming";
import { IconHeadphones } from "../../comonents/Icons/24/IconHeadphones";
import { IconLocation } from "../../comonents/Icons/24/IconLocation";
import { IconMainCamera } from "../../comonents/Icons/24/IconMainCamera";
import { IconPayment } from "../../comonents/Icons/24/IconPayment";
import { IconPhones } from "../../comonents/Icons/24/IconPhones";
import { IconPlus } from "../../comonents/Icons/24/IconPlus";
import { IconScreen } from "../../comonents/Icons/24/IconScreen";
import { IconSearch } from "../../comonents/Icons/24/IconSearch";
import { IconSettings } from "../../comonents/Icons/24/IconSettings";
import { IconShipping } from "../../comonents/Icons/24/IconShipping";
import { IconSmartWatches } from "../../comonents/Icons/24/IconSmartWatches";
import { IconView } from "../../comonents/Icons/24/IconView";
import { IconArrowLeft } from "../../comonents/Icons/32/IconArrowLeft";
import { IconCart } from "../../comonents/Icons/32/IconCart";
import { IconFavorite } from "../../comonents/Icons/32/IconFavorite";
import { IconPerson } from "../../comonents/Icons/32/IconPerson";
import { IconComputers as IconComputers48 } from "../../comonents/Icons/48/IconComputers";
import { IconPhones as IconPhones48 } from "../../comonents/Icons/48/IconPhones";
import { IconCameras as IconCameras48 } from "../../comonents/Icons/48/IconCameras";
import { IconHeadphones as IconHeadphones48 } from "../../comonents/Icons/48/IconHeadphones";
import { IconGaming as IconGaming48 } from "../../comonents/Icons/48/IconGaming";
import { IconSmartWatches as IconSmartWatches48 } from "../../comonents/Icons/48/IconSmartWatches";

import styles from './components.module.sass';
import { IconDelivery } from "../../comonents/Icons/56/IconDelivery";
import { IconGuaranteed } from "../../comonents/Icons/56/IconGuaranteed";
import { IconStock } from "../../comonents/Icons/56/IconStock";
import { Footer } from "../../comonents/Footer/Footer";
import { Subnav } from "../../comonents/Subnav/Subnav";

export function Components() {
  return (
    <>
      <h1>Header</h1>
      
      <Header></Header>
      <Subnav></Subnav>
      <Footer></Footer>

      <h1>Icons</h1>

      <h2>16px</h2>

      <div className={ styles.icons }>
        <IconTwitter></IconTwitter>
        <IconFacebook></IconFacebook>
        <IconInstagram></IconInstagram>
        <IconTikTok></IconTikTok>
      </div>

      <h2>24px</h2>

      <div className={ styles.icons }>
        <IconComputers></IconComputers>
        <IconScreen></IconScreen>
        <IconAdd></IconAdd>
        <IconHeadphones></IconHeadphones>
        <IconCores></IconCores>
        <IconSearch></IconSearch>
        <IconArrowDown></IconArrowDown>
        <IconLocation></IconLocation>
        <IconCPU></IconCPU>
        <IconSettings></IconSettings>
        <IconArrowRight></IconArrowRight>
        <IconMainCamera></IconMainCamera>
        <IconDelete></IconDelete>
        <IconShipping></IconShipping>
        <IconBattery></IconBattery>
        <IconPayment></IconPayment>
        <IconEdit></IconEdit>
        <IconSmartWatches></IconSmartWatches>
        <IconCameras></IconCameras>
        <IconPhones></IconPhones>
        <IconFrontCamera></IconFrontCamera>
        <IconView></IconView>
        <IconClose></IconClose>
        <IconPlus></IconPlus>
        <IconGaming></IconGaming>
      </div>

      <h2>32px</h2>
      
      <div className={ styles.icons }>
        <IconArrowLeft></IconArrowLeft>
        <IconCart></IconCart>
        <IconFavorite></IconFavorite>
        <IconPerson></IconPerson>
      </div>
      
      <h2>48px</h2>

      <div className={ styles.icons }>
        <IconComputers48></IconComputers48>
        <IconPhones48></IconPhones48>
        <IconCameras48></IconCameras48>
        <IconHeadphones48></IconHeadphones48>
        <IconGaming48></IconGaming48>
        <IconSmartWatches48></IconSmartWatches48>
      </div>
      
      <h2>56px</h2>

      <div className={ styles.icons }>
        <IconDelivery></IconDelivery>
        <IconGuaranteed></IconGuaranteed>
        <IconStock></IconStock>
      </div>
    </>
  );
}