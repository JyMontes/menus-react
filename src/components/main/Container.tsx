import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { Container, ContainerPlace,ContainerPlaceInfo } from "../styled.components";
import logo from "../../assets/logo.png";

const Top = (): JSX.Element => {
  return (
    <>
      <Container >
        <ContainerPlace>
          <ContainerPlaceInfo>
          <img src={logo} className="logo-img" alt="" />
            LOS ANDANTES <br />
            !Vuelve Pronto! <br />
            Macedonio Alcala #, Centro
            <section className="redes">
                <div className="links">
                <AiFillInstagram/> <a href="" >Instagram Account</a>
                </div>
                <div className="links">
                <AiFillFacebook/> <a href="">Facebook Account</a>
                </div>
            </section>
            
          </ContainerPlaceInfo>
        </ContainerPlace>
      </Container>
    </>
  );
};
export default Top;
