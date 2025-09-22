import { Header } from "../../widgets/Header/Header";
import { IconFacebook } from "../../components/Icons/16/IconFacebook";
import { IconInstagram } from "../../components/Icons/16/IconInstagram";
import { IconTikTok } from "../../components/Icons/16/IconTikTok";
import { IconTwitter } from "../../components/Icons/16/IconTwitter";
import { IconAdd } from "../../components/Icons/24/IconAdd";
import { IconArrowDown } from "../../components/Icons/24/IconArrowDown";
import { IconArrowRight } from "../../components/Icons/24/IconArrowRight";
import { IconBattery } from "../../components/Icons/24/IconBattery";
import { IconCameras } from "../../components/Icons/24/IconCameras";
import { IconClose } from "../../components/Icons/24/IconClose";
import { IconComputers } from "../../components/Icons/24/IconComputers";
import { IconCores } from "../../components/Icons/24/IconCores";
import { IconCPU } from "../../components/Icons/24/IconCPU";
import { IconDelete } from "../../components/Icons/24/IconDelete";
import { IconEdit } from "../../components/Icons/24/IconEdit";
import { IconFrontCamera } from "../../components/Icons/24/IconFrontCamera";
import { IconGaming } from "../../components/Icons/24/IconGaming";
import { IconHeadphones } from "../../components/Icons/24/IconHeadphones";
import { IconLocation } from "../../components/Icons/24/IconLocation";
import { IconMainCamera } from "../../components/Icons/24/IconMainCamera";
import { IconPayment } from "../../components/Icons/24/IconPayment";
import { IconPhones } from "../../components/Icons/24/IconPhones";
import { IconPlus } from "../../components/Icons/24/IconPlus";
import { IconScreen } from "../../components/Icons/24/IconScreen";
import { IconSearch } from "../../components/Icons/24/IconSearch";
import { IconSettings } from "../../components/Icons/24/IconSettings";
import { IconShipping } from "../../components/Icons/24/IconShipping";
import { IconSmartWatches } from "../../components/Icons/24/IconSmartWatches";
import { IconView } from "../../components/Icons/24/IconView";
import { IconArrowLeft } from "../../components/Icons/32/IconArrowLeft";
import { IconCart } from "../../components/Icons/32/IconCart";
import { IconFavorite } from "../../components/Icons/32/IconFavorite";
import { IconPerson } from "../../components/Icons/32/IconPerson";
import { IconComputers as IconComputers48 } from "../../components/Icons/48/IconComputers";
import { IconPhones as IconPhones48 } from "../../components/Icons/48/IconPhones";
import { IconCameras as IconCameras48 } from "../../components/Icons/48/IconCameras";
import { IconHeadphones as IconHeadphones48 } from "../../components/Icons/48/IconHeadphones";
import { IconGaming as IconGaming48 } from "../../components/Icons/48/IconGaming";
import { IconSmartWatches as IconSmartWatches48 } from "../../components/Icons/48/IconSmartWatches";

import styles from './components.module.sass';
import { IconDelivery } from "../../components/Icons/56/IconDelivery";
import { IconGuaranteed } from "../../components/Icons/56/IconGuaranteed";
import { IconStock } from "../../components/Icons/56/IconStock";
import { Footer } from "../../widgets/Footer/Footer";
import { Subnav } from "../../components/Subnav/Subnav";
import { MobileMenu } from "../../widgets/MobileMenu/MobileMenu";
import { Text } from "../../components/Inputs/Text/Text";
import { Button } from "../../components/Buttons/Button/Button";
import { ProductCard } from "../../components/Cards/Product/ProductCard";
import { CategoryCard } from "../../components/Cards/Category/CategoryCard";
import { DetailCard } from "../../components/Cards/Detail/DetailCard";
import { OverallRating } from "../../components/Reviews/OverallRating/OverallRating";
import { DetailRating } from "../../components/Reviews/DetailRating/DetailRating";
import { Comment } from "../../components/Reviews/Comment/Comment";
import { Tabs } from "../../components/Inputs/Tabs/Tabs";
import { Radiobox } from "../../components/Inputs/Radiobox/Radiobox";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Pagination } from "../../components/Pagination/Pagination";
import { PriceRange } from "../../components/PriceRange/PriceRange";
import { useState } from "react";
import { Spoiler } from "../../components/Spoiler/Spoiler";
import { Quantity } from "../../components/Quantity/Quantity";
import { Product } from "../../components/Cart/Product/Product";
import { SummaryProduct } from "../../components/Cart/SummaryProduct/SummaryProduct";

import img from '../../assets/Images/iphone-14-pro.png';
import { Steps } from "../../components/Cart/Steps/Steps";
import { Address } from "../../components/Cart/Address/Address";
import { ShippingMethod } from "../../components/Cart/ShippingMethod/ShippingMethod";
import { AddNewAddress } from "../../components/Cart/AddNewAddress/AddNewAddress";

