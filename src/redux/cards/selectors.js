import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selector';

export const selectCards = state => state.cards.items;
export const selectIsLoading = state => state.cards.isLoading;
export const selectError = state => state.cards.error;

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
