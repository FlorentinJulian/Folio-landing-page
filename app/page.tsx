import Introduction from "./Components/Introduction";
import TransitionPage from "./Components/TransitionPage";
import CoverParticles from "./Components/cover-particles";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
