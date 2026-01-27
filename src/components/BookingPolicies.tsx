import { Clock, CreditCard, Timer, DollarSign } from 'lucide-react';

const policies = [
  {
    icon: Clock,
    title: 'Cancellation',
    shortDesc: 'Please notify us in advance',
    fullPolicy: 'Cancellations must be made at least 24 hours before your scheduled appointment. Cancellations made within 24 hours of the appointment will be charged 50% of the service price.'
  },
  {
    icon: CreditCard,
    title: 'Payment',
    shortDesc: 'Multiple payment options available',
    fullPolicy: 'A valid credit card is required to secure your appointment. Payment is due in full at the time of service. We accept cash, credit cards, and digital payment methods.'
  },
  {
    icon: Timer,
    title: 'Arrive on Time',
    shortDesc: 'Be punctual for your appointment',
    fullPolicy: 'Please arrive on time for your appointment. If you are more than 10 minutes late, your appointment will need to be rescheduled. If you anticipate being late, please call ahead so we can try to accommodate you.'
  },
  {
    icon: DollarSign,
    title: 'Refunds',
    shortDesc: 'Your satisfaction is our priority',
    fullPolicy: 'All service sales are final. We do not offer refunds for services rendered. If you are not satisfied with your service, please let us know within 48 hours, and we will do our best to address your concerns.'
  }
];

export default function BookingPolicies() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-stone-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-6xl md:text-7xl font-light text-stone-800 mb-4">
            Booking Policies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mx-auto mb-6" />
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Please review our policies to ensure a smooth and enjoyable experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 shadow-lg border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden h-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                      <Icon className="w-10 h-10 text-amber-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl text-stone-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                    {policy.title}
                  </h3>

                  <div className="relative flex-1 overflow-hidden">
                    <p className="text-stone-600 font-light leading-relaxed absolute inset-0 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4">
                      {policy.shortDesc}
                    </p>

                    <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 overflow-y-auto">
                      <p className="text-stone-700 text-sm leading-relaxed">
                        {policy.fullPolicy}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <p className="text-amber-600 text-sm font-medium">Hover for details</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-50 via-stone-50 to-amber-50 rounded-3xl p-12 shadow-lg border border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl text-stone-800 mb-4">
              Questions About Our Policies?
            </h3>
            <p className="text-stone-600 font-light mb-6 leading-relaxed">
              We're here to help! If you have any questions or concerns about our booking policies,
              please don't hesitate to reach out. We want to ensure you have the best experience possible.
            </p>
            <button className="group relative px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 font-light tracking-wide">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
