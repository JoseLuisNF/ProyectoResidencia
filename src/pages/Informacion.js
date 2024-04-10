import styles from "./Informacion.module.css";

const Informacion = () => {
  return (
    <div className={styles.informacion}>
      <b className={styles.datosDeUsuario}>Datos de usuario</b>
      <b className={styles.porMotivosDeContainer}>
        <p className={styles.porMotivosDe}>
          Por motivos de estudio academico le solicitamos que
        </p>
        <p className={styles.porMotivosDe}>
          voluntariamente nos permita la siguiente informacion:
        </p>
      </b>
      <input
        className={styles.informacionChild}
        name="Nombre(S)"
        placeholder="Nombre(s)"
        type="text"
      />
      <input
        className={styles.informacionItem}
        name="Apellidos"
        placeholder="Apellidos"
        type="text"
      />
      <input
        className={styles.informacionInner}
        name="Fecha"
        placeholder="Edad"
        type="date"
      />
      <input
        className={styles.frameInput}
        name="Genero"
        placeholder="Genero"
        type="text"
      />
      <img
        className={styles.calendar552811Icon}
        alt=""
        src="/calendar-55281-1.svg"
      />
      <button className={styles.omitirWrapper} id="EnviarInformacion">
        <b className={styles.omitir}>Omitir</b>
      </button>
      <button className={styles.arrowRight27246501Parent} id="Omitir">
        <img
          className={styles.arrowRight27246501Icon}
          alt=""
          src="/arrowright-2724650-1.svg"
        />
        <b className={styles.siguiente}>Siguiente</b>
      </button>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
    </div>
  );
};

export default Informacion;
