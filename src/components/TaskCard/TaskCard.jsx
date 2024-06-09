import css from './TaskCard.module.css';

export default function TaskCard() {
	return (
		<div className={css.cardContainer}>
			<div className={css.content}>
				<h3 className={css.title}>The Watch Spot Design</h3>
				<p className={css.text}>
					Create a visually stunning and eye-catching watch dial design that
					embodies our brands essence of sleek aesthetics and modern elegance.
					Your design should be unique, innovative, and reflective of the latest
					trends in watch design.
				</p>
			</div>
			<div className={css.line}></div>
			<div className={css.prioritiTimeBox}>
				<div className={css.priorityBox}>
					<h4 className={css.priorityTitle}>Priority</h4>
					<div>
						<label className={css.label}>
							<input type="radio" name="option" className={css.radio} />
							Low
						</label>
					</div>
				</div>
				<div>
					<h4 className={css.priorityTitle}>Deadline</h4>
					<input type="date" className={css.dateInput} />
				</div>
				<div className={css.iconBox}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 32 32"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M4.45 9.334A13.328 13.328 0 0 1 16 2.667c7.364 0 13.333 5.97 13.333 13.333S23.363 29.333 16 29.333a13.329 13.329 0 0 1-11.55-6.667" />
						<path d="M16 21.334L21.333 16 16 10.668M2.667 16h18.667" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 32 32"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M3.333 28.667L10.732 25.821c.473-.182.71-.273.931-.392.197-.106.384-.227.56-.364.198-.154.378-.333.736-.692l15.04-15.04A3.77 3.77 0 1 0 22.666 4L7.626 19.04c-.359.359-.538.538-.692.736a3.948 3.948 0 0 0-.364.56c-.119.221-.21.458-.392.931l-2.846 7.399zm0 0 2.744-7.135c.196-.511.295-.766.463-.883a.665.665 0 0 1 .505-.107c.201.038.395.232.782.619l3.012 3.012c.387.387.58.58.619.782a.665.665 0 0 1-.107.505c-.117.168-.372.267-.883.463l-7.135 2.744z" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 32 32"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M12 4h8M4 8h24M6.667 8l.801 12.018c.149 2.231.223 3.347.588 4.243a6 6 0 0 0 3.672 3.435c.919.304 2.037.304 4.273.304 2.236 0 3.354 0 4.273-.304a6 6 0 0 0 3.672-3.435c.365-.896.439-2.012.588-4.243L25.335 8" />
					</svg>
				</div>
			</div>
		</div>
	);
}
