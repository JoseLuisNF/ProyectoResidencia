import styles from "./Agradecimientos.module.css";

const Agradecimientos = () => {
  return (
    <div className={styles.agradecimientos}>
      <b className={styles.graciasPorUtilizar}>
        Gracias por utilizar nuestra plataforma
      </b>
      <b className={styles.agradecemosTuTiempoContainer}>
        <p
          className={styles.agradecemosTuTiempo}
        >{`Agradecemos tu tiempo y esperamos que nuestras sugerencias te `}</p>
        <p
          className={styles.agradecemosTuTiempo}
        >{`ayuden a mejorar tus hábitos de estudio. `}</p>
      </b>
      <button className={styles.rectangleParent} id="Reinicio">
        <div className={styles.groupChild} />
        <img
          className={styles.arrowRight27246501Icon}
          alt=""
          src="/arrowright-2724650-1.svg"
        />
        <b className={styles.volverAlInicio}>Volver al inicio</b>
      </button>
      <img
        className={styles.partyPopper1Icon}
        alt=""
        src="/partypopper-1.svg"
      />
    </div>
  );
};

export default Agradecimientos;
