import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";

export default function Home() {
  const [products] = createResource(() =>
    fetch("http://fakestoreapi.com/products").then((res) => res.json()),
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
      <div className="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <div class="flex flex-col h-full">
                <img
                  class="p-3 grow self-center"
                  src={product.image}
                  alt={product.title}
                />
                <h2 class="my-3">{product.title}</h2>
              </div>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
