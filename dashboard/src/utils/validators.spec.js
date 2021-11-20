import { validateEmptyAndLength3, validaateEmptyAndEmail } from './validators'

describe('Validators utils', () => {

    it('should give an error with empty payload', () => {
      expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
    })

    it('should give an error with string is empty', () => {
      expect(validateEmptyAndLength3('')).toBe('*Este campo é obrigatório')
    })

    it('should give an error with less then 3 character payload', () => {
      expect(validateEmptyAndLength3('12')).toBe('*Este campo deve ter no mínimo 3 caracteres')
    })

    it('should returns true when pass a correct param', () => {
      expect(validateEmptyAndLength3('123')).toBeTruthy()
    })

    it('should give an error with empty payload', () => {
      expect(validaateEmptyAndEmail()).toBe('*Este campo é obrigatório')
    })

    it('should give an error with string is empty', () => {
      expect(validaateEmptyAndEmail('')).toBe('*Este campo é obrigatório')
    })

    it('should give an error with a invalid param', () => {
      expect(validaateEmptyAndEmail('teste@')).toBe('*Este campo deve ser um e-mail válido')
    })

    it('should returns true when a correct param', () => {
      expect(validaateEmptyAndEmail('teste@gmail.com')).toBeTruthy()
    })
})