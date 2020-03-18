import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['Andi', 'Sepak Bola', 'Bandung', 'Sekolah FE'],
      alamat: 'Bandung Barat',
      kota: props.lokasi
    };
  }

  ubahStateFn() {
    this.setState({
      alamat: 'Dago'
    });
  }

  render() {
    return (
      <>
        <div>{this.props.lokasi}</div>
        <div>===================</div>
        <button onClick={this.ubahStateFn.bind(this)}>Ubah Kota</button>
      </>
    );
  }
}

export default Test;
