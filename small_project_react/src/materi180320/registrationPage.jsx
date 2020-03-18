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
    console.log(event.target.value);
    setName(event.target.value);
  };

  // const [address, setAddress] = useState('');
  // const onChangeAddress = (event) => {
  //   console.log(event.target.value);
  //   setAddress(event.target.value);
  // };

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
              {/* <textarea type='text' className='form-control' placeholder='Alamat' value={address} onChange={(e) => onChangeAddress()} /> */}
            </div>
            <div className='form-group'>
              <label className='control-label'>No KTP</label>
              <input className='form-control' type='text' placeholder='No. KTP' />
            </div>
            <div className='form-group'>
              <label className='control-label'>Masa Berlaku KTP</label>
              {/* <input className='form-control' type='date' placeholder='Masa berlaku KTP' /> */}
              {lifetime === true ? <br /> : <input className='form-control' type='date' placeholder='Masa Berlaku KTP' />}
              <input type='checkbox' checked={lifetime} onClick={() => toggleLifeTime()} /> Berlaku seumur hidup
            </div>
            ​
            <div className='form-group'>
              <button className='btn btn-primary' onClick={() => incremental()}>
                Daftar
              </button>
            </div>
          </div>
          ​
          <br />
          <br />
          <RegistrationList angka={angka} />
        </div>
      </div>
    </div>
  );
}
