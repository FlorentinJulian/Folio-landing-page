import Container from "@/app/Components/Container";
import TransitionPage from "@/app/Components/TransitionPage";
import PortfolioBox from "@/app/Components/portfolio-box";
import { dataPortfolio } from "@/app/data";

const PortfolioPage = () => {
  return (
    <Container>
      <TransitionPage />

      <div className="flex flex-col justify-center h-full">
        <h1 className="text-xl leading-tight text-center md:text-4xl md:mb-5">
          Mis proyectos
        </h1>
        <div className="relative z-10 grid max-w-4xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PortfolioPage;
