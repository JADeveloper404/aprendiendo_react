import "./App.css";
import { TwiterFollowCard } from "./TwitterFollowCard";

export const App = () => {
  return (
    <section className="App">
      <TwiterFollowCard username="midudev">Jesús Arévalo</TwiterFollowCard>
      <TwiterFollowCard username="nana">Pedro</TwiterFollowCard>
    </section>
  );
};
