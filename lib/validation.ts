// Utilitaires de validation réutilisables

export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email.trim()) {
    return { isValid: false, error: 'Veuillez saisir votre adresse e-mail' }
  }
  
  if (!email.includes('@')) {
    return { isValid: false, error: 'Veuillez saisir une adresse e-mail valide' }
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Format d\'adresse e-mail invalide' }
  }
  
  return { isValid: true }
}

export const validateUsername = (username: string): { isValid: boolean; error?: string } => {
  if (!username.trim()) {
    return { isValid: false, error: 'Veuillez saisir votre pseudo' }
  }
  
  if (username.trim().length < 3) {
    return { isValid: false, error: 'Le pseudo doit contenir au moins 3 caractères' }
  }
  
  return { isValid: true }
}

export const validateRequired = (value: string, fieldName: string): { isValid: boolean; error?: string } => {
  if (!value.trim()) {
    return { isValid: false, error: `${fieldName} est requis` }
  }
  
  return { isValid: true }
} 