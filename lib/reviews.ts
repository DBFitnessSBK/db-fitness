export type Review = {
  name: string
  rating: number
  date: string
  /** ISO date (YYYY-MM-DD) for structured data / machine consumption. */
  isoDate: string
  link: string
  image: string | null
  text: string
}

export const REVIEWS: Review[] = [
  {
    name: 'Insa',
    rating: 5,
    date: 'Mai 2026',
    isoDate: '2026-05-01',
    link: 'https://maps.app.goo.gl/nQmW3ioZCAAAuBn99',
    image: '/reviews/insa.jpg',
    text: 'Ein tolles Trainerteam, es gibt viele verschiedene Kurse zu verschiedenen Zeiten, somit gibt es keine Ausrede keinen Sport zu machen 😉. Auch als Anfänger ist man bei DB Fitness sehr gut aufgehoben. Ich kann es nur empfehlen, es macht süchtig !! …',
  },
  {
    name: 'Melina',
    rating: 5,
    date: 'Mai 2026',
    isoDate: '2026-05-01',
    link: 'https://maps.app.goo.gl/wsXkxGXxeJWwXwFUA',
    image: null,
    text: 'Seit inzwischen drei Jahren besuche ich die Kurse und bin nach wie vor sehr zufrieden. Die Übungen sind zwar oft anstrengend und fordernd, aber genau das macht das Training effektiv – und gleichzeitig macht es auch wirklich Spaß. Besonders positiv finde ich, dass immer auf die Teilnehmer eingegangen wird. Übungen werden bei Bedarf individuell angepasst, sodass wirklich jeder mitmachen kann, unabhängig vom Fitnesslevel. Die Atmosphäre ist außerdem sehr angenehm, alle sind freundlich und motivierend. Ein großes Lob an Daniel und Steffi – man fühlt sich bei euch einfach gut aufgehoben. Absolute Empfehlung!',
  },
  {
    name: 'Silke',
    rating: 5,
    date: 'August 2024',
    isoDate: '2024-08-01',
    link: 'https://maps.app.goo.gl/B8LT784UVpg2e76w9',
    image: '/reviews/silke.jpg',
    text: 'Super Training, super Kommunikation – leistungsgerecht und herausfordernd zugleich. Tolles Trainerteam, seit 3,5 Jahren dabei.',
  },
]

// `REVIEWS` above are a hand-picked subset shown on the page. The aggregate
// below reflects the business's genuine all-time Google rating across ALL
// reviews — keep these in sync with the Google Business Profile.
export const GOOGLE_RATING = 4.9
export const GOOGLE_REVIEW_COUNT = 43
