import Countdown from "react-countdown";
const date = new Date(2022, 8, 3, 11).getTime();
export default function FooBarBaz() {
  return (
    <main className="content-container">
      <h1 className={"text-gray-100 text-3xl text-center md:text-5xl mb-4"}>
        {" "}
        <Countdown date={date} /> days to go
      </h1>
    </main>
  );
}
