import EmptyScreenBoard from '../../components/EmptyScreenBoard/EmptyScreenBoard';
import css from './ScreenPage.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { selectTheme } from '../../redux/theme/selectors';
import MainDashboard from '../../components/MainDashboard/MainDashboard';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import { selectBoards } from '../../redux/boards/selectors';
import boardBackground from '../../helpers/boardBackground';
import { useEffect, useState } from 'react';

const ScreenPage = () => {
	const { boardName } = useParams();
	const theme = useSelector(selectTheme);

	const boards = useSelector(selectBoards);
	const board = boards.find(board => board._id === boardName);

	const [bgImage, setBgImage] = useState(null);

	useEffect(() => {
		if (board && board.background) {
			const background = boardBackground(board.background);
			setBgImage(`url(${background})`);
		} else {
			setBgImage(null);
		}
	}, [board]);

	return (
		<div
			className={clsx(css.wrapper, css[theme])}
			style={{
				backgroundImage: bgImage,
			}}
		>
			<HeaderDashboard />

			{boardName ? <MainDashboard /> : <EmptyScreenBoard />}
		</div>
	);
};

export default ScreenPage;
