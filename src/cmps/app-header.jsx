export function AppHeader() {
	return (
		<header className="app-header">
			<div className="app-header-content">
				<div className="app-header-left">
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
				<button className="contact light">contact us</button>
			</div>
		</header>
	)
}
