import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error("El publisher es incorrecto");
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
