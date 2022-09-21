import Header from "./components/Header";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";

import './App.scss';

const App = ()=>{
  return (
    <>
      <Header>
        <Title />
        <Nav />
      </Header>
      <Section />
      <Footer />
    </>
  );
};

export default App;