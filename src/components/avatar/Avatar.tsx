import React from "react";
import * as RedixAvatar from "@radix-ui/react-avatar";

import styles from "./styles.module.scss";

const Avatar = () => (
  <RedixAvatar.Root className={styles["AvatarRoot"]}>
    <RedixAvatar.Image
      className={styles["AvatarImage"]}
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
    <RedixAvatar.Fallback className={styles["AvatarFallback"]} delayMs={600}>
      CT
    </RedixAvatar.Fallback>
  </RedixAvatar.Root>
);

export default Avatar;
