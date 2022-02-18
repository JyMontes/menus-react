import { Flex,} from "../styled.components";
import Menu from "./Menu";
import LugarInfo from "./LugarInfo";
import Top from "./Container";
const Main = (): JSX.Element => {
  return (
    <>
      <Flex>
        <Top/>
        <section className="menu">
           <Menu/> 
        </section>
        <Top/>
      </Flex>
    </>
  );
};

export default Main;
