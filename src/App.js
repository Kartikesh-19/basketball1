
import React, { useState } from 'react';
function App() {


  const [error, setError] = useState({})
  const [bug ] = useState({})

  const [get] = useState([]);
  const [put, setPut] = useState(
    {
      firstName: '',
      lastName: '',
      height: '',
      select: ''
    }
  )

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, 'fsdfgd');
    setPut({ ...put, [name]: value })
    console.log(put, 'sahdsahd');
    setError(Validate());



  }

  function Validate() {

    let error = {};
    // if (put.firstName === '') {
    //   error.firstName = "**Please Enter First Name"
    // }

    // if (put.lastName === '') {
    //   error.lastName = "**Please Enter Last Name"
    // }


    if (put.height === "") {
      error.height = "**Please Enter Your Height"
    }
    if (put.height === "" && (put.height < 160 || put.height > 250)) {
      error.height = "**Height Must be in Between  160 to 250 cms"
    }

    // if (put.select==='') {
      
    //   error.select = "**Enter Player Position"
    // }

    if (!isNaN(put.firstName)) {
      error.firstName = '**Please enter characters only'
    }


    if (!isNaN(put.lastName)) {
      error.lastName = '**Please enter characters only'
    }
    return error;
  }



  const [data, setData] = useState(
    {
      name: '',
      position: ''
    }
  );
  const handleData = (e) => {
    e.preventDefault();
    const { name, value } = e.target

    setData({ ...data, [name]: value })
    console.log(data, 'fdsgd');
    if (data.name === data.name1) {
      bug.name1 = '**User already exist'
    }
    if (data.name1 === data.name2) {
      bug.name2 = '**User already exist'
    }
    if (data.name2 === data.name3) {
      bug.name3 = '**User already exist'
    }
    if (data.name3 === data.name4) {
      bug.name4 = '**User already exist'
    }
    if (data.position === data.position1) {
      bug.select1 = '**this position is already selected'
    }
    if (data.position1 === data.position2) {
      bug.select2 = '**this position is already selected'
    }
    if (data.position2 === data.position3) {
      bug.select3 = '**this position is already selected'
    }
    if (data.position3 === data.position4) {
      bug.select4 = '**this position is already selected'
    }
    return bug;
    
  }
  
  const handleTask = (e) => {
    e.preventDefault();
    get.push(put)
    setPut({ firstName: '', lastName: '', height: '', select: '' })
    console.log(get, 'hjfdgfd');
    let obj = JSON.stringify(get);
    localStorage.setItem('get', obj);
    var storage = JSON.parse(localStorage.getItem('obj'))
    console.log(storage);

  }


  //--Validation for position---

  const [push] = useState([])
  const handleAr = (e) => {
    e.preventDefault();
    push.push(data)
    debugger;
  

  }
  console.log(push);

 



  return (
    <div>
      <form >
        <h2 className="text-primary text-center">ComposeTeam</h2>
        <input type='text' placeholder='First Name' className='form-control col-sm-8' onChange={handleChange} name='firstName' value={put.firstName} id="fname" /><br />
        {error.firstName && <span className='text-danger'>{error.firstName}</span>}
        <input type='text' placeholder='Last Name' className='form-control  col-sm-8' onChange={handleChange} name='lastName' value={put.lastName} id="lname" /><br />
        {error.lastName && <span className='text-danger'>{error.lastName}</span>}
        <input type='number' placeholder='Height' className='form-control  col-sm-8' onChange={handleChange} name='height' value={put.height} min='1' max='100' id="height" /><br />
        {error.height && <span className='text-danger'>{error.height}</span>}
        <select onChange={handleChange} value={put.select} name='select' className='form-control col-sm-8' id="position">
          <option hidden>--Select--</option>
          <option >Point Guard(PG)</option>
          <option>Shooting Guard(SG)</option>
          <option>Small Forward(SF)</option>
          <option>Power Forward(PF)</option>
          <option>Center(C)</option>
        </select>
        {error.select && <span className='text-danger'>{error.select}</span>}
        {error.submit && <span className='submit'>{error.submit}</span>}<br></br>
        <button type='submit' className='btn btn-primary' onClick={handleTask} >Save</button>
      </form>
      <div>
        <div >
          <form id='dform'>
            <h2 className="text-success  text-center">First Quarter</h2>
            <div>
              <select className='form-control col-sm-4 ' onChange={handleData} name='name'  >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              {bug.name && <span className='text-danger'>{bug.name}</span>}

              <select className='form-control  col-sm-4' onChange={handleData} name='position'>
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option >{p.select}</option>
                      </>
                    )
                  })
                }
              </select>
              {bug.select && <span className='text-danger'>{bug.select}</span>}
              <select className='form-control col-sm-4 ' onChange={handleData} name='name1' >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              {bug.name2 && <span className='text-danger'>{bug.name2}</span>}
              <select className='form-control  col-sm-4' onChange={handleData} name='position1'  >
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              {bug.select1 && <span id="err4" className='text-danger'>{bug.select1}</span>}
              <select className='form-control col-sm-4 ' onChange={handleData} name='name2'  >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              {bug.name2 && <span id="err5" className='text-danger'>{bug.name2}</span>}
              <select className='form-control  col-sm-4' onChange={handleData} name='position2'  >
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              {bug.select2 && <span id="err6" className='text-danger'>{bug.select2}</span>}
              <select className='form-control col-sm-4 ' onChange={handleData} name='name3'  >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              {bug.name3 && <span id="err7" className='text-danger'>{bug.name3}</span>}
              <select className='form-control  col-sm-4' onChange={handleData} name='position3' >
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              {bug.select3 && <span id="err8" className='text-danger'>{bug.select3}</span>}
              <select className='form-control col-sm-4 ' onChange={handleData} name='name4'  >
                <option>--Select Player--</option>
                {
                  get && get.map(p => {
                    return (
                      <>
                        <option disabled={() => { }}>{p.firstName}{p.lastName}</option>
                      </>
                    )
                  })
                }
              </select>
              {bug.name4 && <span id="err9" className='text-danger'>{bug.name4}</span>}
              <select className='form-control  col-sm-4' onChange={handleData} name='position4' >
                <option>--Select Position--</option>
                {
                  get && get.map(p => {
                    return (
                      <option >{p.select}</option>
                    )
                  })
                }
              </select>
              {bug.select4 && <span id="err10" className='text-danger'>{bug.select4}</span>}
            </div>

            <button onClick={handleAr} >Final Data</button>

          </form>
        </div>

      </div>
    </div>
  );
}
export default App;