import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selector';

export const selectCards = state => state.cards.items;

export const selectFilteredCards = createSelector(
	[selectCards, selectFilter],
	(cards, filter) => {
		return cards.filter(card => {
			if (!filter) {
				return true;
			}
			return card.priority === filter;
		});
	}
);
