import React from 'react';

export default function RegistrationList(props) {
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
          {props.civilian &&
            props.civilian.map((c, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{c.nama}</td>
                  <td>{c.address}</td>
                  <td>{c.ktp}</td>
                  <td>{c.lifetime === true ? 'Berlaku seumur hidup' : c.expiry}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
