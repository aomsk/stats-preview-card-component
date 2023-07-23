import "./styles/App.css";

function App() {
  return (
    <div className="flex lg:justify-center lg:items-center xl:justify-center xl:items-center w-screen h-screen bg-veryDarkBlue">
      <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 w-[900px] h-auto lg:h-screen xl:h-[350px] bg-darkDesaturatedBlue m-5">
        <div className="p-12 order-2 xl:order-1">
          <h1 className="text-3xl text-white font-bold mb-[2rem] font-sans text-center xl:text-left">
            Get <span className="text-softViolet">insights</span> that help your business grow.
          </h1>
          <p className="text-slightlyTransparentWhiteMain text-[15px] mb-[3rem] text-center xl:text-left font-sans">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
            and overall efficiency.
          </p>
          <div className="flex flex-col xl:flex-row xl:justify-around items-center justify-center text-center">
            <div className="m-5 xl:m-0">
              <h1 className="text-white font-bold text-xl font-san">10k+</h1>
              <p className="text-slightlyTransparentWhiteMain uppercase text-[13px] font-sans">companies</p>
            </div>
            <div className="mb-5 xl:m-0">
              <h1 className="text-white font-bold text-xl font-san">314</h1>
              <p className="text-slightlyTransparentWhiteMain uppercase text-[13px] font-sans">templates</p>
            </div>
            <div className="mb-5 xl:m-0">
              <h1 className="text-white font-bold text-xl font-san">12m+</h1>
              <p className="text-slightlyTransparentWhiteMain uppercase text-[13px] font-sans">queries</p>
            </div>
          </div>
        </div>
        <div className="bg-image order-1 xl:order-2"></div>
      </div>
    </div>
  );
}

export default App;
