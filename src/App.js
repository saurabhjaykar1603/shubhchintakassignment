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
    <>
      <nav className="navbar navbar-expand-lg shadow sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-400" href="/">Shubhchintak Technology </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-5 " type="search" placeholder="Search Users" aria-label="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
            </form>
          </div>
        </div>
      </nav>

      <div className="container">

        {filteredData.map((user, index) => {
          const { id, name, avatar, createdAt } = user;

          return (
            <>
              <div className='d-flex justify-content-center '>
                <div className="container w-75 card mt-3 shadow custom-card ">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="container ">
                        <img src={avatar} className=" custom-img-class d-flex mx-auto" alt="..." />

                      </div>

                    </div>

                    <div className="col col-md-6">
                      <div className="container p-1">
                        <div className=" d-flex gap-3 align-item-center text-center">
                          <p className="card-text fw-bold ">{id}</p>
                          <h5 className="car fw-bold">{name}</h5>
                        </div>
                        <p className="card-text ">{createdAt}</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </>

          )
        })}
      </div>
    </>
  );
}

export default App;