import "./App.css";
import { TwiterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Jesús Arévalo",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo h",
    isFollowing: true,
  },
];

export const App = () => {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwiterFollowCard
          key={userName}
          username={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwiterFollowCard>
      ))}
    </section>
  );
};
