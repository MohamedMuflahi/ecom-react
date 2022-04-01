import React,{useState,useEffect} from 'react'
import './Hero.css';
import TypeWriterEffect from 'react-typewriter-effect';
function Hero() {
  const [username, setUsername] = useState('Guest')
  useEffect(() => {
    let username = JSON.parse(localStorage.getItem('user')).first_name
    if(JSON.parse(localStorage.getItem('user')).name === null){
      console.log('logged out')
    }else{
      console.log('logged in')
      setUsername(username)
    }
  }, [])
  
  return (
    <div className='container'>
        <TypeWriterEffect
        textStyle={{
          color: 'black',
          fontWeight: 500,
          fontSize: '10em',
          textAlign: 'center',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        typeSpeed={100}
        multiText={[
          `Hey, ${username}`
        ]}
        multiTextDelay={1000}
      />
    </div>
  )
}

export default Hero