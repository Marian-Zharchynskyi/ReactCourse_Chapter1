import { useState } from 'react';
import SearchInput from './SearchInput';
import Loading from './Loading';
import useLoading from '../hooks/useLoading';
import AdressBookTable from './AdressBookTable';
import AddNewAdress from './AddNewAdress';

const AdressBookContainer = () => {
  const { isLoading } = useLoading();
  
  const [adresses, setAdresses] = useState([]);
  const [newAdress, setNewAdress] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [filterValue, setFilter] = useState('');

  const handleNewModelChange = (event) => {
    const { name, value } = event.target;
    setNewAdress({ ...newAdress, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newAdress.firstName.trim()) newErrors.firstName = true;
    if (!newAdress.lastName.trim()) newErrors.lastName = true;
    if (!newAdress.phone.trim()) newErrors.phone = true;
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setAdresses([...adresses, { ...newAdress, id: Date.now() }]);
    setNewAdress({ firstName: '', lastName: '', phone: '' });
    setErrors({});
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleEdit = (id, newFirstName, newLastName, newPhone) => {
    const updatedAdresses = adresses.map((adress) =>
      adress.id === id ? { ...adress, firstName: newFirstName, lastName: newLastName, phone: newPhone } : adress
    );
    setAdresses(updatedAdresses);
  };

  const filteredAdresses = adresses.filter((adress) =>
    adress.firstName.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Loading isLoading={isLoading}>
      <>
        <AddNewAdress
          firstName={newAdress.firstName}
          lastName={newAdress.lastName}
          phone={newAdress.phone}
          onModelChange={handleNewModelChange}
          onSubmit={handleSubmit}
          errors={errors}
        />

        <SearchInput filter={filterValue} onFilterChange={handleFilterChange} />

        <AdressBookTable
          adresses={filteredAdresses}
          onEdit={handleEdit}
        />
      </>
    </Loading>
  );
};

export default AdressBookContainer;
