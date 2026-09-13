"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./hero-photo.module.css";

export function HeroPhoto() {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");

  function openPhoto() {
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    const element = dialog.current;
    return () => {
      if (element?.open)
        document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  return (
    <>
      <button
        className={styles.preview}
        onClick={openPhoto}
        aria-label="Enlarge photo of Ruwanweli Maha Seya"
        aria-haspopup="dialog"
      >
        <Image
          src="/places/ruwanweliseya.jpg"
          alt="Ruwanweli Maha Seya in Anuradhapura"
          width={1600}
          height={800}
          sizes="(max-width: 860px) 100vw, 55vw"
          loading="eager"
        />
        <span className={styles.hint}>View full image</span>
        <span className={styles.caption}>
          Ruwanweli Maha Seya <small>Anuradhapura · Sri Lanka</small>
        </span>
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Ruwanweli Maha Seya photo"
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
        }}
      >
        <button
          className={styles.backdropClose}
          tabIndex={-1}
          aria-label="Close photo backdrop"
          onClick={() => dialog.current?.close()}
        />
        <div className={styles.content}>
          <button
            className={styles.close}
            onClick={() => dialog.current?.close()}
            aria-label="Close photo"
          >
            ×
          </button>
          <Image
            src="/places/ruwanweliseya.jpg"
            alt="Full view of Ruwanweli Maha Seya, Anuradhapura, Sri Lanka"
            width={1600}
            height={800}
            sizes="95vw"
          />
          <p>Ruwanweli Maha Seya · Anuradhapura, Sri Lanka</p>
        </div>
      </dialog>
    </>
  );
}
