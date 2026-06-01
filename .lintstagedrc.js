module.exports = {
  // Prettier
  "./*.{json,md}": ["prettier --write"],

  // Eslint
  "**/*.{ts,tsx}": ["eslint --fix"],

  // Jest
  "**/*.{ml,mli,mly,ts,js,json}": "jest --passWithNoTests",
}
