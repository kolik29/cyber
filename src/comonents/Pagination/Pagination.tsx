import styles from "./Pagination.module.sass";
import type { PaginationProps } from "../../types/PaginationProps";
import cn from "classnames";
import React from "react";
import { IconArrowLeft } from "../Icons/24/IconArrowLeft";
import { IconArrowRight } from "../Icons/24/IconArrowRight";
import { Link } from "react-router-dom";

function getPagination(current: number, total: number): number[] {
  if (total <= 1) return [1];

  const set = new Set<number>();
  set.add(1);
  set.add(total);

  for (let p = current - 1; p <= current + 1; p++) {
    if (p >= 1 && p <= total) set.add(p);
  }

  return Array.from(set).sort((a, b) => a - b);
}

export const Pagination = ({page, totalPages}: PaginationProps) => {
  const items = getPagination(page, totalPages);
  const pageNodes: React.ReactNode[] = [];
  let prev: number | undefined;

  items.forEach((it) => {
    if (prev !== undefined && it - prev > 1) {
      pageNodes.push(
        <li key={`dots-${prev}`} className={styles.dots} aria-hidden="true">
          ....
        </li>
      );
    }

    pageNodes.push(
      <li key={it}>
        {it === page ? (
          <span
            aria-current="page"
            className={cn(styles.pageNumber, styles.active)}
          >
            {it}
          </span>
        ) : (
          <Link
            to={String(it)}
            className={styles.pageNumber}
          >
            {it}
          </Link>
        )}
      </li>
    );

    prev = it;
  });

  const prevHref = Math.max(page - 1, 1);
  const nextHref = Math.min(page + 1, totalPages);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <Link
        to={String(prevHref)}
        aria-disabled={page <= 1}
        className={`${styles.nav} ${styles.prevPage} ${page <= 1 ? styles.disabled : ""}`}
        aria-label="Previous page"
      >
        <IconArrowLeft></IconArrowLeft>
      </Link>
      <ul className={styles.list}>{pageNodes}</ul>
      <Link
        to={String(nextHref)}
        aria-disabled={page >= totalPages}
        className={`${styles.nav} ${styles.nextPage} ${page >= totalPages ? styles.disabled : ""}`}
        aria-label="Next page"
      >
        <IconArrowRight></IconArrowRight>
      </Link>
    </nav>
  );
};
