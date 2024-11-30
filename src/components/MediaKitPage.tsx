import React from 'react';
import { MapPin, Send, Twitch, Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

const StatCard = dynamic(() => import('./TwitchStats'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-64 bg-gray-100 rounded"></div>
      </div>
    </div>
  )
});

// Mock data for Twitch stats
const generateMonthlyData = (baseValue: number) => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
    value: Math.floor(Math.random() * baseValue) + baseValue/2
  }));
};

const MediaKitPage = () => {
  const stats = {
    followers: generateMonthlyData(1000),
    hours: generateMonthlyData(100),
    viewers: generateMonthlyData(50),
    subscribers: generateMonthlyData(200)
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQGjH1OT3aSOSg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516804970552?e=2147483647&v=beta&t=_huUtrxpvp9VnAFQditdBNC0dlUQNe27CphFugRuLmU"
            alt="Profile"
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg w-32 h-32 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Ylan "yav1N" Arfi</h1>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Montreal 🇨🇦</span>
          </div>
          <p className="text-xl font-semibold text-purple-600 mb-4">
            2.5K Total Followers
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Professional content creator and streamer specializing in gaming and entertainment.
            Bringing engaging content to millions of viewers across multiple platforms.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://twitch.tv/username"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              title="Twitch"
            >
              <Twitch className="w-6 h-6" />
            </a>
            <a
              href="https://threads.net/username"
              className="text-gray-400 hover:text-black transition-colors"
              title="Threads"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/username"
              className="text-gray-400 hover:text-pink-600 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/username"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/username"
              className="text-gray-400 hover:text-red-600 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Twitch Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Twitch Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard title="Total Followers" data={stats.followers} />
            <StatCard title="Hours Streamed" data={stats.hours} />
            <StatCard title="Average Viewers" data={stats.viewers} />
            <StatCard title="Active Subscribers" data={stats.subscribers} />
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                year: '2024',
                title: 'Lead Content Creator',
                description: 'Created and managed content strategy across multiple platforms',
              },
              {
                year: '2023',
                title: 'Gaming Ambassador',
                description: 'Represented major gaming brands in international events',
              },
              {
                year: '2022',
                title: 'Twitch Partner',
                description: 'Achieved partner status and grew community to 100k followers',
              },
            ].map((exp, index) => (
              <div key={index} className="flex mb-8">
                <div className="w-24 text-right pr-8">
                  <span className="font-bold text-purple-600">{exp.year}</span>
                </div>
                <div className="w-px bg-purple-200 relative">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-0" />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="font-bold text-xl mb-2">{exp.title}</h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Partnerships</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { 
                brand: 'Corsair',
                year: '2024',
                logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbui0hz-ec49df28-2bdd-4bca-aacd-24a9258d12de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5ODE0MmFjLWY0MTAtNDIzYS1iZjBiLTM0YzljYjVkOTYwOVwvZGJ1aTBoei1lYzQ5ZGYyOC0yYmRkLTRiY2EtYWFjZC0yNGE5MjU4ZDEyZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GNuQN1HT1cPYG55aTF8X-QdZNtCsq3rADJ54ZTU5WiE'
              },
              { 
                brand: 'Elgato',
                year: '2023',
                logo: 'https://yt3.googleusercontent.com/H4xqlSLLeE-Q88bfClLCz2vPuJ3l3SbBgpCE7ch7SB26IwlSwJSGJVjcvjKd6PE-E16cTt7MVv4=s900-c-k-c0x00ffffff-no-rj'
              },
              { 
                brand: 'Logitech',
                year: '2022',
                logo: 'https://pbs.twimg.com/profile_images/1652573221852688384/uxZo-9KD_400x400.jpg'
              },
            ].map((partner, index) => (
              <div key={index} className="flex mb-8">
                <div className="w-24 text-right pr-8">
                  <span className="font-bold text-purple-600">{partner.year}</span>
                </div>
                <div className="w-px bg-purple-200 relative">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-0" />
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow p-4">
                    <img
                      src={partner.logo}
                      alt={partner.brand}
                      className="h-12 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaKitPage;