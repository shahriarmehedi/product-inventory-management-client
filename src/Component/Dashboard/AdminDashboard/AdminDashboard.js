import React from 'react';
import './AdminDashboard.css'

const AdminDashboard = (props) => {
  const {productName,productCategory,productPrice,productQuantity,productImageURL} = props.products;
  return (
    <div>
      <h1 style={{ fontWeight: 'bold' }}>Show All The Products!!</h1>
      <table>
        <thead>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Product Image</th>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>{productCategory}</td>
            <td>{productPrice}</td>
            <td>{productQuantity}</td>
            <td>{productImageURL}</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;