import Container from "@/app/Components/Container";
import TransitionPage from "@/app/Components/TransitionPage";
import Avatar from "@/app/Components/avatar";

import Timeline from "@/app/Components/time-line";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className="text-xl leading-tight text-center  md:text-left md:text-5xl md:mt-10">
          Mis conocimientos como{" "}
        </h1>
        <span className="text-xl md:text-5xl md:mt-10 text-secondary font-bold text-center xs:text-center">
          programador
        </span>
        <Timeline />
      </Container>
    </>
  );
};

export default PageAboutMe;
