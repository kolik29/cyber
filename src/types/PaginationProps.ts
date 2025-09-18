export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;
};