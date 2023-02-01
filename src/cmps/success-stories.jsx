import React from 'react'

export function SuccessStories() {
	return (
		<section className="success-stories">
			<div className="success-stories-content">
				<div className="success-stories-header">
					<h2>
						Delivering real results for top companies. Some of our{' '}
						<span>success stories</span>.
					</h2>
				</div>
				<div className="success-stories-items">
					<div>
						<p className="body-2">
							{' '}
							“The team perfectly fit the specialized skill set required. They
							focused on the most essential features helping us launch the
							platform eight months faster than planned.”
						</p>
						<h3>Kady Baker</h3>
					</div>
					<div>
						<p className="body-2">
							“We needed to automate our entire onboarding process. The team
							came in and built out the whole journey. Since going live, user
							retention has gone through the roof!”
						</p>
						<h3>Aiysha Reese</h3>
					</div>
					<div>
						<p className="body-2">
							“Amazing. Our team helped us build an app that delivered a new
							experience for hiring a physio. The launch was an instant success
							with 100k downloads in the first month.”
						</p>
						<h3>Arthur Clarke</h3>
					</div>
				</div>
			</div>
		</section>
	)
}
