import React, { useState } from 'react';
import RegistrationList from './registrationList';
const contohData = {
  name: '',
  address: '',
  ktp: '',
  expiry: '',
  lifetime: false
};
export default function RegistrationPage() {
  const [civilian, setCivilian] = useState([]);
  const [registration, setRegistration] = useState({
    name: '',
    address: '',
    ktp: '',
    expiry: '',
    lifetime: false
  });
  const onChangeData = (e, stateName) => {
    if (stateName === 'lifetime') {
      registration['expiry'] = '';
      registration[stateName] = !registration[stateName];
    } else {
      registration[stateName] = e.target.value;
    }
    setRegistration(Object.assign({}, registration));
  };
  const onSubmitCivilian = () => {
    if (registration.name.length === 0) {
      return alert('nama wajib di isi');
    }
    let newRegistration = Object.assign({}, registration);
    setCivilian((civilian) => [...civilian, newRegistration]);
    setRegistration({
      name: '',
      address: '',
      ktp: '',
      expiry: '',
      lifetime: false
    });
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
              <input className='form-control' type='text' placeholder='Nama' value={registration.name} onChange={(e) => onChangeData(e, 'name')} />
            </div>
            <div className='form-group'>
              <label className='control-label'>Alamat Lengkap</label>
              <textarea value={registration.address} type='text' className='form-control' placeholder='Alamat' onChange={(e) => onChangeData(e, 'address')} />
            </div>
            <div className='form-group'>
              <label className='control-label'>No KTP</label>
              <input className='form-control' type='text' placeholder='No. KTP' value={registration.ktp} onChange={(e) => onChangeData(e, 'ktp')} />
            </div>
            <div className='form-group'>
              <label className='control-label'>Masa Berlaku KTP</label>
              {registration.lifetime === true ? <br /> : <input className='form-control' type='date' placeholder='Masa berlaku KTP' value={registration.expiry} onChange={(e) => onChangeData(e, 'expiry')} />}
              <input type='checkbox' checked={registration.lifetime} onChange={(e) => onChangeData(e, 'lifetime')} /> Berlaku seumur hidup
            </div>
            <div className='form-group'>
              <button onClick={() => onSubmitCivilian()} className='btn btn-primary'>
                Daftar
              </button>
            </div>
            <br />
          </div>
          <br />
          <br />
          <RegistrationList civilian={civilian} />
        </div>
      </div>
    </div>
  );
}
