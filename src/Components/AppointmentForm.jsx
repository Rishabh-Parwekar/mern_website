import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [editingAppointmentId, setEditingAppointmentId] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const addAppointment = async (e) => {
    e.preventDefault();

    try {
      if (!editingAppointmentId) {
        await axios.post('http://localhost:5000/appointments', { name, date, age, city });
      } else {
        
        await axios.put(`http://localhost:5000/appointments/${editingAppointmentId}`, { name, date, age, city });
        setEditingAppointmentId(null);
      }
      fetchAppointments();
      setName('');
      setDate('');
      setAge('');
      setCity('');
    } catch (error) {
      console.error('Error adding/updating appointments:', error);
    }
  };

  return (
    <div>
      <div className="container border rounded my-5">
      <form onSubmit={addAppointment} className='my-5 mx-2 d-flex justify-content-center flex-column'>
      
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label htmlFor="formGroupExampleInput2" className="form-label">Date</label>
      <input type="date" className="form-control" id="formGroupExampleInput2"  placeholder="Another input placeholder" value={date} onChange={(e) => setDate(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label htmlFor="formGroupExampleInput3" className="form-label">Age</label>
      <input type="number" className="form-control" id="formGroupExampleInput3" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>

    <div className="mb-3">
      <label htmlFor="formGroupExampleInput4" className="form-label">City</label>
      <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter Your City"value={city} onChange={(e) => setCity(e.target.value)} />
    </div>
    
    <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default AppointmentForm;
