export function AppFooter() {
	return (
		<footer className="app-footer">
			<div className="app-footer-content">
				<div className="app-footer-left">
					<div className="app-footer-nav">
						<div className="logo">myteam</div>
						<nav>
							<a href="#" className="header-nav">
								home
							</a>
							<a href="#" className="header-nav">
								about
							</a>
						</nav>
					</div>
					<p className="app-footer-location">
						987 Hillcrest Lane <br />
						Irvine, CA <br />
						California 92714 <br />
						Call Us : 949-833-7432 <br />
					</p>
				</div>
				<div className="app-footer-right">
					<div className="app-footer-social"> icon icon icon</div>
					<p className="app-footer-copyrights">
						{' '}
						Copyright 2020. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	)
}
