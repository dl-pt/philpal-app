import { Button } from "@/parts/button/Button";
import styles from "@/App.module.scss";

export const App = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h1>Philpal App</h1>
      <h2>Philpal App</h2>
      <h3>Philpal App</h3>
      <h4>Philpal App</h4>
      <h5>Philpal App</h5>
      <h6>Philpal App</h6>
      <p>Welcome to the Philpal app!</p>
      <Button className={styles.button}>Get started</Button>
      <Button variant="blue">Get started</Button>
      <Button variant="green">Get started</Button>
      <Button variant="transparent_blue">Get started</Button>
    </div>
  </div>
);
