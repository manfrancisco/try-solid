import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";

export default function Home() {
  const [products] = createResource(() =>
    fetch("http://fakestoreapi.com/products").then((res) => res.json())
  );

  return (
    <Show
      when={products()}
      fallback={
        <div class="my-4">
          <Card rounded={true}>
            <h2>Loading...</h2>
          </Card>
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <div class="flex flex-col h-full">
                <div class="grow">
                  <img class="p-3" src={product.image} alt={product.title} />
                </div>
                <h2 class="my-3">{product.title}</h2>
              </div>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
