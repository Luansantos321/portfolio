import type { Tecnologia } from "../../types/Tecnologia";

interface Props {
    tecnologia: Tecnologia;
}

function TecnologiaCard({ tecnologia }: Props) {
    return (
        <div className="tecnologia-card">

            <i className={`${tecnologia.icone} tecnologia-icone`}></i>

            <h3>{tecnologia.nome}</h3>

            <span>{tecnologia.categoria}</span>

            <p>{tecnologia.descricao}</p>

        </div>
    );
}

export default TecnologiaCard;