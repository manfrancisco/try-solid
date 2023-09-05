import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

export default function Product() {
  const params = useParams();

  const [product] = createResource(() =>
    fetch(`http://fakestoreapi.com/products/${params.id}`).then((res) =>
      res.json()
    )
  );

  const { items, setItems } = useCartContext();

  function addToCart() {
    const exists = items.find((p) => p.id === product().id);
    if (exists) {
      // Increment quantity
      setItems(
        (p) => p.id === product().id,
        "quantity",
        (q) => q + 1
      );
    } else {
      // Add the new product
      setItems([...items, {...product(), quantity: 1}])
    }
  }

  return (
    <div>
      <Show
        when={product()}
        fallback={
          <div class="my-4">
            <Card rounded={true}>
              <h2>Loading...</h2>
            </Card>
          </div>
        }
      >
        <div class="m-4">
          <Card rounded={true}>
            <div class="grid grid-cols-5 gap-7 text-left">
              <div class="col-span-2">
                <img class="m-4" src={product().image} alt={product().title} />
              </div>

              <div class="col-span-3 m-4">
                <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
                <p>{product().description}</p>
                <p class="my-7 text-2xl">${product().price}</p>

                <button class="btn" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Show>
    </div>
  );
}
