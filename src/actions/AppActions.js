import React from 'react'
let nextid = 0
export function renderName(text) {
	return {
		type: 'RENDER_NAME',
		id: nextid++,
		text
	}
}
