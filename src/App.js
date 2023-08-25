import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const loadTask = async () => {
    const { data } = await axios.get("https://64e8643899cf45b15fdf7bdd.mockapi.io/users")
    setData(data)
  }

  useEffect(() => {
    loadTask();
  }, [])

  const filteredData = data.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      {filteredData.map((user, index) => {
        const { id, name, avatar, createdAt } = user;

        return (
          <div className='d-flex justify-content-center ' key={id}>
            <div className="card custom-card w-75  mt-5 shadow">
              <div className="row">
                <div className="col col-md-6">
                  <img src={avatar} className="custom-img-class h-50 mt-3 ms-5" alt="..." />
                </div>
                <div className="col col-md-6">
                  <h5 className="car fw-bold">{name}</h5>
                  <p className="card-text fw-bold ">{id}</p>
                  <p className="card-text ">{createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;