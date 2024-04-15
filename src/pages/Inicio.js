import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Inicio.module.css";

const Inicio = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/informacion");
  }, [navigate]);

  return (
    <div className={styles.inicio}>
      <div className={styles.frameParent}>
        <div className={styles.frame}>
          <b className={styles.mejoraTusHbitosContainer}>
            <span>{`Mejora tus `}</span>
            <span className={styles.hbitosDeEstudio}>hábitos de estudio</span>
          </b>
        </div>
        <b className={styles.estaPginaWebContainer}>
          <p
            className={styles.estaPginaWeb}
          >{`Esta página web ha sido creada con la intención `}</p>
          <p
            className={styles.estaPginaWeb}
          >{`de ayudar a los estudiantes de licenciatura a `}</p>
          <p
            className={styles.estaPginaWeb}
          >{`mejorar sus hábitos de estudio por medio de `}</p>
          <p
            className={styles.estaPginaWeb}
          >{`una encuesta que te ayudará a reforzar tus `}</p>
          <p className={styles.estaPginaWeb}>hábitos de estudio.</p>
        </b>
        <button
          className={styles.arrowRight27246501Parent}
          autoFocus={true}
          id="BottonInicioE"
          onClick={onFrameButtonClick}
        >
          <img
            className={styles.arrowRight27246501Icon}
            alt=""
            src="/arrowright-2724650-1.svg"
          />
          <b className={styles.iniciarEncuesta}>Iniciar encuesta</b>
        </button>
      </div>
    </div>
  );
};

export default Inicio;
