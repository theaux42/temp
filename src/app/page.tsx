"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { Rocket, Coins, TrendingUp, Users, Star, Trophy, Flame, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden geometric-bg">
      {/* Angular Navigation */}
      <nav className="relative border-b-2 border-red-500/30 bg-gradient-to-r from-black via-gray-900/50 to-black backdrop-blur-xl">
        <div className="absolute inset-0 energy-circuit opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
              <div className="relative p-2">
                <img src="/logo.png" alt="Fandoms" className="h-12 w-12 object-contain holographic-glow" />
              </div>
              <h1 className="text-3xl display-font energy-text tracking-wider">FANDOMS</h1>
            </div>

            <div className="flex items-center space-x-6">
              {ready && authenticated && (
                <>
                  <Button variant="ghost" size="sm" asChild className="angular-card hover:scale-105 transition-transform">
                    <Link href="/swap" className="title-font">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      SWAP
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="angular-card hover:scale-105 transition-transform">
                    <Link href="/staking" className="title-font">
                      <Trophy className="h-4 w-4 mr-2" />
                      STAKE
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="angular-card hover:scale-105 transition-transform">
                    <Link href="/tokens" className="title-font">
                      <Coins className="h-4 w-4 mr-2" />
                      TOKENS
                    </Link>
                  </Button>
                  <div className="h-8 w-px bg-red-500/50"></div>
                </>
              )}
              {ready && authenticated ? (
                <>
                  <div className="px-4 py-2 angular-card scoreboard-text title-font text-sm">
                    #{user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}
                  </div>
                  <Button
                    onClick={logout}
                    variant="outline"
                    size="sm"
                    className="angular-card title-font"
                  >
                    DISCONNECT
                  </Button>
                  <Button asChild size="lg" variant="stadium" className="angular-card data-stream">
                    <Link href="/dashboard" className="title-font">
                      <Flame className="h-5 w-5 mr-2" />
                      CREATE TOKEN
                    </Link>
                  </Button>
                </>
              ) : (
                <Button
                  onClick={login}
                  disabled={!ready}
                  className="angular-card data-stream title-font text-lg px-8 py-3"
                  size="lg"
                >
                  <Target className="h-5 w-5 mr-3" />
                  ENTER ARENA
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Arena Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="hexagon-slide">
            <div className="inline-flex items-center space-x-3 angular-card px-8 py-4 mb-12">
              <Star className="h-6 w-6 text-orange-400" />
              <span className="title-font text-lg uppercase tracking-widest">ULTIMATE FAN ARENA</span>
              <Star className="h-6 w-6 text-red-400" />
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl display-font mb-8 leading-none">
              <span className="energy-text block mb-4">ARENA</span>
              <span className="text-white block">DOMINANCE</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed body-font">
              Transform your fandom into <span className="energy-text title-font font-bold">unstoppable power</span>.
              Create memecoins that ignite communities, fuel exclusive experiences, and turn passion into
              <span className="text-orange-400 title-font font-bold"> legendary profits</span> in the most advanced crypto arena.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              {ready && authenticated ? (
                <Button asChild size="xl" variant="stadium" className="angular-card data-stream group">
                  <Link href="/dashboard" className="title-font text-xl">
                    <Rocket className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                    LAUNCH TOKEN
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={login}
                  disabled={!ready}
                  size="xl"
                  variant="stadium"
                  className="angular-card data-stream group title-font text-xl"
                >
                  <Target className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  ENTER ARENA
                </Button>
              )}
              <Button variant="outline" size="xl" asChild className="angular-card group title-font text-xl">
                <Link href="/tokens">
                  <Trophy className="h-6 w-6 mr-3 group-hover:rotate-6 transition-transform" />
                  EXPLORE CHAMPIONS
                </Link>
              </Button>
            </div>
          </div>

          {/* Arena Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="angular-card p-8 group hover:scale-105 transition-all duration-500 data-stream">
              <div className="flex justify-center mb-6">
                <div className="p-6 angular-card holographic-glow">
                  <Rocket className="h-10 w-10 text-red-400 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <h3 className="text-2xl title-font mb-4 energy-text">INSTANT CREATION</h3>
              <p className="text-gray-400 leading-relaxed body-font text-lg">
                Deploy your memecoin in seconds with military-grade precision.
                Name, symbol, image, liquidity - dominate the arena instantly.
              </p>
            </div>

            <div className="angular-card p-8 group hover:scale-105 transition-all duration-500 data-stream">
              <div className="flex justify-center mb-6">
                <div className="p-6 angular-card holographic-glow">
                  <TrendingUp className="h-10 w-10 text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className="text-2xl title-font mb-4 energy-text">LIGHTNING TRADING</h3>
              <p className="text-gray-400 leading-relaxed body-font text-lg">
                Execute trades with championship speed and precision.
                Feel the electricity of every swap in our premium arena.
              </p>
            </div>

            <div className="angular-card p-8 group hover:scale-105 transition-all duration-500 data-stream">
              <div className="flex justify-center mb-6">
                <div className="p-6 angular-card holographic-glow">
                  <Users className="h-10 w-10 text-red-400 group-hover:bounce transition-all" />
                </div>
              </div>
              <h3 className="text-2xl title-font mb-4 energy-text">ELITE REWARDS</h3>
              <p className="text-gray-400 leading-relaxed body-font text-lg">
                Stake your tokens and earn championship dividends. Join the elite circle
                of fans who convert loyalty into legendary wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arena Statistics */}
      <section className="py-20 relative">
        <div className="absolute inset-0 energy-circuit opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl display-font energy-text mb-6">ARENA METRICS</h2>
            <p className="text-2xl text-gray-300 title-font">Live championship data</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="angular-card p-10 group hover:scale-105 transition-all duration-300 data-stream">
              <div className="text-7xl display-font energy-text mb-4 scoreboard-text holographic-glow">0.5%</div>
              <div className="text-gray-400 title-font text-xl uppercase tracking-wider mb-2">Trading Fees</div>
              <div className="text-orange-400 body-font">Championship rates</div>
            </div>
            <div className="angular-card p-10 group hover:scale-105 transition-all duration-300 data-stream">
              <div className="text-7xl display-font energy-text mb-4 scoreboard-text holographic-glow">8%</div>
              <div className="text-gray-400 title-font text-xl uppercase tracking-wider mb-2">Staking APY</div>
              <div className="text-red-400 body-font">Elite rewards</div>
            </div>
            <div className="angular-card p-10 group hover:scale-105 transition-all duration-300 data-stream">
              <div className="text-7xl display-font energy-text mb-4 scoreboard-text holographic-glow">15%</div>
              <div className="text-gray-400 title-font text-xl uppercase tracking-wider mb-2">Revenue Share</div>
              <div className="text-orange-400 body-font">Champion profits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Arena Footer */}
      <footer className="border-t-2 border-red-500/30 bg-gradient-to-r from-black via-gray-900/50 to-black backdrop-blur-xl py-16 relative">
        <div className="absolute inset-0 energy-circuit opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img src="/logo.png" alt="Fandoms" className="h-10 w-10 object-contain holographic-glow" />
              </div>
              <span className="text-2xl display-font energy-text">FANDOMS</span>
            </div>
            <div className="mt-6 md:mt-0 text-gray-400 body-font text-lg">
              © 2025 Fandoms Arena. All championships reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
