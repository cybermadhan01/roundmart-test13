export default function AboutPage() {
    return (
        <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Hero Section */}
                <div className="flex flex-col gap-6 text-center items-center justify-center mb-16 md:mb-24">
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                            Designing the Future of Connection.
                        </h1>
                        <h2 className="text-base md:text-lg font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                            We believe in creating products that are not only beautiful but also deeply integrated into your life, making every interaction a seamless and intuitive experience.
                        </h2>
                    </div>
                </div>

                {/* Timeline Section */}
                <section className="flex flex-col gap-8 mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">Our Journey</h2>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6">
                        {/* 2018 */}
                        <div className="flex flex-col items-center gap-2 pt-3">
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">lightbulb</span>
                            </div>
                            <div className="w-px bg-border-light dark:bg-border-dark h-full"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-10 pt-3">
                            <p className="text-base font-semibold leading-normal">2018</p>
                            <p className="text-lg font-medium leading-normal">The Spark of an Idea</p>
                            <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mt-1">
                                Our founders, united by a passion for minimalist design and powerful technology, envisioned a new kind of connected device.
                            </p>
                        </div>

                        {/* 2019 */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-px bg-border-light dark:bg-border-dark h-full"></div>
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">category</span>
                            </div>
                            <div className="w-px bg-border-light dark:bg-border-dark h-full"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-10">
                            <p className="text-base font-semibold leading-normal">2019</p>
                            <p className="text-lg font-medium leading-normal">First Prototype Built</p>
                            <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mt-1">
                                After countless hours of iteration and refinement in a small garage, the first functional ROUNDMART prototype came to life.
                            </p>
                        </div>

                        {/* 2020 */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-px bg-border-light dark:bg-border-dark h-full"></div>
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </div>
                            <div className="w-px bg-border-light dark:bg-border-dark h-full"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-10">
                            <p className="text-base font-semibold leading-normal">2020</p>
                            <p className="text-lg font-medium leading-normal">Launched to the World</p>
                            <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mt-1">
                                ROUNDMART officially launched, capturing the attention of tech enthusiasts and design lovers with its unique approach to hardware.
                            </p>
                        </div>

                        {/* 2022 */}
                        <div className="flex flex-col items-center gap-2 pb-3">
                            <div className="w-px bg-border-light dark:bg-border-dark h-full"></div>
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">emoji_events</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <p className="text-base font-semibold leading-normal">2022</p>
                            <p className="text-lg font-medium leading-normal">Reached 1 Million Users</p>
                            <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mt-1">
                                Celebrating a major milestone, the ROUNDMART community grew to over one million users, validating our vision for connected living.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="flex flex-col gap-8 md:gap-12 items-center mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                        <div className="flex flex-col gap-4 p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
                            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl">design_services</span>
                            </div>
                            <h3 className="text-lg font-bold">Innovative Design</h3>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                We push the boundaries of what&apos;s possible, merging aesthetics with functionality to create products that are a joy to use.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
                            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl">verified</span>
                            </div>
                            <h3 className="text-lg font-bold">Commitment to Quality</h3>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                From the materials we source to the software we write, every detail is meticulously crafted for durability and performance.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm">
                            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
                            </div>
                            <h3 className="text-lg font-bold">Customer-Centric Focus</h3>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                Our users are at the heart of everything we do. We listen, we learn, and we build to enrich their lives.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="flex flex-col gap-8 md:gap-12 items-center mb-16">
                    <div className="flex flex-col gap-2 text-center max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">Meet the Innovators</h2>
                        <p className="text-base md:text-lg text-text-secondary-light dark:text-text-secondary-dark">
                            The passionate minds behind ROUNDMART, dedicated to crafting the future of technology.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
                        {[
                            { name: "Alex Johnson", role: "Co-Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQsIEHiHw8UQASGV2xx6qq-m4oEl7N9lBFtG8M99XzTlTvbpojoGRwInYXFXI5u6d12tiSQHDTUQWWrcjtwcLbvlXqO012Xhd5Opuh6KZOCmnWbl_8UtKRfpCKLsUPiIdbHEdoXZ7jRGvE8uZ5UtI4VdkDVBh7JpNRhQfvJtck2mgoMZF2WAnnY19lItp_sV-6V_BUGDIRNvmaQr70_DcHJut4PxHHlqRGN2GTzHoz1yhDRg-Ge5Vh-Ef8dNuZsfJlkgXIqEzYyjL1" },
                            { name: "Maria Garcia", role: "Co-Founder & Head of Design", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1xE5YHedOO1Fe7_JWmcdiCl8TdfJTWr5x8sKg6TEhMU3tIoTWkioolg_7Q5OqRpxHI6p4jojtSPRxlVcOMmnGFNCiQTc-Neu622zCqyyAeln5IIfEPVvxQuBrEcPjeR1ZstQyjsr00V3f7xHAFCpScwLKxtz72wbGBEIgJMzLN92J3e5Sy10SMHg618dGZYORW4V3A66X-B7KckYXYOIBucJ01rh4X6yAkmMW0dLvJ_8FwhZj4GKzLJPsGYrFYpTxM_tyvqjKMv5H" },
                            { name: "Chen Wei", role: "Lead Engineer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaiQnFByGSh3aeGXjOxNd1l3AthQaFOiLoavoKcG6U36k4MEQQUnOMssKp_fw-zKaveaomudKRUjVim4CqD2LhQtpghysGKn_b8jY38yDGACrTWIF_ooAdZVGKVnmqLNv6EXgM2lIfy2aqWKPtuTcC7UNQWOqjIzHN-H9vjCRWhcJkaIDBEHdDlOFUVxNAaMGSDoCdm1NaHJm5vTSG1HRNL5tDABfzUFQ-aeUChOMTz1TWsol3qReA9bMj6qPICSM7PukVYX98XB0l" },
                            { name: "Emily Carter", role: "Head of Product", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4P6BTRSULbUiAtrDOtmL7_hV7LfULW7yzsQEyGycYqZ2t3DCim14ctZCtZ8kIBPbv-bUHvJ0rof-GYyBKaQuDFgO53T4fMeKtEqqwK3a47S1x8RIT0lNC_Uw-gOHrAkW8oFw_5Rzr44kFMIw3N2rmccuj4kOccqlxsAx5ostd0P8Nig5CdgIfB3gfHjc_hi5ttS1HmHyM-9NvZsNW6kPJD2b9vZT-NCAKnXm7AsQPfj2BTSosugMatUdPBJKfy9al3vhc-vTz4ZUn" }
                        ].map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-3">
                                <img className="w-full aspect-square rounded-full object-cover" src={member.img} alt={member.name} />
                                <div>
                                    <h4 className="font-bold">{member.name}</h4>
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="w-full p-8 md:p-12 bg-card-light dark:bg-card-dark rounded-xl flex flex-col items-center text-center gap-6 border border-border-light dark:border-border-dark">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">Join Our Journey</h2>
                    <p className="max-w-xl text-text-secondary-light dark:text-text-secondary-dark">
                        We&apos;re always looking for talented individuals to help us shape the future. Explore our open positions and find where you fit in.
                    </p>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                        <span className="truncate">View Careers</span>
                    </button>
                </section>
            </div>
        </main>
    );
}