export function Components() {
  const [values, setValues] = useState<[number, number]>([1000, 3000]);
  const [qty, setQty] = useState(1);
  const [shipping, setShipping] = useState<string>('shipping1');
  const [device, setDevice] = useState<string>('apple');

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

      <h1>Inputs</h1>

      <div className={ styles.inputs }>
        <Text placeholder="Placeholder" label="Label" name="test1" value="Value"></Text>
        <Text placeholder="Placeholder" name="test2" value="Value">
          <IconView className={styles.iconView}></IconView>
        </Text>
      </div>

      <h1>Buttons</h1>

      <div className={ styles.buttons }>
        <Button>test</Button>
        <Button type="white" size="medium">test</Button>
        <Button type="black" size="small">test</Button>
        <Button>test<IconArrowDown></IconArrowDown></Button>
      </div>

      <h1>Cards</h1>

      <div className={ styles.cards }>
        <ProductCard id={1} img={img} title="iPhone 14 Pro" price={1299}></ProductCard>
        <CategoryCard text="Phones">
          <IconPhones48></IconPhones48>
        </CategoryCard>
        <DetailCard label="Screen size" value='6.7"'>
          <IconScreen></IconScreen>
        </DetailCard>
      </div>

      <h1>Reviews</h1>

      <div className={ styles.reviews }>
        <OverallRating rating={4.1951564} totalValues={125}></OverallRating>
        <DetailRating star1={0} star2={0} star3={3} star4={6} star5={30}></DetailRating>
        <Comment
          avatar='/src/assets/Images/Avatar.JPG'
          name='John Doe'
          rating={4.5}
          date={new Date()}
          comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsa.'
          gallery={[
            { src: '/src/assets/Images/Review_Image1.png', w: 1600, h: 1200, thumb: '/src/assets/Images/Review_Image1.png', alt: 'Side view' },
            { src: '/src/assets/Images/Review_Image2.png', w: 1600, h: 1200, thumb: '/src/assets/Images/Review_Image2.png' },
          ]}
        ></Comment>
      </div>

      <h1>Tabs</h1>

      <div className={ styles.tabs }>
        <Tabs tabs={[
          { value: '128GB', label: '128GB', active: false },
          { value: '256GB', label: '256GB', active: true },
          { value: '512GB', label: '512GB', active: true },
          { value: '1TB', label: '1TB', active: true },
        ]} type="memory" onChange={(value) => console.log(value)}></Tabs>
      </div>

      <h1>Checkboxes</h1>

      <div className={ styles.checkboxes }>
        <Radiobox
          id={'apple'}
          value={'apple'}
          name={'device'}
          selected={device === 'apple'}
          onChange={(value) => setDevice(value)}
        >
          <strong>Apple</strong> <span>128</span>
        </Radiobox>
        <Radiobox
          id={'samsung'}
          value={'samsung'}
          name={'device'}
          selected={device === 'samsung'}
          onChange={(value) => setDevice(value)}
        >
          <strong>Samsung</strong> <span>23</span>
        </Radiobox>
        <Checkbox value="Apple" name="device1" onChange={(value) => console.log(value)}>
          <strong>Apple</strong> <span>128</span>
        </Checkbox>
        <Checkbox value="Samsung" name="device1" onChange={(value) => console.log(value)}>
          <strong>Samsung</strong> <span>23</span>
        </Checkbox>
      </div>

      <h1>Pagination</h1>

      <div className={ styles.pagination }>
        <Pagination page={20} totalPages={50} onChange={(page) => console.log(page)}></Pagination>
      </div>

      <h1>Price range</h1>

      <div className={ styles.priceRange }>
        <PriceRange min={0} max={10000} values={values} onChange={setValues}></PriceRange>
      </div>

      <h1>Section</h1>

      <div className={ styles.section }>
        <Spoiler title="test">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet repudiandae aliquam corrupti incidunt molestiae doloribus earum id, voluptas esse! Distinctio, minus voluptate. Eveniet atque eaque accusamus sint, id reprehenderit.</div>
        </Spoiler>
      </div>

      <h1>Quantity</h1>

      <div className={ styles.quantity }>
        <Quantity value={qty} onChange={setQty}></Quantity>
      </div>

      <h1>Added Product</h1>

      <div className={ styles.addedProduct }>
        <Product id={1} img={img} title="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)" article="MQ9T3RX/A" quantity={1} price={1399}></Product>
        <SummaryProduct id={1} img={img} title="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)" price={1399}></SummaryProduct>
      </div>

      <h1>Steps</h1>

      <div className={ styles.steps }>
        <Steps number={1} title="Address">
          <IconLocation></IconLocation>
        </Steps>
      </div>

      <h1>Address</h1>

      <div className={ styles.address }>
        <Address name="John Doe" label="Home" addressLine1="123 Main St" addressLine2="Anytown, USA" state="CA" city="San Francisco" phone="+1 (123) 456-7890"></Address>
      </div>

      <h1>Shipping Method</h1>

      <div className={ styles.shippingMethod }>
        <ShippingMethod
          id="shipping1"
          value="shipping1"
          name="shipping"
          title="Shipping 1"
          price="$8.50"
          date="28 Jan, 2023"
          selected={shipping === 'shipping1'}
          onChange={setShipping}
        />

        <ShippingMethod
          id="shipping2"
          value="shipping2"
          name="shipping"
          title="Shipping 2"
          price="$50"
          date="28 Jan, 2023"
          selected={shipping === 'shipping2'}
          onChange={setShipping}
        />
      </div>

      <h1>AddNewAddress</h1>

      <div className={ styles.addNewAddress }>
        <AddNewAddress></AddNewAddress>
      </div>

      <MobileMenu></MobileMenu>
    </>
  );
}