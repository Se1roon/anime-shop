import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/navbar";
import styles from "../components/css/Navbar.module.css";

describe("Navbar component", () => {
  it("checks whether everything renders correctly", () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });

  it("check whether .visible is added after menu click", async () => {
    render(<Navbar />);
    const menu = document.querySelector(`.${styles.menu}`);

    await userEvent.click(menu);

    const nav = document.querySelector(`.${styles.nav}`);
    expect(nav.classList.contains(`${styles.visible}`)).toBe(true);
  });
});
