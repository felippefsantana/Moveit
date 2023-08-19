import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import Image from "next/image";
import levelImage from "../../public/icons/level.svg";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <Image
        src="https://github.com/felippefsantana.png"
        width={500}
        height={500}
        alt="Felippe Santana"
      />
      <div>
        <strong>Felippe Santana</strong>
        <p>
          <Image
            src={levelImage}
            alt="level"
          />
          Level {level}
        </p>
      </div>
    </div>
  );
}
