// import Portfolio from "./components/Portfolio/Portfolio";
// import Home from "./components/Home/Home";
// import CardList from "./components/Portfolio/Cards";
import Products from "./components/Product/Product";

const App = () => {
  return (
    //product uzduotis su map delete ir fetch
    <div>
      <Products />
    </div>

    //portfolio uzduotis
    // <div>
    //   <Portfolio
    //     title="Title"
    //     text="In my portfolio, I showcase my best landscape photographs of mountain
    // photography, selected and organized by the countries in which they were
    // taken, including Iceland, Argentina, Switzerland, Norway, and Italy.  "
    //     heading="Portfolio"
    //     description="Welcome to my website, where I showcase Mountain Photography from around
    //   the world. My collection features images of mountains in Patagonia,
    //   capturing the breathtaking Patagonia landscape, and highlighting the
    //   majestic Torres del Paine National Park photos."
    //   />
    // </div>

    //namu darbas susikuriant savo cards example
    // <div>
    //   <Home
    //     image="https://croatiafinestholidays.com/uploads/villas/176/Villa%20Lucy%20(10).jpg"
    //     title="VILLA LUCY PLUM"
    //     price={750}
    //     description={
    //       <div>
    //         Set in Marina, 600 metres from Pralisce Beach and 1.5 km from
    //         Tunjara Beach, Trogir, by Split, Luxury Villas-Lucy Lemon, outdoor
    //         pool-Lucy Cherry, indoor pool and Lucy Plum, outdoor pool offers
    //         accommodation with free WiFi, a garden with an outdoor swimming
    //         pool, garden views, and access to a fitness room and a sauna.
    //         <br />
    //         Offering sea or pool views, each unit comes with a kitchen, a
    //         satellite flat-screen TV and game console, desk, a washing machine
    //         and a private bathroom with shower and a hairdryer.
    //         <p>
    //           Poljica Beach is 1.6 km from Trogir, by Split, Luxury Villas-Lucy
    //           Lemon, outdoor pool-Lucy Cherry, indoor pool and Lucy Plum,
    //           outdoor pool, while Salona Archeological Park is 35 km away. The
    //           nearest airport is Split Airport, 17 km from the accommodation.
    //         </p>
    //       </div>
    //     }
    //     availability={3}
    //   />
    // </div>
  );
};

export default App;
