# Pephands Foundation Theme Guide

This document outlines the official color palette and theming system for the Pephands Foundation website. 

The theme has been globally configured in `src/styles.css` using both custom CSS variables and Bootstrap overrides to make styling components fast and consistent.

## 🎨 Official Color Palette

| Color Name | Hex Code | Intended Usage |
| :--- | :--- | :--- |
| **Global Background**| `#FBF6F9` | The default background color for the entire website. |
| **Primary Purple** | `#5B1A6B` | Navigation, primary buttons, headers, links. |
| **Deep Ink** | `#260F2E` | Footer backgrounds, stat strips, dark sections to anchor the design. |
| **Warm Gold** | `#E8A33D` | Single accent color. Used sparingly for numbers, icons, and primary Calls to Action (CTA). |
| **Magenta** | `#A6266F` | Eyebrows, small labels, hover states. (Do not use for large backgrounds). |

---

## 🛠️ How to use the Theme

There are three ways you can apply these colors across the Angular application:

### 1. Using Standard Bootstrap Classes (Recommended)
The core Bootstrap variables have been overridden to map to our custom theme. This means you can use the familiar Bootstrap utility classes to quickly style elements.

* **Primary Purple**: Use `primary` 
  * Examples: `text-primary`, `bg-primary`, `btn-primary`, `border-primary`
* **Deep Ink**: Use `secondary` or `dark`
  * Examples: `text-secondary`, `bg-dark`, `btn-secondary`
* **Warm Gold**: Use `warning`
  * Examples: `text-warning`, `bg-warning`, `btn-warning`
* **Magenta**: Use `info`
  * Examples: `text-info`, `bg-info`, `btn-info`

**Example:**
```html
<!-- Renders a Primary Purple button -->
<button class="btn btn-primary">Donate Now</button>

<!-- Renders a Deep Ink background with Warm Gold text -->
<div class="bg-dark text-warning">
  Stats go here
</div>
```

### 2. Using Custom Pephands Utility Classes
If you prefer explicit naming that directly references the brand colors without relying on Bootstrap semantics, you can use the custom utility classes:

* `.text-pep-primary` / `.bg-pep-primary`
* `.text-pep-ink` / `.bg-pep-ink`
* `.text-pep-gold` / `.bg-pep-gold`
* `.text-pep-magenta` / `.bg-pep-magenta`

**Example:**
```html
<h2 class="text-pep-magenta">Eyebrow Label</h2>
<section class="bg-pep-ink">
   <h1 class="text-pep-gold">Over 10,000 lives impacted</h1>
</section>
```

### 3. Using Raw CSS Variables
When writing custom CSS in your Angular component stylesheets (e.g., `header.css`), you can use the raw CSS variables.

**Available Variables:**
* `--pep-primary`
* `--pep-ink`
* `--pep-gold`
* `--pep-magenta`

**Example (`component.css`):**
```css
.custom-card {
  border: 2px solid var(--pep-gold);
  background-color: var(--pep-ink);
}

.custom-card:hover {
  border-color: var(--pep-magenta);
}
```

---
> **💡 Design Tip:** Avoid scattering the `Primary Purple` everywhere. Use the `Deep Ink` for large background sections to anchor the design, and use `Warm Gold` as the consistent highlight color to make key elements pop!
