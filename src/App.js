function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-[350px] h-[596px] mx-auto align-center bg-cardBG p-6 rounded-2xl">
        <picture className="relative group mb-6">
          <img
            className="rounded-lg"
            src="./images/image-equilibrium.jpg"
            alt="main"
          />
          <span className="absolute top-0 rounded-lg hidden group-hover:block bg-cyan opacity-50 cursor-pointer w-full h-full" />
          <img
            className="absolute w-auto top-[45%] left-[45%] hidden group-hover:block "
            src="./images/icon-view.svg"
            alt="view"
          />
        </picture>
        <h1 className="font-bold text-base text-white mb-4 hover:text-cyan cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-softBlue mb-6">
          Our equilibrium collection promotes balance and claim
        </p>
        <div className="flex justify-between border-b border-line pb-6 mb-4">
          <div className="flex gap-2 items-center ">
            <img
              className="w-2.6 h-4.2"
              src="./images/icon-ethereum.svg"
              alt="ethereum"
            />
            <p className="text-cyan text-price">0.041 ETH</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="w-4 h-4"
              src="./images/icon-clock.svg"
              alt="clock"
            />
            <p className="text-softBlue text-price">3 days left</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-8" src="./images/image-avatar.png" alt="owner" />
          <p className="text-white hover:text-cyan cursor-pointer">
            <span className="text-softBlue">Creation of</span> Jules Wyvern
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
