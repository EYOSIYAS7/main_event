import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-950 to-yellow-500 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Manage Events{" "}
                <span className="text-yellow-300">Effortlessly</span>
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                Create, manage, and promote your events with our powerful
                platform. Simplify ticketing and maximize attendance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-white/90"
                >
                  Create Event
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Explore Events
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-0 right-0 w-full h-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
                  <div className="p-6">
                    <div className="bg-white/20 h-40 rounded-lg mb-4 animate-pulse"></div>
                    <div className="bg-white/20 h-6 rounded-lg mb-3 w-3/4"></div>
                    <div className="bg-white/20 h-6 rounded-lg mb-3 w-1/2"></div>
                    <div className="bg-white/20 h-6 rounded-lg w-2/3"></div>
                    <div className="mt-6 flex gap-3">
                      <div className="bg-purple-500 h-10 w-24 rounded-lg"></div>
                      <div className="bg-white/20 h-10 w-24 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Eventast
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy Event Creation",
                description:
                  "Create beautiful event pages in minutes with our intuitive tools.",
                icon: "✨",
              },
              {
                title: "Smart Ticketing",
                description:
                  "Manage tickets, track sales, and optimize your pricing strategy.",
                icon: "🎟️",
              },
              {
                title: "Powerful Analytics",
                description:
                  "Gain insights into attendee behavior and event performance.",
                icon: "📊",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Button
              variant="ghost"
              className="text-purple-600 hover:text-purple-700"
            >
              View All
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                      {["Music", "Tech", "Art"][index]}
                    </div>
                    <div className="text-sm text-gray-500">
                      {["Jun 15", "Jul 22", "Aug 10"][index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {
                      [
                        "Summer Music Festival",
                        "Tech Conference 2023",
                        "Art Exhibition",
                      ][index]
                    }
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {
                      [
                        "Join us for an unforgettable night of music and fun.",
                        "Learn from industry experts and network with peers.",
                        "Experience stunning artwork from emerging artists.",
                      ][index]
                    }
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to host your next event?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of event organizers who trust Eventast for their
            event management needs.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started for Free
          </Button>
        </div>
      </section>
    </main>
  );
}
