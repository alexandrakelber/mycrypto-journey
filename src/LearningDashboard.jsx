import React, { useState } from 'react';

const topics = [
    {
      id: 1,
      title: 'What is Blockchain?',
      description: 'A blockchain is a decentralized digital ledger that stores data securely across a network of computers.',
      link: 'https://ethereum.org/en/developers/docs/intro-to-ethereum/#blockchain'
    },
    {
      id: 2,
      title: 'What is Mining?',
      description: 'Mining is the process of verifying blockchain transactions and adding them to the public ledger, often rewarded with coins.',
      link: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/'
    },
    {
      id: 3,
      title: 'What is Staking?',
      description: 'Staking is locking up cryptocurrency to help secure a blockchain network, and in return you earn rewards.',
      link: 'https://ethereum.org/en/staking/'
    },
    {
      id: 4,
      title: 'What is an NFT?',
      description: 'An NFT is a unique digital item stored on a blockchain, often used for art, collectibles, or proof of ownership.',
      link: 'https://ethereum.org/en/nft/'
    },
    {
      id: 5,
      title: 'What is a DAO?',
      description: 'A DAO is a decentralized organization where decisions are made by token holders voting on proposals.',
      link: 'https://ethereum.org/en/dao/'
    }
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
                <p>{topic.description}</p>
                <a href={topic.link} target="_blank" rel="noreferrer">Read more</a>
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
