import styles from "./Preguntas.module.css";

const Preguntas = () => {
  return (
    <div className={styles.preguntas}>
      <b className={styles.pregunta1}>Pregunta #1</b>
      <b className={styles.preguntaAqui}>Pregunta aqui</b>
      <div className={styles.repuesta1Wrapper}>
        <b className={styles.repuesta1}>Repuesta #1</b>
      </div>
      <div className={styles.repuesta2Wrapper}>
        <b className={styles.repuesta1}>Repuesta #2</b>
      </div>
      <div className={styles.repuesta3Wrapper}>
        <b className={styles.repuesta1}>Repuesta #3</b>
      </div>
      <div className={styles.repuesta4Wrapper}>
        <b className={styles.repuesta1}>Repuesta #4</b>
      </div>
      <button className={styles.regresarParent} id="Regresar">
        <b className={styles.regresar}>Regresar</b>
        <img
          className={styles.arrowRight27246502Icon}
          alt=""
          src="/arrowright-2724650-2.svg"
        />
      </button>
      <button className={styles.arrowRight27246501Parent} id="Continuar">
        <img
          className={styles.arrowRight27246501Icon}
          alt=""
          src="/arrowright-2724650-1.svg"
        />
        <b className={styles.siguiente}>Siguiente</b>
      </button>
    </div>
  );
};

export default Preguntas;
