import { useState } from "react";

export const TwiterFollowCard = ({ children, username, name }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const imageSrc = `https://unavatar.io/${username}`;

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="El avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
};
