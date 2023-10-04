import React, { useState , setState, useEffect} from 'react'

const Welcome = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(true);
 

  const submit = (e) => {
    e.preventDefault();
    console.log('form subimtted')  
  }

  function test(data) {
    if(data) {
      return <h1>hello</h1>
    } else {
      return <h1>is false</h1>
    }
  }
 
  return (
    
    <form onSubmit={($e)=>{
      submit($e)
    }}>
      gnder { gender}
      <input type="text" placeholder="Enter your name" onChange={($e)=>setName($e.target.value)} />
      <br/>
      <input type="password" placeholder="Enter your password" onChange={($e)=>setPassword($e.target.value)}/>
      <br/>
      <label htmlFor="male">Male</label>
      <input type="radio" id="male" name="gender" value={true} onChange={($e)=> setGender( $e.target.value)} />
      <br />
      <label htmlFor="female">Female</label>
      <input type="radio" id="female"  required name="gender" onChange={($e)=> setGender($e.target.value)} value={false} />
      <br />
      <button type="submit">Submit</button>

      {test(false)}
    </form>
  )
}

export default Welcome
