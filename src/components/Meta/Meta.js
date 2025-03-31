import React, { Component } from 'react'
import Helmet from 'react-helmet'


export default class Meta extends Component {
    render() {
      const {
        title,
        description,
        absoluteImageUrl,
        canonicalLink,
        keywords,
        preloadImage,
        // googleTrackingId='',
       
        // overwrite { title, description } if in fields or fields.meta
      } = this.props
  
      return (
        <Helmet>
          {title && <title>{title}</title>}
          {title && <meta property="og:title" content={title} />}
          {description && <meta name="description" content={description} />}
          {keywords && <meta name="keywords" content={keywords} />}
          {preloadImage && <meta name="keywords" content={preloadImage} />}
          {description && <meta property="og:description" content={description} />}
          {canonicalLink && <meta property="og:type" content="Real estate website" />}
          {canonicalLink && <meta property="og:url" content={canonicalLink} />}
          {canonicalLink && <meta name="twitter:site" content={canonicalLink} />}
          {canonicalLink && <link rel="canonical" href={canonicalLink} />}
          
          {title && <meta property="og:locale" content="sv_SE" /> }
          {title && <meta property="og:site_name" content={title} /> }
          {description && <meta property="twitter:description" content={description} />}
          
          {title && <meta property="twitter:title" content={title} />}
          {absoluteImageUrl && <meta name="twitter:image" content={absoluteImageUrl} />}
          {absoluteImageUrl && <meta property="og:image:secure_url" content={absoluteImageUrl} />}
          {absoluteImageUrl && <meta property="og:image" content={absoluteImageUrl} />}
          {title &&<meta name="twitter:card" content="summary" /> }

          {preloadImage && <link rel="preload" as="image" href={preloadImage}></link> }
          {/* <meta name="geo.region" content="SE" /> 
          <meta name="geo.placename" content="" />
          <meta name="geo.position" content="57.7210;12.9398" />
          <meta name="ICBM" content="57.7210, 12.9398" /> */}
  
          {/* <meta name="google-site-verification" content="" /> */}
          
          {/* googleTrackingId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
          />
        )
        }

        {googleTrackingId && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTrackingId}');
            `}
          </script>
        )*/}
      </Helmet>
    )
}
}
