const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

const pageview = () => {
  window.fbq('track', 'PageView')
}

const event = (name, options = {}) => {
  window.fbq('track', name, options)
}

export {
    event,
    FB_PIXEL_ID,
    pageview
}