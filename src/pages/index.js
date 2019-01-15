import React from 'react';

const HomePage = () => {
  return (
    <section>
      <style jsx>{`
        h1 {
          color: green;
        }
      `}</style>
      <h1>Home</h1>
      <img width="120" alt="greecejs" src="/static/greecejs_logo.png" />
    </section>
  );
};

export default HomePage;
