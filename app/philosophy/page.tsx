export default function PhilosophyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-light dark:text-text-dark mb-6">
                        Our Philosophy
                    </h1>
                    <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                        At ROUNDMART, we believe that design is not just about how things look, but how they work and how they make you feel.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Section 1: Craftsmanship */}
                    <section className="flex flex-col gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark">
                            Uncompromising Craftsmanship
                        </h2>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            We are obsessed with details. From the stitching on our leather goods to the finish on our electronics, every product is a testament to our dedication to quality. We partner with artisans and manufacturers who share our passion for perfection, ensuring that every item you receive meets our rigorous standards.
                        </p>
                    </section>

                    {/* Section 2: Sustainability */}
                    <section className="flex flex-col gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark">
                            Conscious Living
                        </h2>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            We believe in creating products that last. In a world of fast fashion and disposable tech, we champion longevity. By using durable materials and timeless designs, we encourage a lifestyle that values quality over quantity, reducing waste and promoting a more sustainable future.
                        </p>
                    </section>

                    {/* Section 3: Customer First */}
                    <section className="flex flex-col gap-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark">
                            You Are Our Priority
                        </h2>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            Our relationship with you doesn&apos;t end at checkout. We are committed to providing an exceptional experience at every touchpoint. Whether it&apos;s our seamless shopping interface, our secure packaging, or our responsive support team, everything we do is designed with your satisfaction in mind.
                        </p>
                    </section>

                    {/* Quote */}
                    <section className="py-12 border-t border-b border-gray-100 dark:border-gray-800">
                        <blockquote className="text-center">
                            <p className="text-2xl md:text-3xl font-serif italic text-text-light dark:text-text-dark mb-4">
                                &quot;Simplicity is the ultimate sophistication.&quot;
                            </p>
                            <footer className="text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest">
                                — Leonardo da Vinci
                            </footer>
                        </blockquote>
                    </section>
                </div>
            </div>
        </div>
    );
}
