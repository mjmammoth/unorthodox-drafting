import { ColorTranslator } from 'colortranslator';

export function convertHexColorToCIELAB(hex: string) {
  const colourTranslator = new ColorTranslator(hex);
  const CIELabString = colourTranslator.CIELab;
  const cleanCIELabString = CIELabString.replace(/lab\(|\)/g, '');
  const cieArray = cleanCIELabString.split(' ').map(Number);
  return cieArray;
}
