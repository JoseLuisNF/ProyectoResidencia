import styles from "./Sugerencias1.module.css";

const Sugerencias1 = () => {
  return (
    <div className={styles.sugerencias}>
      <b className={styles.modificar}>Modificar</b>
      <b className={styles.seleccionaUnTipo}>
        Selecciona un tipo de aprendizaje para modificar las sugerencias acorde
        a tu tipo de aprendizaje:
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.arrowRight27246501Icon}
          alt=""
          src="/arrowright-2724650-1.svg"
        />
        <b className={styles.siguiente}>Siguiente</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <b className={styles.siguiente}>Regresar</b>
        <img
          className={styles.arrowRight27246502Icon}
          alt=""
          src="/arrowright-2724650-2.svg"
        />
      </div>
      <img
        className={styles.listen94774391Icon}
        alt=""
        src="/listen-9477439-1.svg"
      />
      <img
        className={styles.hello21656931Icon}
        alt=""
        src="/hello-2165693-1.svg"
      />
      <img
        className={styles.witness22103171Icon}
        alt=""
        src="/witness-2210317-1.svg"
      />
      <b className={styles.kinestesico}>Kinestesico</b>
      <b className={styles.auditivo}>Auditivo</b>
      <b className={styles.visual}>Visual</b>
    </div>
  );
};

export default Sugerencias1;
