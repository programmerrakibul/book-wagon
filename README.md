# BookWagon

BookWagon is a full-stack online bookstore for readers and book-management
teams. Customers can discover books, manage wishlists, and place orders, while
librarians and administrators have role-based tools to manage inventory and
platform activity.

**Live application:**
[book-wagon-46880.web.app](https://book-wagon-46880.web.app/)

## Features

- Browse and search books, with book details, comments, and wishlists
- Create orders and complete checkout with Stripe
- Manage profiles, orders, and payment history
- Give members, librarians, and administrators access to role-specific
  dashboards and tools
- Use a responsive interface on desktop and mobile

## Technology

| Area           | Technologies                                   |
| -------------- | ---------------------------------------------- |
| Client         | React 19, Vite, JavaScript, Tailwind CSS       |
| Server         | Node.js 22+, Express 5, TypeScript             |
| Data           | MongoDB, Mongoose                              |
| Authentication | Firebase Authentication and Firebase Admin SDK |
| Payments       | Stripe                                         |

## Repository layout

```text
client/   React application
server/   Express API
```

The client and server are separate Node.js applications. Install dependencies
and run commands from the relevant directory.

## Run locally

### Requirements

- Node.js 22 or later and npm
- A MongoDB database
- Firebase project configuration for client authentication and a Firebase Admin
  service account for the API
- Stripe API credentials
- A Cloudinary cloud name and unsigned upload preset for image uploads

### 1. Configure the API

Create `server/.env`:

```env
PORT=8000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
DB_NAME=book_wagon
FIREBASE_SERVICE_KEY=<base64-encoded-service-account-json>
PAYMENT_GATEWAY_SECRET_KEY=<stripe-secret-key>
WEBHOOK_SECRET=<stripe-webhook-signing-secret>
CLIENT_URL=http://localhost:5173
```

`MONGODB_URI`, `FIREBASE_SERVICE_KEY`, `PAYMENT_GATEWAY_SECRET_KEY`, and
`WEBHOOK_SECRET` are required. `PORT`, `DB_NAME`, and `CLIENT_URL` have the
defaults shown above.

Install dependencies and start the API:

```bash
cd server
npm install
npm run dev
```

The API runs at `http://localhost:8000`.

### 2. Configure the client

Create `client/.env.local`:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=<firebase-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<firebase-auth-domain>
VITE_FIREBASE_PROJECT_ID=<firebase-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<firebase-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<firebase-messaging-sender-id>
VITE_FIREBASE_APP_ID=<firebase-app-id>
VITE_STRIPE_PUBLISHABLE_KEY=<stripe-publishable-key>
VITE_CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
VITE_CLOUDINARY_UPLOAD_PRESET=<cloudinary-unsigned-upload-preset>
```

In another terminal, install dependencies and start the client:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`). Keep
both applications running during local development.

## Useful commands

Run these from the corresponding `client/` or `server/` directory.

| Application | Command         | Description                       |
| ----------- | --------------- | --------------------------------- |
| Client      | `npm run dev`   | Start the Vite development server |
| Client      | `npm run build` | Build the production client       |
| Client      | `npm run lint`  | Run ESLint                        |
| Server      | `npm run dev`   | Start the API with watch mode     |
| Server      | `npm run build` | Compile the TypeScript API        |
| Server      | `npm start`     | Run the compiled API              |

## API reference

See the [server endpoint reference](server/endpoints.md) for available routes
and request details.

## Project author

**Md. Rakibul Islam**

- [Portfolio](https://programmer-rakibul.vercel.app/)
- [GitHub](https://github.com/programmerrakibul)
- [LinkedIn](https://www.linkedin.com/in/programmer-rakibul/)
- [Email](mailto:rakibul00206@gmail.com)
