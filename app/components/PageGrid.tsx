import { site } from "~/config";

import { Arrow } from "./Arrow";

interface PageGridProps {
	left: React.ReactNode;
	subtitle?: React.ReactNode;
	title: React.ReactNode;
}

export function PageGrid({ left, subtitle, title }: PageGridProps) {
	return (
		<div className="page-grid">
			<header className="page-grid-header">
				<h1 className="page-grid-title">{title}</h1>
				{subtitle && (
					<a className="page-grid-subtitle" href="/">
						{site.title}
						<Arrow
							className="arrow-back"
							label="Back indication arrow"
							rotate={180}
						/>
					</a>
				)}
			</header>
			<main className="page-grid-left">{left}</main>
			<footer className="page-grid-footer">
				<a className="page-grid-footer-link" href="/about">
					About
				</a>
				<a className="page-grid-footer-link" href="/code-of-conduct">
					Code of Conduct
				</a>
				<span className="page-grid-footer-separator" />
				<a className="page-grid-footer-link" href="/events">
					Events
				</a>
				<a className="page-grid-footer-link" href="/sponsors">
					Sponsors
				</a>
				<span className="page-grid-footer-separator" />
				<a className="page-grid-footer-link" href="/join-us">
					Join Us
				</a>
			</footer>
		</div>
	);
}
