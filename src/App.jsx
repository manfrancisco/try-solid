import styles from "./App.module.css";
import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1>Ninja Merch</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />

      <div class="grid grid-cols-4 gap-10 my-4">
        <Card rounded={true} flat={false}>
          <h2>Ninja Tee, Black</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            delectus eius laborum officiis cupiditate neque.
          </p>
          <button class="butn">Click Me!</button>
        </Card>
        <Card rounded={false} flat={true}>
          <h2>Ninja Tee, White</h2>
          <button class="btn">Click Me!</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            delectus eius laborum officiis cupiditate neque.
          </p>
          <p>Only $10</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
