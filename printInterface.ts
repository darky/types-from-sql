export function generateInterface(iName: string, fields: {[K:string]: {dataTypeName: string, nullable: boolean}}) {
  return `

export interface ${iName} {
${
  Object.entries(fields)
  .map(([key, typename])=>`  ${key}${typename.nullable?'?':''}: ${typename.dataTypeName}`)
  .join(",\n")
}
}`
}
