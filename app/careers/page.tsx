export default function CareersPage() {
    const positions = [
        {
            title: "Senior Product Designer",
            department: "Design",
            location: "Remote / Bangalore",
            type: "Full-time",
        },
        {
            title: "Frontend Engineer (Next.js)",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
        },
        {
            title: "Marketing Specialist",
            department: "Marketing",
            location: "Mumbai",
            type: "Full-time",
        },
        {
            title: "Customer Success Lead",
            department: "Support",
            location: "Remote",
            type: "Full-time",
        },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-light dark:text-text-dark mb-6">
                        Join the Revolution
                    </h1>
                    <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto leading-relaxed">
                        We&apos;re building the future of premium e-commerce. If you&apos;re passionate about design, technology, and creating exceptional experiences, we want to hear from you.
                    </p>
                </div>

                {/* Why Join Us */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        { icon: "rocket_launch", title: "Impact", desc: "Work on products that shape the industry." },
                        { icon: "diversity_3", title: "Culture", desc: "A collaborative, inclusive, and creative environment." },
                        { icon: "trending_up", title: "Growth", desc: "Continuous learning and career development opportunities." },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 dark:bg-white/5">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
                            <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">{item.title}</h3>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Open Positions */}
                <div>
                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8 text-center">Open Positions</h2>
                    <div className="grid gap-4 max-w-4xl mx-auto">
                        {positions.map((job, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white dark:bg-card-dark group">
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                                        <span>{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-text-light dark:text-text-dark font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
