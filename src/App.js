
import './App.css';
import Header from './component/header';
const name ="reyyen"
const surname ="almasri"
const issignIn = false
function App(){
  return (
    //jsx yazarken kapsamli bir etikit kullamamiz lazim
    //asagdaki div gibi yada fragment yani <>.....</> bos bir etiket
    //class eklerken soyle ekleriz ork: <h1 className="">Hello reyyen</h1>, jsx ile js arasinda bir karisma olmVsin diye
    // ayni durumda for icin gecerli <label htmlFor="myinput"></label>
    <div>
      <h2>{name} {surname}</h2>
      <h1>Hello reyyen</h1>
      {/* component isimini yazrken yada fonuctionu yazrken buyuk harfla yazmzmiz lazim */}
      <Header />
      {issignIn ?` name is: ${name}  surname is: ${surname}`: "giris yapadiniz"}
      
    </div>
  )
}
export default App; 