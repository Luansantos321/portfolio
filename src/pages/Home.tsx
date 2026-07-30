import Hero from "../components/Hero/Hero";
import SobreMim from "../SobreMim/SobreMim";
import Tecnologias from "../components/Tecnologias/Tecnologias";
import Projects from "../components/Projects/Projects";
import Objetivo from "../components/Objetivo/Objetivo";
import Contato from "../components/Contact/Contato";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <>
            <Hero />
            <SobreMim />
            <Objetivo />
            <Tecnologias /> 
            <Projects />
            <Contato />
            <Footer />
        </>
    );
}

export default Home;