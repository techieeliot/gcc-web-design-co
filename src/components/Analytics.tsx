import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* TODO: implement this in production */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        async
        src={'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
