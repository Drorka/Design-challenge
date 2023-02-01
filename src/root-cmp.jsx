import React from 'react'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { HomePage } from './pages/home-page'

export function RootCmp() {
	return (
		<div>
			<AppHeader />
			<HomePage />
			<AppFooter />
		</div>
	)
}
