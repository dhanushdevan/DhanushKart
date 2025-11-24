
import React, { useState } from "react";
import "./contactpage.css";

const ContactPage: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            // Simulate async submit. Replace with real API call if available.
            await new Promise((r) => setTimeout(r, 800));
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 2500);
        }
    };

    return (
        <div className="contact-page container">
            <div className="contact-grid">
                <section className="contact-info-panel">
                    <h2>Get in touch</h2>
                    <p className="muted">We’d love to hear from you. Whether you have a question about features, trials, pricing, need a demo, or anything else — our team is ready to answer all your questions.</p>

                    <div className="contact-cards">
                        <div className="card">
                            <h3>Email Us</h3>
                            <a href="mailto:support@example.com">support@example.com</a>
                        </div>
                        <div className="card">
                            <h3>Call</h3>
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                        <div className="card">
                            <h3>Visit</h3>
                            <address>123 React Street<br />Suite 100<br />San Francisco, CA</address>
                        </div>
                    </div>

                    <div className="map-placeholder" aria-hidden>
                        Map placeholder
                    </div>
                </section>

                <section className="contact-form-panel">
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <label className="input-group">
                                <input
                                    name="name"
                                    placeholder=" "
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="label">Your Name</span>
                            </label>

                            <label className="input-group">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder=" "
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="label">Email Address</span>
                            </label>
                        </div>

                        <label className="input-group">
                            <textarea
                                name="message"
                                placeholder=" "
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                                required
                            />
                            <span className="label">Message</span>
                        </label>

                        <div className="form-actions">
                            <button className="btn-primary" type="submit" disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                            {status === "success" && <span className="form-success">Message sent — we’ll reply soon.</span>}
                            {status === "error" && <span className="form-error">Something went wrong. Try again.</span>}
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;