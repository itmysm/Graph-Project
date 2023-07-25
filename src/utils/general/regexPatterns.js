export const patterns = {
  date: /\b\d{1,2}\/\d{1,2}\/\d{2}\b/, // => "6/1/23"
  time: /\b\d{1,2}:\d{2}\s[APap][Mm]\b/, // => "11:11 PM"
  name: /(?<= - )[^:]+(?=:)/,
  message: /^[^:]+:[^:]+:(.*)$/,
  objectProperty: /^(?![0-9])[_$a-zA-Z][_$a-zA-Z0-9]*$(?<!\b(?:var|function|if|else|return|true|false)\b)/, // This regex is used to validate the naming of the properties of an object.
}