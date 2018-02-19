import React from 'react'

export function renderName(text) {
  return { type: 'RENDER_NAME', text }
}

export function renderChk(value) {
  return { type: 'RENDER_CHK', value }
}

