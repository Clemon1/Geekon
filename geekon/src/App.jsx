import "./App.css";
import { Flex } from "@mantine/core";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Services from "./components/services";
import ChooseUs from "./components/chooseUs";
import Footer from "./components/footer";

function App() {
  return (
    <Flex w={"100%"} mih={"100vh"} direction={"column"}>
      <Navbar />
      <Home />
      <Services />
      <ChooseUs />
      <Footer />
    </Flex>
  );
}

export default App;
