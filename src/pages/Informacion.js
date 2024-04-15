import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Informacion.module.css";

const Informacion = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/preguntas");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/preguntas");
  }, [navigate]);

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
        id="Nombres"
        placeholder="Nombre(s)"
        type="text"
      />
      <input
        className={styles.informacionItem}
        name="Apellidos"
        id="Apellidos"
        placeholder="Apellidos"
        type="text"
      />
      <input
        className={styles.frame}
        name="Fecha"
        id="Fecha"
        value="Genero"
        placeholder="Edad"
        type="date"
      />
      <div className={styles.frame1}>
        <button
          className={styles.omitirWrapper}
          id="EnviarInformacion"
          onClick={onFrameButtonClick}
        >
          <b className={styles.omitir}>Omitir</b>
        </button>
        <button
          className={styles.arrowRight27246501Parent}
          id="Omitir"
          onClick={onFrameButton1Click}
        >
          <img
            className={styles.arrowRight27246501Icon}
            alt=""
            src="/arrowright-2724650-1.svg"
          />
          <b className={styles.siguiente}>Siguiente</b>
        </button>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
    </div>
  );
};

export default Informacion;
