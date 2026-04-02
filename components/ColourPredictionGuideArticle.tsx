import Link from 'next/link';

type Variant = 'dark' | 'light';

export default function ColourPredictionGuideArticle({
  variant = 'dark',
  responsibleHref = '/responsible-gaming',
}: {
  variant?: Variant;
  /** Internal link for “responsible” help (varies by site). */
  responsibleHref?: string;
}) {
  const p = variant === 'dark' ? 'text-gray-300 leading-relaxed mb-4' : 'text-gray-700 leading-relaxed mb-4';
  const h2 =
    variant === 'dark'
      ? 'text-2xl font-bold text-yellow-400 mt-10 mb-4'
      : 'text-2xl font-bold text-gray-900 mt-10 mb-4';
  const ul = variant === 'dark' ? 'list-disc pl-6 text-gray-300 space-y-2 mb-6' : 'list-disc pl-6 text-gray-700 space-y-2 mb-6';
  const link = variant === 'dark' ? 'text-yellow-400 hover:underline' : 'text-blue-600 hover:underline';

  return (
    <article className="max-w-4xl mx-auto">
      <p className={p}>
        Colour prediction games are simple, fast-paced online games where you try to guess the outcome of the next
        round—often a colour, a number, or a size—before a timer runs out. They are widely discussed on mobile and among
        players in India, often alongside other quick-result formats. This guide explains how these games usually work in
        general terms. It is educational only and does not promote any specific app or outcome.
      </p>

      <h2 className={h2}>Introduction</h2>
      <p className={p}>
        In most colour prediction setups, the screen shows a countdown. Before the countdown ends, you choose an option
        (for example red, green, or violet). When the round closes, the platform displays a result. Your choice is
        compared against that result to see if your prediction was correct. These games are often bundled with wallet-based
        accounts and are popular because each round is short and easy to understand—but they also involve real money where
        betting is allowed, so they deserve a careful, informed approach.
      </p>

      <h2 className={h2}>Basic working mechanism</h2>
      <p className={p}>
        The flow is usually the same across similar products: open the game, wait for the betting window, select your
        option, and confirm within the time limit. After the timer hits zero, the result is generated and shown. You do not
        control the outcome; you only choose your prediction before the window closes. Winnings or losses depend on the
        rules and multipliers that the platform applies to that round.
      </p>
      <ul className={ul}>
        <li>You place a prediction during an open betting period.</li>
        <li>The round closes; a result is displayed according to the platform&apos;s rules.</li>
        <li>Settlement follows the rule table you see in the app (payouts are not described here as fixed or guaranteed).</li>
      </ul>

      <h2 className={h2}>Common game types</h2>
      <p className={p}>
        Names and layouts differ, but several patterns appear often:
      </p>
      <ul className={ul}>
        <li>
          <strong className={variant === 'dark' ? 'text-white' : 'text-gray-900'}>Colour prediction</strong> — Typically
          three colours such as red, green, and violet, each linked to different odds or multipliers in the app.
        </li>
        <li>
          <strong className={variant === 'dark' ? 'text-white' : 'text-gray-900'}>Number (0–9)</strong> — You pick a digit;
          the winning number is announced for that round.
        </li>
        <li>
          <strong className={variant === 'dark' ? 'text-white' : 'text-gray-900'}>Big / small</strong> — You choose whether
          the result will fall in a &quot;big&quot; or &quot;small&quot; band, as defined inside that product.
        </li>
      </ul>
      <p className={p}>
        Always read the in-game help screen: labels, odds, and minimum stakes are set by the operator and can change.
      </p>

      <h2 className={h2}>Platform differences</h2>
      <p className={p}>
        Not every app uses the same timers, odds, or rule text. One platform may offer shorter rounds; another may add
        extra bet types or side games. Fees, limits, and verification steps also vary. Because of that, it is misleading to
        say that &quot;all platforms&quot; work the same way. Treat each app as its own product: read its rules, fee
        schedule, and support options before you add money.
      </p>
      <p className={p}>
        Some platforms, such as{' '}
        <a
          href="https://jaiclubgameofficial.com"
          className={link}
          rel="noopener noreferrer"
        >
          Jai Club
        </a>
        , offer similar game formats for users exploring these options.
      </p>

      <h2 className={h2}>Deposits and access</h2>
      <p className={p}>
        Many services in India allow you to add funds through common methods such as UPI or supported wallets, depending on
        what that platform has integrated. Availability can change by region, bank, and compliance checks. Use only official
        payment screens inside the app or website you trust, keep receipts, and avoid sharing OTPs or passwords with anyone.
      </p>

      <h2 className={h2}>Risks and disclaimer</h2>
      <p className={p}>
        Real-money games can lead to financial loss. Past results do not predict future rounds. There is no reliable way to
        guarantee profit. If you choose to play, use only money you can afford to lose, set personal limits, and take
        breaks. If gaming stops feeling like entertainment, seek help and use responsible-gaming tools where the platform
        provides them.
      </p>
      <p className={p}>
        This article is general information. It is not legal or financial advice. Rules in India differ by state and over
        time; you are responsible for understanding what applies to you.{' '}
        <Link href={responsibleHref} className={link}>
          Responsible gaming resources
        </Link>{' '}
        on this site may help you think about healthy habits.
      </p>
    </article>
  );
}
