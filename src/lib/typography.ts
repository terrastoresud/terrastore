/** French punctuation: narrow no-break space before ; : ! ? and inside « ». */
export function frTypo(input: string): string {
  return input
    .replace(/\s+([;:!?])/g, "\u202f$1")
    .replace(/«\s+/g, "«\u202f")
    .replace(/\s+»/g, "\u202f»");
}
