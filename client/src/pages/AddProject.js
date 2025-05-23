import React, { useState } from 'react';
import '../styles/AddProject.css';

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    githubLink: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert techStack string to array
    const payload = {
      ...formData,
      techStack: formData.techStack.split(',').map(tech => tech.trim())
    };

    try {
      const res = await fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert('✅ Project added successfully!');
        setFormData({
          title: '',
          description: '',
          techStack: '',
          githubLink: '',
        });
      } else {
        alert('❌ Failed to add project.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error submitting the form.');
    }
  };

  return (
    <div style={{ padding: '60px 30px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Add New Project</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="title" type="text" placeholder="Project Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Project Description" rows="4" value={formData.description} onChange={handleChange} required />
        <input name="techStack" type="text" placeholder="Tech Stack (comma separated)" value={formData.techStack} onChange={handleChange} />
        <input name="githubLink" type="url" placeholder="GitHub Link" value={formData.githubLink} onChange={handleChange} />
                <button type="submit" style={{ padding: '12px', background: '#007BFF', color: 'white', borderRadius: '8px', fontWeight: 'bold' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProject;
