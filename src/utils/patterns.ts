type PatternKeys = 'CEP' | 'UF'

type Patterns = Record<PatternKeys, string>

export const patterns: Patterns = {
  CEP: '99999-999',
  UF: 'ZZ',
}
