import { HaruFeatureShowcase } from "../../apps/haru/HaruFeatureShowcase";
import { JariAiChat } from "../../apps/jari/JariAiChat";
import { JariLive } from "../../apps/jari/JariLive";
import { RemoteConsoleApp } from "../../apps/remote-console/RemoteConsoleApp";
import styles from "./InteractiveDemos.module.css";

export function HaruInteractiveDemo() {
  return <HaruFeatureShowcase />;
}

export function JariAiInteractiveDemo() {
  return <JariAiChat />;
}

export function JariLiveDemo() {
  return <JariLive />;
}

export function ConsoleInteractiveDemo() {
  return (
    <div className={styles.wrapWide}>
      <RemoteConsoleApp fill />
    </div>
  );
}
