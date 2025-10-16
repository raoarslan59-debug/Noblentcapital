import React from 'react';
import './styles/main.css';
import { firebaseConfig } from './firebaseConfig';

export default function App() {
  return (
    <div>
      <header style={{background:'#111',padding:'20px 0',textAlign:'center',borderBottom:'1px solid #333'}}>
        <img src='./public/assets/logo.svg' alt='Noblent Capital Logo' style={{width:'60px'}}/>
        <h1>NOBLENT CAPITAL</h1>
        <p>by Noble Asset Management</p>
      </header>

      <section>
        <h2>We track the market so you don’t have to.</h2>
        <p>Our data-driven process lets you focus on outcomes — not noise or intraday volatility.</p>
        <button>Request Investor Access</button>
      </section>

      <section>
        <h2>Why Partner with Noblent Capital</h2>
        <p>Built for serious investors seeking a disciplined, data-driven edge in digital assets.</p>
        <ul>
          <li>Expert Analysis</li>
          <li>Risk Management</li>
          <li>Growth Focused</li>
        </ul>
      </section>

      <section>
        <h2>Investor Portal</h2>
        <p>Each investor receives private access to their portfolio dashboard, powered by Firebase & Google Drive.</p>
      </section>

      <footer style={{textAlign:'center',padding:'20px',borderTop:'1px solid #333',color:'#aaa'}}>
        © {new Date().getFullYear()} Noblent Capital. All rights reserved.
      </footer>
    </div>
  );
}