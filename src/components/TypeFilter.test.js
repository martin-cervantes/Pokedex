import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TypeFilter from "./TypeFilter";

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

it("TypeFilter renders correctly", () => {
  const emptyFunc = () => {};

  act(() => {
    render(<TypeFilter value={"All"} handleFilterChange={emptyFunc} />, container);
  });

  expect(container.textContent).toBe("AllBugDarkDragonElectricFairyFightingFireFlyingGhostGrassGroundIceNormalPoisonPsychicRockSteelWater");
});

it("TypeFilter handle filter Changed", () => {
  const handleFilterChange = jest.fn();
  act(() => {
    render(<TypeFilter value={"All"} handleFilterChange={handleFilterChange} />, container);
  });

  const select = document.querySelector(".filter")
  expect(select.innerHTML).toBe("<option value=\"All\">All</option><option value=\"Bug\">Bug</option><option value=\"Dark\">Dark</option><option value=\"Dragon\">Dragon</option><option value=\"Electric\">Electric</option><option value=\"Fairy\">Fairy</option><option value=\"Fighting\">Fighting</option><option value=\"Fire\">Fire</option><option value=\"Flying\">Flying</option><option value=\"Ghost\">Ghost</option><option value=\"Grass\">Grass</option><option value=\"Ground\">Ground</option><option value=\"Ice\">Ice</option><option value=\"Normal\">Normal</option><option value=\"Poison\">Poison</option><option value=\"Psychic\">Psychic</option><option value=\"Rock\">Rock</option><option value=\"Steel\">Steel</option><option value=\"Water\">Water</option>");

  act(() => {
    select.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(handleFilterChange).toHaveBeenCalledTimes(0);
  expect(select.selectedIndex).toBe(0);

  act(() => {
    for (let i = 0; i < 5; i++) {
      select.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }  });

  expect(handleFilterChange).toHaveBeenCalledTimes(0);
  expect(select.selectedIndex).toBe(0);
});
