import React, { useState } from 'react';

const topics = [
  { id: 1, title: 'What is Blockchain?' },
  { id: 2, title: 'What is Mining?' },
  { id: 3, title: 'What is Staking?' },
  { id: 4, title: 'What is an NFT?' },
  { id: 5, title: 'What is a DAO?' }
];

export default function LearningDashboard({ walletAddress }) {
  const [learned, setLearned] = useState([]);

  const markAsLearned = (id) => {
    if (!learned.includes(id)) {
      setLearned([...learned, id]);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>📘 Learning Dashboard</h2>

      {walletAddress ? (
        <>
          <p>Welcome, {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}!</p>

          <ul>
            {topics.map((topic) => (
              <li key={topic.id} style={{ marginBottom: '1rem' }}>
                <strong>{topic.title}</strong>
                <br />
                {learned.includes(topic.id) ? (
                  <span>✅ Learned</span>
                ) : (
                  <button onClick={() => markAsLearned(topic.id)}>
                    I’ve learned this
                  </button>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Please connect your wallet to start learning.</p>
      )}
    </div>
  );
}
