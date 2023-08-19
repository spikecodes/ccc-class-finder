<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="./assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">Stotra</h3>

<p align="center">
    Multiplayer stock trading simulator built with React + MERN 📈
    <br />
    <a href="https://stotra.spike.codes"><strong>View the demo »</strong></a>
    <br />
    <br />
    <a href="https://stotra.spike.codes/api/docs/">Read API Docs</a>
    ·
    <a href="https://github.com/spikecodes/stotra/issues">Report Bug</a>
    ·
    <a href="https://github.com/spikecodes/stotra/issues">Request Feature</a>
  </p>
</div>

| Home                       | Stock View                        |
| -------------------------- | --------------------------------- |
| ![Home](./assets/home.png) | ![Stock View](./assets/stock.png) |

| Login                        | Signup                          | Leaderboard                              |
| ---------------------------- | ------------------------------- | ---------------------------------------- |
| ![Login](./assets/login.png) | ![Sign up](./assets/signup.png) | ![Leaderboard](./assets/leaderboard.png) |

Stotra is a multiplayer **STO**ck **TRA**ading simulator that allows users to engage in real-time virtual trading of stocks, currencies, and cryptocurrencies. With Stotra, users can practice trading without risking real money, making it an ideal platform for beginners to learn the ropes of trading. The project is powered by AWS, utilizing Amplify for the React frontend and Elastic Cloud Compute for the Express API.

I built Stotra in 60 hours split across 3 weeks of design, development, and deployment. The code is permissively licensed under the MIT License for anyone to use in their pojects and was built with readability and full-stack "best practices" in mind.

## Features ✨

- 🪙 Real-time virtual trading of stocks, currencies, and cryptocurrencies
- 🌐 Multiplayer support for competitive trading with friends
- 📊 Interactive charts and visualizations for better decision-making
- 🗞️ Access to financial news for informed trading
- 🎨 Beautiful design with dark mode and customizable accent color
- 📱 Responsive design for trading on-the-go

## Design 🖌️

The design was inspired by [Robinhood](https://robinhood.com/) and [this Dribbble shot](https://dribbble.com/shots/19488130-GoStock-Stock-Market-Dashboard). The frontend uses Chakra UI for a consistent and minimal design, with [Manrope](https://fonts.google.com/specimen/Manrope) for the headings and [Inter](https://rsms.me/inter/) for the body text.

The accent color defaults to Chakra's "Cyan 500" (`#00B5D8`), which can be changed in the app to any of [Chakra&#39;s sleek colors](https://chakra-ui.com/docs/styled-system/theme#colors). Using the toggle in the top right, one can switch between light and dark mode, as shown in the "Sign up" screenshot above.

## Security

Stotra utilizes a robust and custom-built authentication system designed to ensure the security of user data and access to its services. Developed using TypeScript, the system incorporates features for user sign-up, login, and verification. To authenticate users, Stotra employs JSON Web Tokens (JWT), issuing a JWT to users upon successful login, which is then used for identity and permission verification in subsequent requests. As an added layer of security, Stotra integrates [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/), a gatekeeping service that prevents unauthorized access to the platform.

### Known Limitations

- Users were authenticated with access tokens but not refresh tokens. Adding this additional check may verify users further and could allow storing the login in React's state. Currently, JWT tokens are stored in localStorage to allow access by React, something not possible with `httpOnly` Cookies. This is vulnerable to DOM-based XSS attacks just as state-stored tokens would be, albeit state-stored tokens are not as simple to access as localStorage ones.
- The system does not offer a password reset feature. This would most likely require an email sending service and for the sake of simplicity, I left it out in this project. For a production-level deployment, this is definitely something to add.
- Two-factor authentication is not included in the current security model. This is relatively minor for a stock trading _simulator_ but would be possible to implement with [otpauth](https://www.npmjs.com/package/otpauth).

## Architecture 🏗️

Stotra uses a microservices architecture, with separate services for the frontend and backend. The two services are stored in separate directories within this monorepo and are meant to be run simultaneously on different ports of the host. The frontend is built with React which interfaces with the Node.js/Express backend over a Restful API. The backend sends to and reads from the MongoDB database (run on MongoDB Atlas for the demo version). The project is hosted on AWS, with Amplify for the frontend and Elastic Cloud Compute for the backend.

![Architecture Diagram](./assets/architecture.png)

## Technologies Used 💻

- **Frontend:** React, TypeScript Chakra UI, Axios, Highcharts
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT

## Author

👤 **Spike**

- Website: https://spike.codes
- Twitter: [@spikecodes](https://twitter.com/spikecodes)
- Github: [@spikecodes](https://github.com/spikecodes)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Spike](https://github.com/spikecodes).

This project is [MIT License](https://github.com/spikecodes/stotra/blob/main/LICENSE) licensed.
