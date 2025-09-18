import { useId, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Spoiler.module.sass";
import { IconArrowDown } from "../Icons/24/IconArrowDown";

export function Spoiler({ title, children }: { title: string, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = useId();

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const setH = () => el.style.setProperty("--h", `${el.scrollHeight}px`);
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  const toggle = () => {
    setOpen((v) => !v);
  };

  return (
    <div className={cn(styles.spoiler, open && styles.active)}>
      <button
        type="button"
        className={styles.title}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span className={styles.titleText}>{title}</span>
        <span className={styles.icon}><IconArrowDown /></span>
      </button>

      <div ref={contentRef} id={contentId} className={styles.content} aria-hidden={!open}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
}
