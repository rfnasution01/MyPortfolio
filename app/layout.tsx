import { Suspense } from "react";
import Footer from "./homeComponent/Footer";
import HeaderSection from "./homeComponent/Header";
import Loading from "./loading";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
    return (
      <html lang="en">
        <head>
            <link rel="website icon" type="png" href="/logo.svg" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="A skilled frontend developer with an educational background in Information Engineering. 2 years of experience in building responsive web interfaces based on UI/UX design. Proficient in programming languages like Javascript, PHP, Python, and Golang. Skilled in using the latest frameworks such as Bootstrap, Material UI, Tailwind, React Js, Node Js, Code Igniter, and Django. Passionate about contributing to innovative projects and providing creative solutions" />
            <meta name="keywords" content="frontend developer, Information Engineering, responsive web interfaces, UI/UX design, programming languages, Javascript, PHP, Python, Golang, frameworks, Bootstrap, Material UI, Tailwind, React Js, Node Js, Code Igniter, Django, innovative projects, creative solutions" />
            <meta name="author" content="rivainasution.com" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <title>Frontend Developer | rivainasution.com</title>

            {/* <!-- Open Graph Meta Tags --> */}
            <meta property="og:title" content="Frontend Developer | rivainasution.com" />
            <meta property="og:description" content="A skilled frontend developer with an educational background in Information Engineering. 2 years of experience in building responsive web interfaces based on UI/UX design. Proficient in programming languages like Javascript, PHP, Python, and Golang. Skilled in using the latest frameworks such as Bootstrap, Material UI, Tailwind, React Js, Node Js, Code Igniter, and Django. Passionate about contributing to innovative projects and providing creative solutions" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.rivainasution.com" />
            <meta property="og:image" content="https://www.rivainasution.com/images/cover.jpg" />
            <meta property="og:image:alt" content="Frontend Developer - Rivai Nasution" />
            
            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Judul halaman Anda" />
            <meta name="twitter:description" content="Deskripsi singkat mengenai halaman Anda" />
            <meta name="twitter:image" content="URL gambar representatif halaman Anda" />
            
            {/* <!-- Canonical URL --> */}
            <link rel="canonical" href="URL halaman kanonikal" />
        </head>

        <body>
          {/* <!-- Konten header --> */}
          <header>
            <HeaderSection />
          </header>
          {/* <!-- Konten utama halaman --> */}
          <Suspense fallback={<Loading />}>
            <main
              style={{
                minHeight: '76vh',
              }}
            >
              {children}
            </main>
          </Suspense>
          {/* <!-- Konten footer --> */}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    )
}