import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Home
        image="https://croatiafinestholidays.com/uploads/villas/176/Villa%20Lucy%20(10).jpg"
        title="VILA LUCY PLUM"
        price={750}
        description={
          <span>
            <div>12 unique designs</div>
            <div>All pieces are printed on heavyweight 200 gsm art paper.</div>
            <div>Limited to 50 pieces</div>
            <div>
              <div>One size:</div>
              11.7x16.5 inch/ (297x420 mm)
            </div>
          </span>
        }
        availability={3}
      />
    </div>
  );
};

export default App;
