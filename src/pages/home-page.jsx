import React from 'react'
import { CTA } from '../cmps/cta'
import { Hero } from '../cmps/hero'
import { SuccessStories } from '../cmps/success-stories'
import { ValueProp } from '../cmps/value-prop'

export function HomePage() {
	return (
		<section className="home-page">
			<Hero />
			<ValueProp />
			<SuccessStories />
			<CTA />
		</section>
	)
}
