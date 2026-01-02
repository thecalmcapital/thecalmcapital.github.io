
import React from 'react';
import { Compass, Scale, Landmark, BookOpen, Layers, ShieldAlert, Gavel, Lock, User } from 'lucide-react';

export const MODULES = [
  {
    id: 'home',
    title: 'The Indian Investor\'s Dilemma',
    subtitle: 'Structural Roadblocks to Wealth Preservation',
    icon: 'Compass',
    readTime: "15 min read",
    content: {
      openingContext: "The trajectory of the Indian economy is widely regarded as one of the most compelling growth stories of the 21st century. India is projected to be a $5 trillion economy by the latter half of this decade, driven by favorable demographics, digital public infrastructure, and a manufacturing renaissance. However, a profound and persistent disconnect exists between the nation's macroeconomic success and the financial outcomes of the average Indian household. While the Sensex has compounded at approximately 14-15% annually over the last 30 years, the median retail investor often realizes returns that barely match inflation. This discrepancy is not accidental; it is structural. This module examines the unique structural, cultural, and behavioral challenges that impede the Indian investor from becoming a prudent allocator of capital.",
      chapters: [
        {
          heading: "I. The Paradox of Thrift: High Savings, Negative Real Yields",
          body: `Culturally, India is a nation of savers. The household savings rate has historically hovered between 18% and 25% of GDP, peaking at over 30% in the early 2010s. This is a formidable economic asset. Yet, the deployment efficiency of these savings is alarmingly low. The average Indian investor fundamentally confuses "Saving" (the act of setting money aside) with "Investing" (the act of deploying capital to generate real returns).

          A vast majority of household financial assets are parked in savings accounts, low-yield fixed deposits (FDs), or traditional insurance policies (Endowment/Money-back schemes). While these instruments offer the psychological comfort of nominal safety, they fail to account for India's structurally high inflation. This preference for nominal safety is a legacy of the pre-1991 liberalization era, where interest rates were administratively set high, and the state guaranteed returns, masking the inefficiency of capital.

          Consider the mathematics of a Fixed Deposit yielding 7% per annum. For an investor in the 30% tax bracket, the post-tax return is approximately 4.9%. If retail inflation (CPI) is averaging 6%, the investor is suffering a **negative real return of 1.1%** every year. Over a 20-year period, this results in a significant destruction of purchasing power. This is not wealth preservation; it is the slow, guaranteed erosion of capital disguised as prudence.`
        },
        {
          heading: "II. The Cultural Fixation: The Dead Capital of Gold",
          body: `The Indian psyche is deeply wedded to tangible assets, with Gold sitting at the apex of cultural hierarchy. India is consistently one of the world's largest importers of gold. However, structurally, physical gold is "unproductive capital." Unlike a business that produces goods or services, or a bond that pays interest, gold sits idle. Its value is derived entirely from the hope that someone else will pay more for it in the future (the Greater Fool Theory) or as a hedge against currency failure.

          Furthermore, the acquisition cost of physical gold in India is highly inefficient. By locking a significant percentage of net worth in jewelry—which carries high "making charges" (often 10-20% of value) that are lost immediately upon purchase—the Indian household creates a massive drag on its portfolio performance.

          While Sovereign Gold Bonds (SGBs) have mitigated some of these issues by offering interest (2.5%) and tax benefits, the vast majority of Indian gold holding remains physical. While gold acts as a stabilizer during times of extreme geopolitical distress, an over-allocation (exceeding 10-15%) acts as an anchor, dragging down the overall portfolio return below the rate of nominal GDP growth.`
        },
        {
          heading: "III. The Real Estate Trap: Illiquidity and Concentration",
          body: `If Gold is the cultural anchor, Real Estate is the aspirational one. For decades, particularly between 2002 and 2012, Indian real estate offered outsized returns due to rapid urbanization and easy credit. However, the market has matured, and the risks are now structural and severe. The belief that "Real Estate never goes down" is a cognitive error born from a lack of mark-to-market pricing.

          The structural risks specific to Indian Real Estate include:
          1. **Indivisibility:** You cannot sell a "bedroom" to pay for a medical emergency. Real estate is binary; you sell all or nothing.
          2. **Illiquidity:** Finding a buyer at a fair price can take months or years, especially in a stagnant market (as seen between 2014-2020).
          3. **Concentration Risk:** A typical middle-class family often has 80-90% of their net worth tied up in a single apartment, violating the fundamental principle of diversification.
          4. **Rental Yields:** Residential rental yields in Indian metros (Mumbai, Bangalore, Delhi) are abysmal, typically hovering around 2-3%, which is far below the cost of capital (home loan rates of 8-9%).`
        },
        {
          heading: "IV. The Speculative Impulse: The Gamification of Finance",
          body: `With the advent of zero-brokerage platforms and mobile trading apps, a significant portion of new retail investors treat the stock market as a casino rather than a venue for long-term capital allocation. The explosion in Futures & Options (F&O) trading volume is a testament to this dangerous trend.

          A recent SEBI study revealed that **9 out of 10 individual traders in the F&O segment incur net losses.** The average loss per trader is significant. This massive transfer of wealth from retail participants to institutional algorithms and market makers is a tragedy of financial illiteracy. Speculation is not investing; it is entertainment with a negative expected value.`
        },
        {
            heading: "V. The Agency Problem: Sales Disguised as Advice",
            body: `The Indian financial services industry is overwhelmingly dominated by a "Distribution Model," not an "Advisory Model." The relationship manager at your bank or the insurance agent is not a fiduciary. They are agents remunerated via commissions.

            This creates a fundamental Principal-Agent Conflict. The agent is incentivized to recommend products that pay the highest commission to them (often opaque Endowment Plans or ULIPs with high mortality charges), not the products that generate the highest returns for you (such as low-cost Index Funds). Understanding this distinction is the first line of defense for any investor.`
        }
      ],
      behavioralDimension: "The 'Bandwagon Effect' and 'Authority Bias' are particularly potent in the Indian context. Investors often follow the herd into hot asset classes or blindly trust an elder family member or bank manager without due diligence.",
      limitations: ["Cultural pressure to conform often overrides financial logic.", "The regulatory landscape is evolving; enforcement in fraud cases can be slow.", "Access to fee-only SEBI Registered Investment Advisors (RIAs) remains limited."],
      riskStatement: "The greatest risk to the Indian investor is not market volatility, but the permanent stagnation of capital due to inflation, high fees, and emotional decision-making.",
      source: "Analysis based on SEBI Investor Reports, RBI Household Finance Committee Data, and Historical Market Trends."
    }
  },
  {
    id: 'inflation',
    title: 'Inflation & Purchasing Power',
    subtitle: 'The Silent Erosion of Capital',
    icon: 'Scale',
    readTime: "18 min read",
    content: {
      openingContext: "In the architecture of modern economics, inflation is not merely a statistic; it is a structural inevitability. It represents the persistent, non-linear decline in the purchasing power of fiat currency. For the prudent investor, understanding inflation is the first step in capital preservation. It is the invisible adversary that transforms safe 'saving' into guaranteed loss. In a developing economy like India, inflation is structurally higher than in developed markets due to supply-side constraints and monetary dynamics.",
      visualType: 'inflation',
      chapters: [
        { 
            heading: "I. The Mechanics of Currency Devaluation", 
            body: `Inflation acts as a dynamic tax on idle capital. In an economy targeting a 4-6% inflation rate (RBI's mandate), cash held in non-interest-bearing accounts effectively suffers a negative real yield. The distinction between Nominal Returns and Real Returns is the single most critical concept in long-term finance.

            **Real Return = [(1 + Nominal Return) / (1 + Inflation Rate)] - 1**

            If you earn 7% nominally but inflation is 6%, your wealth has essentially grown by less than 1%. If you account for taxes on that interest, you have likely lost wealth. This mathematical reality makes 'safety' in fixed income a dangerous illusion for long-term goals.` 
        },
        { 
            heading: "II. Lifestyle Inflation vs. CPI", 
            body: `A profound error investors make is relying on the Consumer Price Index (CPI) as a personal benchmark. The CPI is a basket of goods that includes food, fuel, and basic necessities. However, the consumption basket of an aspirational middle-class family is vastly different.

            Sectors such as healthcare, higher education, and premium real estate often inflate at rates double the official CPI (often 10-12% annually). This 'Personal Inflation Rate' is the true hurdle rate for your portfolio. If your portfolio is not compounding at 12%+, you may be falling behind your specific future liabilities, even if you are beating the government's inflation numbers.
            
            Education inflation in India is particularly acute. The cost of a medical or engineering degree has historically doubled every 6-7 years. An investment strategy targeting 6% returns is mathematically incapable of funding these future liabilities.` 
        },
        { 
            heading: "III. The Illusion of Safety in Cash", 
            body: `Psychologically, cash feels safe because its nominal value does not fluctuate. A ₹2000 note remains a ₹2000 note. However, in terms of utility, cash is the only asset class guaranteed to lose value over time.

            Stability in cash is the price one pays for the certainty of losing purchasing power. Holding 6-12 months of expenses in cash is 'Liquidity' (which is prudent); holding 10 years of expenses in cash is 'Drag' (which is disastrous). The opportunity cost of holding cash is the difference between the inflation rate and the return of productive assets (equity), which compounded over decades results in massive wealth destruction.` 
        },
        {
            heading: "IV. Taxation as the Second Eraser",
            body: `Inflation and Taxation work in tandem to erode wealth. Interest from Savings Accounts and Fixed Deposits is taxed at your marginal slab rate (which can be 30% or more). This tax is levied on the nominal return, not the real return.
            
            For example, if you earn 7% interest and are in the 30% tax bracket, your post-tax return is 4.9%. If inflation is 5%, your real return is -0.1%. You are paying the government for the privilege of losing purchasing power. Equity and certain debt mutual funds benefit from more favorable taxation structures (LTCG), allowing for better compounding.`
        }
      ],
      behavioralDimension: "The 'Money Illusion' cognitive bias leads individuals to view wealth in nominal terms. A salary hike of 5% feels like progress, even if inflation is 6%. This bias causes a systematic under-allocation to growth assets.",
      limitations: ["Inflation data is retrospective; it tells you what happened, not what will happen.", "Hedging against inflation introduces volatility risk."],
      riskStatement: "Attempting to outpace inflation requires exposure to assets with non-guaranteed outcomes. There is no risk-free mechanism to generate high real returns.",
      source: "RBI Monetary Policy Reports & Standard Macroeconomic Theory."
    }
  },
  {
    id: 'asset-classes',
    title: 'Structural Asset Classes',
    subtitle: 'The Building Blocks of a Portfolio',
    icon: 'BookOpen',
    readTime: "20 min read",
    content: {
      openingContext: "For the Indian investor, shifting focus from 'Stock Selection' (picking the next multi-bagger) to 'Asset Allocation' (deciding how much to put in Equity vs. Debt) is the most significant step toward financial maturity. An asset class is a collection of securities that exhibit similar financial characteristics and behave similarly in the marketplace. The famous 'Brinson Study' attributed over 90% of portfolio variability to asset allocation, rendering stock-picking a secondary concern.",
      visualType: 'assetClass',
      chapters: [
         { 
             heading: "I. Public Equity (The Growth Engine)", 
             body: `Equity represents fractional ownership in a business. Historically, equity has been the only asset class to consistently outpace inflation by a significant margin (generating 4-6% real returns) over periods longer than 10-15 years. In the Indian context, the Nifty 50 and Nifty Next 50 indices provide a diversified proxy for the formal economy.

             **The Volatility Premium:** Equity is volatile. Prices fluctuate daily based on sentiment, liquidity, and earnings. This volatility is not a bug; it is the "risk premium" you capture for providing capital to businesses. If equities were stable, they would yield returns similar to bonds. The investor is paid for enduring the emotional pain of drawdowns.

             For long horizons (>7 years), the probability of negative returns in a broad market index diminishes significantly, approaching zero historically.` 
         },
         { 
             heading: "II. Fixed Income (The Stabilizer)", 
             body: `Fixed Income is lending. You lend money to the Government (G-Secs) or Corporates (Bonds) in exchange for regular interest. Its primary role is **Stability** and **Income**, not wealth generation.

             For Indian households, the danger is over-allocation here (EPF, PPF, FDs). While safe from volatility, fixed income is vulnerable to inflation and interest rate risk. However, it acts as a shock absorber in the portfolio, allowing you to rebalance when equities crash. A portfolio without debt is psychologically difficult to hold during a 40% market correction.` 
         },
         { 
             heading: "III. Gold (The Insurance)", 
             body: `Gold is widely misunderstood. It is not an investment in the productive sense; it is a currency hedge. It performs well when confidence in fiat currency declines or during geopolitical crises. It has zero internal yield (it produces no cash flow).

             In a portfolio, Gold should be viewed as insurance. A 5-10% allocation can reduce portfolio volatility, but high allocations act as a drag on long-term compounding. The Sovereign Gold Bond (SGB) is the most efficient vehicle for Indian investors, eliminating storage costs and offering tax-free redemption.` 
         },
         {
             heading: "IV. Liquid Cash (The Oxygen)",
             body: `Cash offers 'Optionality'—the ability to handle emergencies without disturbing long-term investments. It is the oxygen of the portfolio. Without liquidity, you may be forced to sell productive assets (Equities) at distressed prices during a market crash to fund immediate needs. This turns temporary paper losses into permanent realized losses.`
         }
      ],
      behavioralDimension: "Home Bias leads to over-allocation in domestic assets. Investors overweight assets they can see (Real Estate) or assets from their home country, missing out on global diversification opportunities.",
      limitations: ["Diversification ensures you never hold the top performer in any given year.", "Correlation breakdown in crises—sometimes all asset classes fall together."],
      riskStatement: "There is no sanctuary. Every asset has risk. Equity has Market Risk. Debt has Credit Risk. Cash has Inflation Risk.",
      source: "Modern Portfolio Theory (MPT) & AMFI Guidelines."
    }
  },
  {
    id: 'compounding',
    title: 'The Mechanics of Compounding',
    subtitle: 'Exponential Growth and Continuity',
    icon: 'Landmark',
    readTime: "12 min read",
    content: {
      openingContext: "Compounding is often reduced to the simple platitude of 'money making money.' However, structurally, it is the mathematical manifestation of continuity. It is an exponential function where the primary variable is not the rate of return, but the duration of the holding period. For the Indian investor, accustomed to linear thinking, grasping the non-intuitive nature of exponential growth is the key to generational wealth.",
      visualType: 'compounding',
      chapters: [
        { 
            heading: "I. Geometry of Wealth", 
            body: `The fundamental equation of compounding, **A = P(1 + r)^n**, reveals a non-intuitive truth: wealth accumulation is exponentially sensitive to *n* (time). Doubling the return (r) doubles the outcome, but doubling the time (n) can increase the outcome by factors of ten or twenty.
            
            The 'boring' middle years, where gains seem negligible compared to savings, are the structural foundation required for the exponential explosion in later decades. Warren Buffett accumulated 99% of his wealth after his 50th birthday. This is the power of the exponent. The hardest part of compounding is the first decade, where the results are invisible.` 
        },
        { 
            heading: "II. Variance Drain and Asymmetry", 
            body: `Compounding is structurally fragile. It is destroyed more easily by large losses than it is helped by large gains. This is because a 50% loss requires a 100% gain just to break even.
            
            A portfolio that generates a steady 12% return will vastly outperform a portfolio that oscillates violently between +50% and -40%, even if their average arithmetic returns look similar. This is why "Risk Management" is actually "Compounding Protection." Minimizing large drawdowns is mathematically more important than maximizing upside.` 
        },
        {
            heading: "III. The Cost of Interruption",
            body: `The greatest enemy of compounding is interruption. In the Indian context, this often manifests as stopping SIPs (Systematic Investment Plans) during a market correction. When you stop investing during a downturn, you are not protecting capital; you are eliminating the opportunity to lower your average cost of acquisition.

            Uninterrupted compounding requires a portfolio that is robust enough to let you sleep at night so that you are never forced to sell at the bottom. Volatility is the price you pay for performance; panic is the penalty you pay for ignorance.`
        }
      ],
      behavioralDimension: "Impatience is the behavioral manifestation of our linear bias. We seek immediate feedback and consistent upward progress. Compounding offers neither in the short term.",
      limitations: ["Compounding assumes reinvestment of dividends and interest.", "Real markets have sequence-of-returns risk.", "Taxes and fees compound negatively."],
      riskStatement: "Compounding magnifies everything. Debt compounds. Fees compound. Inflation compounds. It is a double-edged sword.",
      source: "Research by Javier Estrada & Morgan Housel."
    }
  },
  {
    id: 'risk',
    title: 'Risk & Volatility',
    subtitle: 'Distinguishing Fluctuation from Failure',
    icon: 'ShieldAlert',
    readTime: "14 min read",
    content: {
      openingContext: "In the lexicon of The Calm Capital, 'Risk' is distinct from 'Volatility.' The financial media uses these terms interchangeably, but they are fundamentally different. Volatility is the emotional price of admission; Risk is the permanent destruction of capital. Understanding this nuance allows the investor to remain calm when the screen is red.",
      visualType: 'risk',
      chapters: [
         { 
             heading: "I. Defining True Risk", 
             body: `Institutional investors define risk as the probability of permanent capital impairment or **Shortfall Risk** (failing to meet liabilities), not daily price movement. If your portfolio drops 20% but you don't sell, you have experienced volatility, not loss. If you panic and sell, you have converted volatility into a permanent loss.
             
             True risk involves:
             1. **Permanent Loss:** Buying a fraudulent company that goes to zero.
             2. **Inflation Risk:** Being too safe and losing purchasing power.
             3. **Behavioral Risk:** Selling at the bottom due to panic.` 
         },
         { 
             heading: "II. Sequence of Returns Risk", 
             body: `The order in which returns happen matters, especially during the withdrawal phase (Retirement). A market crash early in retirement can deplete the corpus too quickly, leading to money running out. This necessitates a 'Glide Path'—gradually shifting from Equity to Debt as the goal approaches. You cannot hold 100% equity when you need the money next year.` 
         },
         {
             heading: "III. The Behavioral Gap",
             body: `Carl Richards coined the term 'Behavior Gap' to describe the difference between Investment Returns (what the market gives) and Investor Returns (what the person actually gets). The gap is caused by buying high (greed) and selling low (fear). The greatest risk to your wealth is not the market; it is the person in the mirror.`
         }
      ],
      behavioralDimension: "Loss Aversion causes investors to feel the pain of a loss twice as intensely as the pleasure of an equivalent gain. This leads to defensive decision-making that harms long-term results.",
      limitations: ["Standard Deviation (Volatility) assumes normal distribution, ignoring 'Fat Tails' (Black Swans).", "Risk capacity (financial ability to take loss) is often confused with Risk Tolerance (emotional ability to take loss)."],
      riskStatement: "We manage probabilities, we do not predict futures. The future is unknown and unknowable.",
      source: "Howard Marks' 'The Most Important Thing' & Nassim Taleb's 'Incerto'."
    }
  },
  {
    id: 'terms',
    title: 'Terms of Service & Disclaimer',
    subtitle: 'Legal Framework and Usage Guidelines',
    icon: 'Gavel',
    readTime: "8 min read",
    content: {
      openingContext: "Access to The Calm Capital is subject to the following terms. By using this platform, you acknowledge that you have read, understood, and agreed to these conditions. This platform is an educational initiative and does not provide financial services.",
      chapters: [
        {
          heading: "1. Educational Purpose Only",
          body: `The content provided on The Calm Capital ("The Platform") is strictly for educational and informational purposes. It is designed to explain financial concepts, historical market behavior, and structural risks. It does not constitute, and should not be interpreted as, financial, investment, tax, or legal advice. No content on this site should be viewed as a recommendation to buy or sell any specific security, mutual fund, or insurance product.`
        },
        {
          heading: "2. No Fiduciary Relationship",
          body: `Using this website does not establish a client-advisor or fiduciary relationship between the user and The Calm Capital. We are not a SEBI Registered Investment Advisor (RIA). The information presented may not be suitable for your specific financial situation, risk tolerance, or investment horizon.`
        },
        {
          heading: "3. Assumption of Risk",
          body: `Investing in financial markets involves inherent risks, including the potential loss of principal. Past performance of asset classes or indices is not indicative of future results. The user assumes full responsibility for any financial decisions made. The Platform is not liable for any losses incurred based on the information provided here.`
        },
        {
          heading: "4. Accuracy of Information",
          body: `While every effort is made to ensure the accuracy of the information presented, The Platform makes no warranties, expressed or implied, regarding the completeness, accuracy, or timeliness of the content. Regulatory frameworks (SEBI, RBI) and tax laws are subject to change.`
        }
      ],
      behavioralDimension: "Reading terms helps align expectations regarding the nature of financial information vs. advice.",
      limitations: ["Jurisdiction: India.", "Laws subject to change."],
      riskStatement: "Consult a qualified professional before making financial decisions.",
      source: "Legal Counsel."
    }
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'Data Minimization and Security',
    icon: 'Lock',
    readTime: "5 min read",
    content: {
      openingContext: "We believe in the principle of Data Minimization. We do not collect what we do not need.",
      chapters: [
        {
          heading: "1. No Personal Data Collection",
          body: `The Calm Capital operates as a static, informational website. We do not require account creation, nor do we maintain a database of user profiles, email addresses, or financial data. You interact with this platform anonymously.`
        },
        {
          heading: "2. Local Storage",
          body: `This website may use your browser's 'Local Storage' strictly to remember your interface preferences (such as reading progress or theme settings) between visits. This data is stored entirely on your device and is never transmitted to our servers.`
        },
        {
          heading: "3. Third-Party Infrastructure",
          body: `To deliver this content efficiently, we utilize standard third-party content delivery networks (CDNs) including GitHub Pages (hosting) and ESM.sh (libraries). When your browser loads these resources, your IP address is visible to these infrastructure providers as part of standard internet communication protocols.`
        }
      ],
      behavioralDimension: "Privacy is a right, not a feature.",
      limitations: ["External links are not covered."],
      riskStatement: "We are not responsible for the privacy practices of linked external sites.",
      source: "The Calm Capital Project."
    }
  },
  {
    id: 'about',
    title: 'About The Calm Capital',
    subtitle: 'Mission and Methodology',
    icon: 'User',
    readTime: "5 min read",
    content: {
      openingContext: "The Calm Capital is an institutional-grade knowledge archive designed for the patient Indian investor. It was born from a frustration with the noise, urgency, and gamification that characterizes modern financial media.",
      chapters: [
        {
          heading: "Our Mission",
          body: `To decouple financial education from financial sales. We believe that true wealth preservation requires a calm, historical, and structural understanding of markets, free from the conflict of interest inherent in commission-based distribution. We prioritize clarity over persuasion and structure over opinion.`
        },
        {
          heading: "Who is this for?",
          body: `This platform is built for the 'allocator'—the individual who views money not as a means of consumption, but as a resource to be deployed efficiently over decades. It is for those who seek to understand the 'why' behind the 'what'.`
        }
      ],
      behavioralDimension: "Resisting the urge to react to daily news is a superpower.",
      limitations: ["Static content.", "No personalized advice."],
      riskStatement: "Knowledge is potential power; execution is real power.",
      source: "Project Manifesto."
    }
  }
];
