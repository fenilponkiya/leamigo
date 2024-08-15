import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAw2sm8WMirEO9GcH2uLKd-XSbCRqbTdCQ&callback=console.debug&libraries=maps,marker&v=beta"
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
