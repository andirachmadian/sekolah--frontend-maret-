import React from 'react';
import RegistrationPage from './registrationPage';

export default function RegistrationList({ civilian }) {
  return (
    <div>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>KTP</th>
            <th>Masa Berlaku</th>
          </tr>
        </thead>
        <tbody>
          {civilian &&
            civilian.map((val, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{val.nama}</td>
                <td>{val.address}</td>
                <td>{val.ktp}</td>
                <td>{val.expired}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
