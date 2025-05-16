import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ServiceCard, initialCards } from "./servicesData";

interface ServicesStore {
  cards: ServiceCard[];
  setCards: (cards: ServiceCard[]) => void;
  addCard: (card: ServiceCard) => void;
  updateCard: (index: number, card: ServiceCard) => void;
  removeCard: (index: number) => void;
}

export const useServicesStore = create<ServicesStore>()(
  persist(
    (set) => ({
      cards: initialCards,
      setCards: (cards) => set({ cards }),
      addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
      updateCard: (index, card) => set((state) => ({
        cards: state.cards.map((c, i) => (i === index ? card : c)),
      })),
      removeCard: (index) => set((state) => ({
        cards: state.cards.filter((_, i) => i !== index),
      })),
    }),
    {
      name: "services-cards-store",
    }
  )
);
