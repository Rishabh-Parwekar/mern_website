import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {

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
      console.error('Error fetching appointment:', error);
    }
  };

  const addAppointment = async (e) => {
    e.preventDefault();

    try {
      if (!editingAppointmentId) {
        
        await axios.get('http://localhost:5000/appointments', { name, date, age, city });
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
      console.error('Error adding/updating appointment:', error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/appointments/${id}`);
      fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleEditAppointment = (appointment) => {
    setEditingAppointmentId(appointment._id);
    setName(appointment.name);
    setDate(appointment.date);
    setAge(appointment.age);
    setCity(appointment.city);
  };
  return (
    <>

    <div className="container">
        <form onSubmit={addAppointment} className='my-5 mx-2 d-flex justify-content-center flex-column'>
          <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Full name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="date" class="form-control"  placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
          <input type="number" class="form-control" aria-label="Age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <input type="text" class="form-control" aria-label="City" placeholder="City"value={city} onChange={(e) => setCity(e.target.value)}/>
        <button className="btn btn-primary" type="submit">Update</button>
        </div>
          </form>



     <div className='table-responsive small max-width'>

        <table className="table  table-sm table-bordered rounded">
              <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th> 
              <th scope="col">Date</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">Edit</th>
              <th scope="col">Cancle</th>
            </tr>
          </thead>
          <tbody>
          {appointments.map((appointment) => (
            <tr>
              <th scope="row"><li key={appointment._id} ></li></th>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.age}</td>
              <td>{appointment.city}</td>
              <td><button style={{width:'40'}} type="button" class="btn btn-sm btn-primary " onClick={() => handleEditAppointment(appointment)} >Edit</button></td>
              <td><button style={{width:'40'}} type="button" class="btn btn-sm btn-primary " onClick={() => deleteAppointment(appointment._id)} >Cancle</button></td>
            </tr>
             ))}
            </tbody>
            </table>
     </div>
    </div>

    </>
  );
};
export default AppointmentList;