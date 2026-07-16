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