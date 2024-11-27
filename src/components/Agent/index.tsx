import React from "react";
import "./index.css";
import Image from "../Image";

interface AgentProps {
  avatar?: string;
  firstName?: string;
  lastName?: string;
}

const Agent = ({ avatar, firstName, lastName }: AgentProps) => {
  return (
    <div className="agent-info">
      <Image
        src={avatar || "default-avatar.png"}
        alt={`${firstName} ${lastName}`}
        className="agent-avatar"
        height="1.8rem"
      />
      <span className="agent-name">
        {firstName} {lastName}
      </span>
    </div>
  );
};

export default Agent;

// Tests-cases:
// Test if the component renders the agent's avatar and name correctly.
// Test if the component handles missing avatar, firstName, or lastName props gracefully.
