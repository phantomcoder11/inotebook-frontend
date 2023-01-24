import React,{useState, useEffect} from 'react'

function Greeting() {
    const host = "http://localhost:5000";
    const [name, setName] = useState("User")
    const getname = async () => {
        // console.log("Fetching the user details");
        // API call
        const response = await fetch(`${host}/api/auth/getUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        });
        const json = await response.json();
        // return json.name;
        // console.log('Called');
        setName(json.name);
      };
      getname();

      const [time, setTime] = useState(new Date());
      const [greeting, setGreeting] = useState('');
    
      useEffect(() => {
        const tick = () => {
          setTime(new Date());
          setGreeting(getGreeting(time.getHours()));
          setTimeout(tick, 1000);
        }
        tick();
        return () => clearTimeout(tick);
      }, []);
    
      const getGreeting = (hour) => {
        if (hour < 12) {
          return 'Good morning ';
        } else if (hour < 18) {
          return 'Good afternoon ';
        } else {
          return 'Good evening ';
        }
      }
      
  return (
    <h3 className='mb-5'>{greeting} {name}!</h3>
  )
}

export default Greeting;