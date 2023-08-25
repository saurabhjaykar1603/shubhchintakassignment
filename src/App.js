import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [data, setData] = useState([]);



  const loadTask = async () => {
    const { data } = await axios.get("https://64e8643899cf45b15fdf7bdd.mockapi.io/users")
    setData(data)
  }

  useEffect(() => {
    loadTask();

  }, [])


  return (
    <div className="container">
      {
        (data).map((user, index) => {
          const { id, name, avatar, createdAt } = user;

          return (
            <div className='d-flex justify-content-center '>
              <div className="card custom-card w-75  mt-5 shadow" key={id} >
                <div className="row">
                  <div className="col col-md-6">
                    <img src={avatar} class="custom-img-class h-50 mt-3 ms-5" alt="..." />

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
        })
      }
    </div>
  );
}

export default App;
