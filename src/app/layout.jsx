import Footer from "@/Component/Footer/Footer"; // Make sure the path is correct
import Navbar from "@/Component/Navbar/Navbar"; // Make sure the path is correct

// If you're using global styles, uncomment the following
// import '../styles/globals.css';

export const metadata = {
  title: "Zuditt AI",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/zuditt-Z-new-logo.png" /> 
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zuditt AI</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Render Footer at the bottom */}
        <a
          href="https://wa.me/917994730307" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="green"
          >
            <path d="M12 0C5.383 0 0 5.383 0 12c0 2.098.545 4.059 1.497 5.771L0 24l6.526-1.422C8.415 23.17 10.135 24 12 24c6.617 0 12-5.383 12-12S18.617 0 12 0zm0 22c-1.728 0-3.394-.446-4.858-1.29l-.347-.201-3.871.843.826-3.79-.215-.35C2.847 15.101 2 13.609 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5.29-7.648c-.261-.13-1.544-.764-1.783-.851-.238-.087-.41-.13-.581.13-.173.261-.665.851-.815 1.024-.149.173-.3.194-.56.065-.261-.13-1.103-.407-2.098-1.299-.776-.693-1.299-1.553-1.452-1.814-.149-.26-.016-.4.112-.526.115-.112.26-.3.391-.449.13-.149.173-.26.26-.433.086-.173.043-.325-.022-.449-.065-.13-.581-1.4-.796-1.924-.21-.502-.422-.434-.581-.443-.149-.008-.3-.01-.458-.01-.16 0-.419.06-.641.3s-.842.824-.842 2.011c0 1.187.86 2.334.98 2.491.13.173 1.696 2.591 4.116 3.646.576.249 1.026.397 1.378.508.579.183 1.107.158 1.524.096.465-.07 1.544-.631 1.762-1.24.217-.608.217-1.13.149-1.24-.065-.112-.217-.173-.476-.304z" />
          </svg>
        </a>
      </body>
    </html>
  );
}