import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Car, CarCreate, testExport } from '../types/car';
import { Link } from 'react-router-dom';

const CarListPage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [newCar, setNewCar] = useState<CarCreate>({
    make: '',
    model: '',
    year: 2023,
    vin: '',
    license_plate: '',
    color: '',
    owner: '',
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get<Car[]>('http://localhost:8000/cars/');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: name === 'year' ? parseInt(value) : value,
    }));
  };

  const handleCreateCar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post<Car>('http://localhost:8000/cars/', newCar);
      setNewCar({
        make: '',
        model: '',
        year: 2023,
        vin: '',
        license_plate: '',
        color: '',
        owner: '',
      });
      fetchCars(); // Refresh the list
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  return (
    <div>
      <h2>My Garage</h2>

      <h3>Add New Car</h3>
      <form onSubmit={handleCreateCar}>
        <input type="text" name="make" placeholder="Make" value={newCar.make} onChange={handleInputChange} required />
        <input type="text" name="model" placeholder="Model" value={newCar.model} onChange={handleInputChange} required />
        <input type="number" name="year" placeholder="Year" value={newCar.year} onChange={handleInputChange} required />
        <input type="text" name="vin" placeholder="VIN" value={newCar.vin} onChange={handleInputChange} required />
        <input type="text" name="license_plate" placeholder="License Plate" value={newCar.license_plate} onChange={handleInputChange} required />
        <input type="text" name="color" placeholder="Color" value={newCar.color} onChange={handleInputChange} required />
        <input type="text" name="owner" placeholder="Owner" value={newCar.owner} onChange={handleInputChange} required />
        <button type="submit">Add Car</button>
      </form>

      <h3>Your Cars</h3>
      {cars.length === 0 ? (
        <p>No cars added yet. Add one above!</p>
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <Link to={`/cars/${car.id}`}>
                {car.year} {car.make} {car.model} ({car.license_plate})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarListPage;