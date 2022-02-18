import { ContainerPlace, ContainerPlaceInfo } from "../styled.components";

const LugarInfo = (): JSX.Element => {
  return (
    <>
      <ContainerPlace>
        <ContainerPlaceInfo>
          LOS ANDANTES <br />
          !Vuelve Pronto! <br />
          Macedonio Alcala #, Centro
          <a href="" className="redes">
            Instagram Account
          </a>{" "}
          <a href="" className="redes">
            Facebook Account
          </a>
        </ContainerPlaceInfo>
      </ContainerPlace>
    </>
  );
};
export default LugarInfo;