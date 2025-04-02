import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-40 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/paylia-full-logo.svg"
          alt="Next.js logo"
          width={300}
          height={50}
          priority
        />
        <div className="space-y-6 list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p>
            West Africa has{" "}
            <b>
              420M consumers and 50M merchants, yet 90% of transactions still
              happen in cash
            </b>
            . Merchants drive 90% of the economy, but most lack access to formal
            financial services. Meanwhile, mobile penetration is 75%, and Africa
            leads the world in mobile money adoption.
          </p>
          <div className="space-y-2">
            <p>
              Paylia for Business is the all-in-one mobile finance app that
              finally connects merchants to every mobile money and bank payment
              service in their country. With Paylia, businesses can:
            </p>
            <ul>
              <li>✅ Accept multiple payment methods</li>
              <li>✅ Generate payment links for online orders or pickups</li>
              <li>
                ✅ Track sales, transaction history, and performance metrics
              </li>
            </ul>
          </div>
          <p>
            <b>
              No more segmented payment systems. No more cash-in/cash-out fees.
              No more long queues.
            </b>{" "}
            Paylia empowers merchants to transact without friction — bringing
            financial inclusion to where it’s needed most.
          </p>
        </div>

        <div className="flex items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://pitch.com/v/paylia-wallet-info-deck-t9au2t"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deck
          </a>
        </div>
      </main>
    </div>
  );
}
