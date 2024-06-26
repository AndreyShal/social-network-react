export const requiredFn = (value: string) => {
  if(value) return  undefined;
  return 'Field is required'
}

export const maxLengthFn = (maxLength: number) => (value: string) => {
  if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`
  return undefined
}