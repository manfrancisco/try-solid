import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import Card from "../components/Card";

export default function Product() {
  const params = useParams();

  const [product] = createResource(() =>
    fetch(`http://fakestoreapi.com/products/${params.id}`).then((res) =>
      res.json()
    )
  );

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
        <Card rounded={true}>
          <div class="grid grid-cols-5 gap-7">
            <div className="col-span-2">
              <img src={product().image} alt={product().title} />
            </div>

            <div class="col-span-3">
              <h2 className="text-3xl font-bold mb-7">{product().title}</h2>
              <p>{product().description}</p>
              <p className="my-7 text-2xl">${product().price}</p>
            </div>
          </div>
        </Card>
      </Show>
    </div>
  );
}
