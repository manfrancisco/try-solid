import { createResource } from "solid-js";
import Card from "../components/Card";

export default function Home() {
  const [products] = createResource(() =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  );

  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      <Card rounded={true} flat={false}>
        <h2>Ninja Tee, Black</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          delectus eius laborum officiis cupiditate neque.
        </p>
        <button class="btn">Click Me!</button>
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

      <p>{console.log(products(), products.loading)}</p>
    </div>
  );
}
