import React, { useState } from 'react';
import RegistrationList from './registrationList';

const contohData = {
  nama: '',
  addres: '',
  ktp: '',
  expired: '',
  lifetime: false
};

export default function RegistrationPage() {
  const [angka, setAngka] = useState(0);
  const incremental = () => {
    setAngka(angka + 1);
  };

  const [lifetime, setLifetime] = useState(false);
  const toggleLifeTime = () => {
    setLifetime(!lifetime);
  };

  const [name, setName] = useState('');
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const [address, setAddress] = useState('');
  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const [idKTP, setKTP] = useState('');
  const onChangeKTP = (event) => {
    setKTP(event.target.value);
  };

  const [expiry, setExpiry] = useState('');
  const onChangeExpiry = (event) => {
    setExpiry(event.target.value);
  };

  const [civilian, setCivilian] = useState([]);
  const onSubmitCivilian = () => {
    if (name.length === 0) {
      return alert('Nama Wajib di isi!!!');
    }

    const newCivilian = {
      nama: name,
      address: address,
      ktp: idKTP,
      expired: expiry,
      lifetime: lifetime
    };
    // console.log(newCivilian);
    setCivilian([...civilian, newCivilian]);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 offset-2'>
          <h2>Pendaftaran Warga Baru</h2>
          <br />
          <br />
          <div className='form'>
            <div className='form-group'>
              <label className='control-label'>Nama Lengkap</label>
              <input className='form-control' type='text' placeholder='Nama' value={name} onChange={(e) => onChangeName(e)} />
            </div>
            <div className='form-group'>
              <label className='control-label'>Alamat Lengkap</label>
              <textarea type='text' className='form-control' placeholder='Alamat' value={address} onChange={(e) => onChangeAddress(e)} />
            </div>
            <div className='form-group'>
              <label className='control-label'>No KTP</label>
              <input className='form-control' type='text' placeholder='No. KTP' value={idKTP} onChange={(e) => onChangeKTP(e)} />
            </div>
            <div className='form-group'>
              <label className='control-label'>Masa Berlaku KTP</label>
              {/* <input className='form-control' type='date' placeholder='Masa berlaku KTP' /> */}
              {lifetime === true ? <br /> : <input className='form-control' type='date' placeholder='Masa Berlaku KTP' value={expiry} onChange={(e) => onChangeExpiry(e)} />}
              <input type='checkbox' checked={lifetime} onClick={() => toggleLifeTime()} /> Berlaku seumur hidup
            </div>
            ​
            <div className='form-group'>
              <button className='btn btn-primary' onClick={() => onSubmitCivilian()}>
                Daftar
              </button>
            </div>
          </div>
          ​
          <br />
          <br />
          <RegistrationList civilian={civilian} />
        </div>
      </div>
    </div>
  );
}
