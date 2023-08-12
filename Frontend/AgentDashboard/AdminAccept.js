import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminAccept() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get('https://localhost:7125/api/AgentRegisters/Pending')
      .then((response) => setAgents(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure the container takes up the full viewport height
  };

  const cardStyle = {
    width: '18rem',
    margin: '10px', // Add some margin between cards
  };

  const handleApprove = async (agentId) => {
    try {
      await axios.put(`https://localhost:7125/api/AdminRegisters/UpdateApprovalStatus/${agentId}`, "Approved", {
        headers: { 'Content-Type': 'application/json' }
      });
      // No need to fetch pending agents again
    } catch (error) {
      console.error('Error updating approval status:', error);
    }
    window.location.reload();
  };

  const handleDecline = async (agentId) => {
    try {
      await axios.put(`https://localhost:7125/api/AdminRegisters/UpdateApprovalStatus/${agentId}`, "Declined", {
        headers: { 'Content-Type': 'application/json' }
      });
      // No need to fetch pending agents again
    } catch (error) {
      console.error('Error updating approval status:', error);
    }
    window.location.reload();
  };

  return (
    <div style={containerStyle}>
      {agents.map((agent) => (
        <div
          key={agent.agent_Id}
          className="card"
          style={cardStyle}
          onClick={() => console.log("Clicked card ID:", agent.agent_Id)}
        >
          <div className="card-body">
            <h5 className="card-title">{agent.agent_Name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{agent.status}</h6>
            <p className="card-text">Go Through the agent details and approve the agent or Decline </p>
            <button className="btn btn-primary" onClick={() => handleApprove(agent.agent_Id)}>Accept</button>
            <button className="btn btn-danger" onClick={() => handleDecline(agent.agent_Id)}>Decline</button>
          </div>
        </div>
      ))}
    </div>
  );
}
