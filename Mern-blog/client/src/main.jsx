// import React  from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// import { ClerkProvider } from '@clerk/clerk-react'
// import { BrowserRouter } from 'react-router-dom'

// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY 
// // const clerkPubKey  = pk_test_ZW5nYWdlZC1tb25hcmNoLTIxLmNsZXJrLmFjY291bnRzLmRldiQ

// if (!clerkPubKey) {
//   throw new Error('Missing Publishable Key')
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter> 
//     </ClerkProvider>
//   </React.StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
