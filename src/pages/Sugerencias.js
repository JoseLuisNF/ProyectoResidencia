import styles from "./Sugerencias.module.css";

const Sugerencias = () => {
  return (
    <div className={styles.sugerencias}>
      <b className={styles.sugerencias1}>Sugerencias</b>
      <b className={styles.enBaseAContainer}>
        <p
          className={styles.enBaseA}
        >{`En base a tus respuestas se recomiendan las siguientes `}</p>
        <p className={styles.enBaseA}>recomendaciones:</p>
      </b>
      <input
        className={styles.sugerenciasChild}
        name="Sugerencia1"
        placeholder="Sugerencia #1"
        type="text"
      />
      <input
        className={styles.sugerenciasItem}
        name="Sugerencia2"
        value="Sugerencia #2"
        placeholder="Sugerencia #2"
        type="text"
      />
      <button className={styles.arrowRight27246501Parent} id="Continue">
        <img
          className={styles.arrowRight27246501Icon}
          alt=""
          src="/arrowright-2724650-1.svg"
        />
        <b className={styles.siguiente}>Siguiente</b>
      </button>
      <button className={styles.ajustarWrapper} id="Ajustar">
        <b className={styles.ajustar}>Ajustar</b>
      </button>
      <img className={styles.setting1Icon} alt="" src="/setting-1.svg" />
    </div>
  );
};

export default Sugerencias;
