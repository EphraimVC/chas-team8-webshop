# Team8 Webshop

[🔗 Live deployed Webshop site](https://ephraimvc.github.io/chas-team8-webshop/)

### Team 8 Participants
- [Ahmed Bahobeshi](https://github.com/Ahmed-ChasAcademy)
- [Aleksa Solevic](https://github.com/AleksaSolevic)
- [Cristian Pencheff](https://github.com/cribepencheff)
- [Ephraim Valladares](https://github.com/EphraimVC)
- [Mary Pope](https://github.com/marypope19)

### Links
- [📐 Wireframe (Figma)](https://www.figma.com/design/E1tge0x4pZFkjxhK75hvb4/Webshop?node-id=0-1)
- [🎨 Design (Figma)](https://www.figma.com/design/E1tge0x4pZFkjxhK75hvb4/Webshop?node-id=2-4)
- [🖥️ Prototype Desktop (Figma)](https://www.figma.com/proto/E1tge0x4pZFkjxhK75hvb4/Webshop?page-id=2%3A4&node-id=313-1662&node-type=frame&viewport=-177%2C1974%2C2.11&t=2yKPkxKayzYPK0IW-9&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=313%3A1662&show-proto-sidebar=1)
- [📱 Prototype Mobile (Figma)](https://www.figma.com/proto/E1tge0x4pZFkjxhK75hvb4/Webshop?page-id=2%3A4&node-id=344-2320&node-type=frame&viewport=-177%2C1974%2C2.11&t=2yKPkxKayzYPK0IW-9&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=344%3A2320&show-proto-sidebar=1)

## Overview
Discover the Team8 Webshop. It's an user-friendly e-commerce platform offering a wide range of diverse products. Users can filter and sort the products based on their preferences and choose between four different categories. Through detailed product description can customers add higher quantities of items to their cart. The webshop fully optimized to work on all devices and ensures consistent user experience.


## Features
### Home page
- Displays a list of all the products.
- Users can filter products based on four different categories.
- Users can sort the products by price(lowest or highest).
- Users can add products to cart.
- Users can go directly to cart page.

### Product page
- Click on product to see more detailed product description.
- Add higher quantities to the shopping cart.
- Go back to preferred category or home page.

### Cart page
- View all added items in the cart.
- Delete items from the cart.
- See the total price of the products.
- Proceed to payment.

### Responsive design
- The platform is optimized for mobile, tablet and desktop devices.

### SEO, Analytics and Branding
- Meta descriptions and Open Graph for SEO.
- Integrated Google Analytics for activity tracking.
- Favicon for Webshop branding


## Technologies used
- Html: For semantic structure of website.
- CSS & SCSS: For styling and responsive design.
- JavaScript: For dynamic and interactive behaviour.
- Local storage: For keeping the products in cart.


## Advantages
- User-friendly design: The layout is easy to understand with the focus on content.
- Dynamic interface: The Webshop is very dynamic and provides good user experience.
- Responsive design: Webshop works well on all devices, from mobile to desktop.
- Semantic HTML: Helps engines to understand the content
- Efficient cart system: Dynamic cart updates with local storage support.
<!-- Add more -->


## Disadvantages
- Limited product categories.
- Limited sort and filter options.
- No search bar for filtration.
<!-- Add more -->

## Future improvments
- Add more products and categories.
- Create a wish list for products.
- Add a search bar for more precise product filtration.
- Upgrade filtration and sorting with more options.
- Show related products from the same category.

## Design sketch
![Design screenshot](https://github.com/EphraimVC/chas-team8-webshop/raw/main/team8-webshop.webp)


## Group Reflection on event tracking in Google Analytics:
Our group opinion is that Google Analytics is an excellent tool for understanding patterns of user interactions on a website. It is a deeper analysis of people’s behaviour and is particularly valuable for businesses looking to improve and grow by making the right changes to their websites.

### Advantages:
-  Understanding users behaviour: Event tracking helps uncover which parts of a website drive user actions and engagement. Tracking events like button clicks, scrolls, and form submissions is essential for measuring how well a website engages its users. Based on this data, businesses can make necessary changes to improve user experience and ultimately boost performance.
- Goal measurments: Google Analytics provides a way to assess whether user interactions align with a company’s business plan. It highlights areas that need improvement or adjustment to ensure that company goals are met. For instance, if a goal is to increase newsletter sign-ups, tracking form submissions can show whether this goal is being achieved.
- Data-Driven Decisions:  Insights from event tracking empower teams to make informed decisions. By analysing trends and patterns, businesses can identify which parts of their website perform well and which need improvement. This helps allocate resources efficiently and prioritize enhancements that have the greatest impact.
- Real-Time Analytics: Real-time analytics allow teams to monitor the performance of newly released features, products, or campaigns as they happen. This immediate feedback enables quick decision-making and adjustments to optimise outcomes.

### Limitations:
- Technical:  Implementing event tracking requires a solid understanding of Google Analytics and technical expertise, which can be challenging for non-technical teams.
-  Compliance and Privacy Concerns: User behaviour tracking must comply with data protection laws like GDPR or CCPA. These regulations may limit certain types of data collection and require careful implementation to ensure compliance.
- Accurate Configuration:  Events must be configured properly, with correct labeling and logic, to avoid collecting inaccurate or misleading data. Mistakes in setup can result in data that cannot be trusted for decision-making.

### Summary:
Google Analytics is a powerful tool that supports business development by providing detailed insights into user behaviour. It is particularly valuable for making data-driven decisions in teams. By understanding how users interact with a website, teams can adjust their strategies, improve the user experience, and align their plans with user needs and business goals. While there are challenges, such as the need for technical skills and ensuring compliance, the benefits of using Google Analytics far outweigh these limitations. It is an indispensable tool for any team looking to optimize their website and make informed, impactful changes.


## Our Google Analytics Tags:
![Google Analytics screenshot](https://github.com/EphraimVC/chas-team8-webshop/raw/main/analytics.webp)

### t8_add_to_cart:
This tag is used to track when users add items to their shopping cart. It gives us a better understanding of what products are catching people’s attention and helps us learn more about their shopping habits.

### t8_modal_Open
This tag is designed to track user interest in different products and their detailed descriptions on our website. It helps us understand which products capture the most attention and how users engage with additional product information.

### t8_delete_from_cart
This tag is created to track user behaviour when removing items from their shopping cart. It provides insights into user reactions, helping us identify patterns or potential pain points during the purchase process.

## Setting up the Development Environment (SCSS & Minified CSS)
### Installation
 1. Ensure Node.js and npm are installed.
 2. Install dependencies:
`npm install`

### SCSS
 - To build and minify SCSS:
 `npm run build`
 - To watch, auto-compile SCSS, and minify:
 `npm run watch`
