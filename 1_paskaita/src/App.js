// folderiu pavadinimai rasomi mazaja raide
// komponentu pavadinimai didziaja
// importai virsuje

import "./App.css";
// import Avatar from "./components/Avatar";

// import FuncButton from "./components/FuncButton";
// import FuncDiv from "./components/FuncDiv";
// import ClassButton from "./components/ClassButton";
// import ClassDiv from "./components/ClassDiv";
// import Greeting from "./components/Greeting";
// import Card from "./components/Card";
import Product from "../../4_paskaita/src/components/Product";
// import Products from "./components/Products";
// import Welcome from "./components/Welcome";

//apibreziam komponento pavadinima, visada didzioji raide.
// geroji  praktika:failo  pavadinimas toks pat kaip  komponento  pavadinimas

function App() {
  // const name = "Raimonda";
  return (
    <div>
      <Product
    image="https://th.bing.com/th/id/OIP.y5Y20F2sk323gRMzBNMYdwHaHa?pid=ImgDet&rs=1"
      title="Volkswagen GOLF MK2 2022 Calendar"
      price="10.00Eur"
      description=12 unique designs
          All pieces are printed on heavyweight 200 gsm art paper.
          <br/>
          Limited to 50 pieces
          <br/>
          One size:
          11.7x16.5 inch/(297x420mm)"
       availability="10 in stock"
      <Button onClick={increment}>+</Button>
      <h2>{count}</h2>
      <Button onClick={decrement}>-</Button>
      <p> {category}</p>
      <Button title="ADD TO CART"/>
      />;
      </div>
      {/* <Avatar name="Raimonda Stonkutė" />
      <Avatar name="Robertas Jasas" />
      <Avatar name="Dalytė Stonkienė" /> */}
      {/* <Welcome isLoggedIn /> */}
      {/* <div> */}
      {/* <h1>Raimonda</h1>
        <h2>{name}</h2>
        <h2>{getName()}</h2>
        <h2>{getSurname()}</h2>
        <h2>{surname}</h2> */}
      {/* </div> */}
      <div>
        {/* <FuncButton title="Click me" />
        <FuncButton title="Spausk mane" />
        <FuncButton title="Nespausk cia" /> */}
        {/* <FuncDiv /> */}
        {/* <ClassButton name="Class mygtukas2" />
        <ClassDiv /> */}
      </div>
      {/* <div>
        <Greeting />
        <Greeting name="Raimonda" />
      </div> */}
      <div>
        {/* <Card
          imageUrl="http://fotokudra.lt/files/I311711.jpg"
          title="Lizard"
          subtitle="Lizards are a widespread group of squamate reptiles, with over 7,000 species,[1] ranging across all continents except Antarctica, as well as most oceanic island chains"
        />
        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Apodemus_sylvaticus_bosmuis.jpg/260px-Apodemus_sylvaticus_bosmuis.jpg"
          title="Pelė"
          subtitle="Pelės (Murinae) – tai Senojo Pasaulio pelių ir žiurkių pošeimis, turintis bent 519 rūšių. Šis pošeimis didesnis už visas kitas žinduolių šeimas, išskyrus žiurkėninius, ir visus būrius, išskyrus šikšnosparnius ir likusius graužikus."
        /> */}
      </div>
      <div>{/* <Products /> */}</div>
    </div>
  );
}
// function getName() {s
//   return "Robertas";
// }
// const getSurname = () => {
//   return "Robertukas";
// };
// const surname = getSurname();

// eksportuojam, kad galetume importuoti kitame faile
export default App;
