import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Pokemon from './Pokemon';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Pokemon renders correctly", () => {
  const data = {
    id: 1,
    name: 'Bulbasaur',
    sprite: 'http://pokeapi.com/bulbasaur/sprite.png',
  };

  act(() => {
    render(<Pokemon data={data} />, container);
  });

  expect(container.innerHTML).toBe("<div class=\"pokemon_container\"><img class=\"pokemon_img\" src=\"http://pokeapi.com/bulbasaur/sprite.png\" alt=\"Bulbasaur\"><button type=\"button\" class=\"pokemon_name\">Bulbasaur</button><div class=\"pokemon_num\">1</div></div>");
});
