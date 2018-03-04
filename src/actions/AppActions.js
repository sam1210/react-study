import React from 'react'
let nextid = 1
export function renderName(text,id) {
	return {
		type: 'RENDER_NAME',
		id:nextid++,
		text,
	}

}
