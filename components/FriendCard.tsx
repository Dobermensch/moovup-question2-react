import Image from "next/image";
import { MouseEventHandler } from "react";

import styles from "../styles/FriendList.module.css"

interface FriendProps {
  firstName: string;
  lastName: string;
  picture: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const FriendCard = ({ firstName, lastName, picture, onClick }: FriendProps) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <Image alt="user profile picture" src={picture} className={styles.profilePicture} width="50" height="50" />
      <div className={styles.name}>{firstName} {lastName}</div>
    </div>
  )
};

export default FriendCard;