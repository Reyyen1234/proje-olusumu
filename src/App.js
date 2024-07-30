
import './App.css';
import Header from './component/header';
import User from './component/user'
/* const name ="reyyen"
const surname ="almasri"
const issignIn = false */
import { useState } from 'react';


function App(){

  const [name,setName] = useState("reyyen");
  const [age,setAge] = useState(27)
  return (
    //jsx yazarken kapsamli bir etikit kullamamiz lazim
    //asagdaki div gibi yada fragment yani <>.....</> bos bir etiket
    //class eklerken soyle ekleriz ork: <h1 className="">Hello reyyen</h1>, jsx ile js arasinda bir karisma olmVsin diye
    // ayni durumda for icin gecerli <label htmlFor="myinput"></label>
    <div className='App'>
      
      <h2>merhaba {name}!</h2>
      <h2>yasim {age}</h2>

      <button onClick={()=> setName("mohamed")}>change name</button>
      <button onClick={()=> setAge("30")}>change age</button>
      
      
      
      
    </div>
  )
}
export default App; 
/* <h2>{name} {surname}</h2>
      <h1>Hello reyyen</h1>
      { component isimini yazrken yada fonuctionu yazrken buyuk harfla yazmzmiz lazim }
      <Header />
      {issignIn ?` name is: ${name}  surname is: ${surname}`: "giris yapadiniz"}
      <User name="reyyen"
            surname="almasri"
            age={27}
            isCoding={true} />
            <h2>friends</h2>
            bir array listelemek icin map and key kullniyoruz (keynin isi pek fazla anlamadim)
            {friends.map((friends,key)=> <div key={key}>friends</div>)}//divin arasinda dizilecek
            
            */
