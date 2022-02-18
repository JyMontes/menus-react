import { ImgContainer, Img } from "../styled.components";
import food from "../../assets/food1.jpg";

const Menu = (): JSX.Element => {
    return (
      <>
        <section>

        </section>
        <ImgContainer>
          <Img height={50} src={food} />
          <section className="descrition">
            <div className="description-title">Plot Summary -- $150</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              eaque quo.
            </div>
          </section>
        </ImgContainer>
        <ImgContainer>
          <Img height={50} src={food} />
          <section className="descrition">
            <div className="description-title">Plot Summary -- $150</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              eaque quo.
            </div>
          </section>
        </ImgContainer>
        <ImgContainer>
          <Img height={50} src={food} />
          <section className="descrition">
            <div className="description-title">Plot Summary -- $150</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              eaque quo.
            </div>
          </section>
        </ImgContainer>
        <ImgContainer>
          <Img height={50} src={food} />
          <section className="descrition">
            <div className="description-title">Plot Summary -- $150</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              eaque quo.
            </div>
          </section>
        </ImgContainer>
      </>
    )
}

export default Menu;