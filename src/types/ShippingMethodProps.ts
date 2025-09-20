export type ShippingMethodProps = {
  id: string;
  value: string;
  name: string;
  title: string;
  price: string;
  date: string;
  selected?: boolean;
  onChange: (value: string) => void;
};