interface RemoveMask {
  value: string
  pattern: string
}

export function removeMask({ value, pattern }: RemoveMask) {
  const SpecialCharacters = pattern.replace(/9/g, '')
  const v = value.trim().replace(new RegExp(`[${SpecialCharacters}]`, 'g'), '')

  return v.replace('_', '')
}
