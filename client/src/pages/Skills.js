import React from 'react';
import '../styles/Skills.css';
const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS'];

  return (
    <div style={{ padding: '60px 30px', maxWidth: '1000px', margin: 'auto' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>My Tech Stack</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
        {skills.map(skill => (
          <li key={skill} style={{
            padding: '12px 24px',
            border: '2px solid #007BFF',
            borderRadius: '20px',
            fontWeight: 'bold',
            backgroundColor: '#f0f8ff'
          }}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
