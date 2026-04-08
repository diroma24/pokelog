## PokeLog Project

A specialized web application designed to help trainers track their progress toward completing the Pokédex. It serves as a management tool for inventorying caught Pokémon and planning future captures.

## Current Features
- **Collection Management Prep:** Individual Pokémon pages with specific data needed for hunting and completion.
- **Modular Component System:** Optimized UI for quick data reference, including Stats, Locations, and Physical Data.
- **Visual Database:** Full gallery support for every Pokémon, including Shiny variants to help users identify target forms.
- **Technical Encounter Data:** Direct integration with Location Area endpoints to show exactly where to find missing entries.
- **Authentication:** Basic Login and Registration interfaces prepared for personalized user profiles.

## Technical Limitations
- **State Persistence:** The current version does not save the "Caught" or "Wishlist" status after a page refresh (client-side only).
- **Missing Main Grid:** The global list for marking multiple Pokémon simultaneously is still in development.
- **No Backend Connection:** User accounts are not yet linked to a database, meaning collection data is not synced across devices.

## Future RoadMap
- **Checklist System:** Implementation of "Caught", "Shiny Caught", and "Living Dex" markers for every entry.
- **Personal Wishlist:** A dedicated section to track wanted Pokémon.
- **Completion Analytics:** Progress bars showing the percentage of Pokédex completion by region or type.
- **Social Sharing:** Option to generate a public link to show other trainers your current collection or trade needs.