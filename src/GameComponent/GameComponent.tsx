import Phaser from "phaser";
import { useEffect } from "react";
import { PhaserConfig } from "../phaser.config";

export const GameComponent = () => {
  useEffect(() => {
    const game = new Phaser.Game(PhaserConfig);
    return () => game.destroy(true);
  }, []);

  return <></>;
};
