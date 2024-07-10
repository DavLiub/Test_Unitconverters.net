# Unit Conversion Tests with Playwright

## Overview

This project focuses on automating test cases for the "Feet to Meters" conversion feature on the [UnitConverters](https://www.unitconverters.net/length/feet-to-meters.htm) website using Playwright with TypeScript.

## Project Structure

- `tests/feetToMeters.spec.ts`: Contains the Playwright test cases.
- `playwright.config.ts`: Configuration file for Playwright.

## Test Cases

### Test Case 1: Convert a valid number from feet to meters
- **Input:** 10 feet
- **Expected Output:** 3.048 meters

### Test Case 2: Convert zero feet to meters (with spaces)
- **Input:** "    0" feet
- **Expected Output:** 0 meters

### Test Case 3: Convert a float number from feet to meters (separated by a dot)
- **Input:** -10.5 feet
- **Expected Output:** -3.2004 meters

### Test Case 4: Convert a very large number from feet to meters
- **Input:** 1000000 feet
- **Expected Output:** 304800 meters

### Test Case 5: Convert a valid number from meters to feet and check clear functionality
- **Input:** 10 meters
- **Expected Output:** 32.80839895 feet
- **Additional Check:** Ensure the clear button works

### Additional Test Cases

1. **Invalid Input:** Fill with non-numeric value ('sdf') and check for error message.
2. **Maximum Value:** Test with `Number.MAX_SAFE_INTEGER`.
3. **Minimum Value:** Test with `Number.MIN_SAFE_INTEGER`.
4. **Empty Input:** Ensure empty input returns no conversion.
5. **Switch Units:** Ensure conversion from meters to feet works correctly.
6. **Invalid Decimal Input:** Test with invalid decimal input ('10.5.3').
7. **Comma-separated Decimal Input:** Test with valid decimal input using commas ('10,5').
8. **Invalid Comma-separated Input:** Test with invalid comma-separated input ('10,5,3').

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
