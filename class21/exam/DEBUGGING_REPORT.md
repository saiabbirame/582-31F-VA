# Debugging Report

## Bug 1 - Module loading and custom element setup

**File:**
app.js, FeaturedPerformance.js and PerformanceCard.js

**Problem:**
The application would not start because several JavaScript modules were imported and exported incorrectly. The custom element also had registration issues which caused the browser to stop loading the application.

**Fix:**
I corrected the import and export statements so they matched, fixed the class inheritance, corrected the use of `super()` and registered the custom element using a valid custom element name.

**Test:**
I refreshed the browser after making the changes and confirmed that the application loaded without the previous module errors in the console.

## Bug 2 - Data loading and lineup rendering

**File:**
api.js, app.js, FeaturedPerformance.js, Performance.js, PerformanceCard.js, Artist.js and ui.js

**Problem:**
The festival lineup could not load or display correctly because there were several issues with loading the JSON data, creating the performance objects, rendering the custom elements and calculating the lineup summary. The filtering features also had errors.

**Fix:**
I corrected the API loading process, fixed the constructors and inheritance for the model classes, corrected the custom element rendering, fixed the getters and setters, updated the summary calculations and corrected the filtering logic so searching, filtering, sorting and resetting all work properly.

**Test:**
I loaded the festival lineup and confirmed that all performances displayed correctly with the correct summary information. I also tested searching, filtering, sorting and resetting the filters to ensure they worked without any console errors.

## Bug 3 - Inital and error state controls

**File:**
app.js and ui.js

**Problem:**
The filters were enabled before loading the lineup, the Load lineup button stayed disabled after loading, errors were logged with `console.log()` and the page displayed a duplicated error prefix.

**Fix:**
I added an inital control-disabling function, re-enabled the Load button after loading, changed error logging to `console.error()` and users error.message in the UI.

**Test:**
I verified the inital page state, successful repeated loading, failed artist request, failed performance request, disabled filters during errors, zeroed summaries, retry behavior and restored normal loading.

## Bug 4 - Empty filter result showed the wrong status

**File:**
ui.js

**Problem:**
When no performances matched the filters, the app still said "Festival lineup laoded successfully." 

**Fix:**
I changed `if (!performances)` to `if (performances.length === 0)` so it shows "No performances match the current fitlers.

**Test:**
I searched something that doesn't exist and confirmed the correct message shows up, all cards disappear and the summaries go to 0.

## Bug 5 - Reset button stayed enabled

**File:**
app.js

**Problem:**
After clicking Reset, the button stayed enabled. 

**Fix:**
I added `resetButton.disabled = true;` after `applyFilters()`.

**Test:**
I changed the filters, clicked Reset and confirmed the button became disabled again.